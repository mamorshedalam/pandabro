
if (typeof gdjs.evtsExt__Recolorizer__DefineJavaScript !== "undefined") {
  gdjs.evtsExt__Recolorizer__DefineJavaScript.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Recolorizer__DefineJavaScript = {};


gdjs.evtsExt__Recolorizer__DefineJavaScript.userFunc0x91afa0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.__recolorizerExtension) {
    return;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 * https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {number[]}           The RGB representation
 */
function hslToRgb(h, s, l) {
    let r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 * https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {number[]}           The HSL representation
 */
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {PIXI.Texture} texture
 * @returns {HTMLCanvasElement}
 */
function resetCanvas(canvas, texture) {
    const context = canvas.getContext('2d');
    const crop = texture._frame;
    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.getDrawableSource(),
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
    context.restore();
    return canvas;
}

/**
 * Replace a color with an other one.
 *
 * @param {HTMLCanvasElement} sourceCanvas
 * @param {HTMLCanvasElement} targetCanvas
 * @param {{x: number, y: number, width: number, height: number}} frame
 * @param {[number, number, number]} originColor The color to replace from.
 * @param {[number, number, number]} targetColor The color to replate to.
 * @param {number} hueScope Pixels within the hue scope relatively from originColor are recolorized.
 * @param {number} saturationScope Pixels within the saturation scope relatively from originColor are recolorized.
 * @param {number} lighnessScope Pixels within the lightness scope relatively from originColor are recolorized.
 */
function recolorizeTexture(sourceCanvas, targetCanvas, frame, originColor, targetColor, hueScope, saturationScope, lighnessScope) {
    const sourceContext = sourceCanvas.getContext('2d');
    const targetContext = targetCanvas.getContext('2d');
    const sourcePixels = sourceContext.getImageData(0, 0, frame.width, frame.height).data;
    const targetImageData = targetContext.getImageData(0, 0, frame.width, frame.height);
    const targetPixels = targetImageData.data;

    const originColorHSL = rgbToHsl(originColor[0], originColor[1], originColor[2]);
    const targetColorHSL = rgbToHsl(targetColor[0], targetColor[1], targetColor[2]);

    const originHue = originColorHSL[0];
    const originSaturation = originColorHSL[1];
    const originLightness = originColorHSL[2];

    const targetHue = targetColorHSL[0];
    const targetSaturation = targetColorHSL[1];
    const saturationDelta = targetSaturation - originSaturation;
    const lightnessDelta = targetColorHSL[2] - originLightness;

    // hue is not knowned for graycase colors.
    const hueIsConstrained = hueScope < 0.5;

    for (let i = 0; i < sourcePixels.length; i += 4) {
        const alpha = sourcePixels[i + 3];
        if (alpha === 0) {
            continue;
        }
        const pixelHsl = rgbToHsl(sourcePixels[i + 0], sourcePixels[i + 1], sourcePixels[i + 2]);

        const pixelHue = pixelHsl[0];
        const pixelSaturation = pixelHsl[1];
        const pixelLightness = pixelHsl[2];

        const hueDelta = gdjs.evtTools.common.mod(pixelHue - originHue + 0.5, 1) - 0.5;
        if ((!hueIsConstrained || Math.abs(hueDelta) <= hueScope)
         && Math.abs(pixelSaturation - originSaturation) <= saturationScope
         && Math.abs(pixelLightness - originLightness) <= lighnessScope) {
            // graycase pixels must take the targeted hue
            pixelHsl[0] = pixelSaturation === 0 ? targetHue : gdjs.evtTools.common.mod(pixelHue - originHue + targetHue, 1);
            // white pixels must also take the targeted saturation.
            pixelHsl[1] = pixelLightness > 0.999 ? targetSaturation : gdjs.evtTools.common.clamp(pixelSaturation + saturationDelta, 0, 1);
            pixelHsl[2] = gdjs.evtTools.common.clamp(pixelLightness + lightnessDelta, 0, 1);
            const pixelRgb = hslToRgb(pixelHsl[0], pixelHsl[1], pixelHsl[2]);
            targetPixels[i + 0] = pixelRgb[0];
            targetPixels[i + 1] = pixelRgb[1];
            targetPixels[i + 2] = pixelRgb[2];
        }
    }
    targetContext.putImageData(targetImageData, 0, 0);
};

/**
 * @param {[number, number, number]} originColor The color to replace from.
 * @param {[number, number, number]} targetColor The color to replate to.
 * @param {number} hueScope Pixels within the hue scope relatively from originColor are recolorized.
 * @param {number} saturationScope Pixels within the saturation scope relatively from originColor are recolorized.
 * @param {number} lighnessScope Pixels within the lightness scope relatively from originColor are recolorized.
 * @return {number} key
 */
function getRecolorizationKey(originColor, targetColor, hueScope, saturationScope, lighnessScope) {
    return String.fromCharCode(originColor[0] * (2 ** 8) + originColor[1],
        originColor[2] * (2 ** 8) + targetColor[0],
        targetColor[1] * (2 ** 8) + targetColor[2],
        (hueScope * (2 ** 8) + saturationScope) * (2 ** 8),
        lighnessScope * (2 ** 8));
}

/**
 * @param {PIXI.Texture} texture
 * @returns {HTMLCanvasElement}
 */
function getCanvas(texture) {
    /** @type {HTMLCanvasElement} */
    const canvas = document.createElement('canvas');

    const context = canvas.getContext('2d');
    const crop = texture._frame.clone();
    const resolution = texture.baseTexture.resolution;

    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.getDrawableSource(),
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
    context.restore();

    return canvas;
}

/**
 * Manage recolorizations to ensure uniqueness of textures.
 **/
class RecolorizationManager {
    /**
     * Create a manager.
     * @param {PIXI.Texture[]} sourceTextures
     */
    constructor(sourceTextures) {
        /** @type {PIXI.Texture[]} */
        this.sourceTextures = sourceTextures;
        this.sourceCanvas = sourceTextures.map(texture => gdjs.__recolorizerExtension.getCanvas(texture));
        /** @type {Map<string, {userCount: integer, textures: PIXI.Texture[], canvas: HTMLCanvasElement[]}>} */
        this.recolorizedSprites = new Map();
        /** @type {Array<{userCount: integer, textures: PIXI.Texture[], canvas: HTMLCanvasElement[]}>} */
        this.recycledRecolorizedSprites = [];
    }

    /**
     * Unregister a recoloration usage.
     *
     * @param {string} previousRecolorizationKey
     */
    unregister(previousRecolorizationKey) {
        const previousRecolorizedSprite = this.recolorizedSprites.get(previousRecolorizationKey);
        if (previousRecolorizedSprite) {
            previousRecolorizedSprite.userCount--;
            if (previousRecolorizedSprite.userCount <= 0) {
                this.recolorizedSprites.delete(previousRecolorizationKey);
                this.recycledRecolorizedSprites.push(previousRecolorizedSprite);
            }
        }
    }

    /**
     * Register a recolorization usage and get recolored textures.
     *
     * @param {string} recolorizationKey
     * @param {Array<{originColor: [number, number, number], targetColor: [number, number, number], hueScope: number, saturationScope: number, lighnessScope: number}>} recolorizations
     * @returns {PIXI.Texture[]} 
     */
    register(recolorizationKey, recolorizations) {
        if (recolorizationKey === "") {
            return this.sourceTextures;
        }

        /** @type {PIXI.Texture[]} */
        let targetTextures;
        let recolorizedSprite = this.recolorizedSprites.get(recolorizationKey);
        if (recolorizedSprite) {
            targetTextures = recolorizedSprite.textures;
        }
        else {
            if (this.recycledRecolorizedSprites.length > 0) {
                const reusableRecolorizedSprite = this.recycledRecolorizedSprites.pop();
                targetTextures = reusableRecolorizedSprite.textures;
                /** @type {PIXI.Texture[]} */
                const targetCanvas = reusableRecolorizedSprite.canvas;

                for (let textureIndex = 0; textureIndex < this.sourceTextures.length; textureIndex++) {
                    const sourceTexture = this.sourceTextures[textureIndex];
                    const targetCanva = targetCanvas[textureIndex];
                    resetCanvas(targetCanva, sourceTexture);
                }

                this._recolorizeAll(targetCanvas, recolorizations);

                targetTextures.forEach(texture => texture.update());
                reusableRecolorizedSprite.userCount = 0;
                recolorizedSprite = reusableRecolorizedSprite;
            }
            else {
                /** @type {HTMLCanvasElement[]} */
                const targetCanvas = this.sourceTextures.map(texture => gdjs.__recolorizerExtension.getCanvas(texture));

                this._recolorizeAll(targetCanvas, recolorizations);

                targetTextures = targetCanvas.map((targetCanva, index) => {
                    const texture = PIXI.Texture.from(targetCanva);
                    texture.baseTexture.scaleMode = this.sourceTextures[index].baseTexture.scaleMode;
                    texture.baseTexture.wrapMode = this.sourceTextures[index].baseTexture.wrapMode;
                    texture.baseTexture.alphaMode = this.sourceTextures[index].baseTexture.alphaMode;
                    return texture;
                });
                recolorizedSprite = { userCount: 0, textures: targetTextures, canvas: targetCanvas };
            }
            this.recolorizedSprites.set(recolorizationKey, recolorizedSprite);
        }
        recolorizedSprite.userCount++;
        return targetTextures;
    }

    /**
     * Apply a recoloration to every textures.
     *
     * @param {HTMLCanvasElement[]} targetCanvas
     * @param {Array<{originColor: [number, number, number], targetColor: [number, number, number], hueScope: number, saturationScope: number, lighnessScope: number}>} recolorizations
     */
    _recolorizeAll(targetCanvas, recolorizations) {
        for (let textureIndex = 0; textureIndex < this.sourceTextures.length; textureIndex++) {
            const sourceTexture = this.sourceTextures[textureIndex];
            const targetCanva = targetCanvas[textureIndex];
            const frame = sourceTexture._frame;
            for (const recolorization of recolorizations) {
                recolorizeTexture(
                    this.sourceCanvas[textureIndex],
                    targetCanva,
                    frame,
                    recolorization.originColor,
                    recolorization.targetColor,
                    recolorization.hueScope,
                    recolorization.saturationScope,
                    recolorization.lighnessScope
                );
            }
        }
    }
}

/**
 * Object recolorizer.
 **/
class Recolorizer {
    /**
     * Create an object recolorizer.
     * @param {RecolorizationManager} manager
     * @param {{texture: PIXI.Texture[]}} sourceTextureConatiners
     */
    constructor(manager, sourceTextureContainers) {
        this.manager = manager;
        this.sourceTextureContainers = sourceTextureContainers;

        this.previousRecolorizationKey = "";
        this.recolorizationKey = "";
        /** @type {Array<{originColor: [number, number, number], targetColor: [number, number, number], hueScope: number, saturationScope: number, lighnessScope: number}>} */
        this.recolorizations = [];
    }

    /**
     * Replace a color with an other one.
     *
     * @param {[number, number, number]} originColor The color to replace from.
     * @param {[number, number, number]} targetColor The color to replate to.
     * @param {number} hueScope Pixels within the hue scope relatively from originColor are recolorized.
     * @param {number} saturationScope Pixels within the saturation scope relatively from originColor are recolorized.
     * @param {number} lighnessScope Pixels within the lightness scope relatively from originColor are recolorized.
     */
    recolorizeSprite(originColor, targetColor, hueScope, saturationScope, lighnessScope) {
        this.recolorizationKey += getRecolorizationKey(originColor, targetColor, hueScope, saturationScope, lighnessScope);
        this.recolorizations.push({ originColor, targetColor, hueScope, saturationScope, lighnessScope});
    }

    /**
     * Reset the default textures of the object.
     */
    resetSprite() {
        this.recolorizationKey = "";
        this.recolorizations = [];
    }

    /**
     * Update the textures of the object.
     */
    updateSprite() {
        const needsRecolorization = this.recolorizationKey !== this.previousRecolorizationKey;
        if (needsRecolorization) {
            this.manager.unregister(this.previousRecolorizationKey);

            /** @type {PIXI.Texture[]} */
            const targetTextures = this.manager.register(this.recolorizationKey, this.recolorizations);

            let textureIndex = 0;
            for (const container of this.sourceTextureContainers) {
                container.texture = targetTextures[textureIndex];
                textureIndex++;
            }
            this.previousRecolorizationKey = this.recolorizationKey;
        }
        return needsRecolorization;
    }
}

gdjs.__recolorizerExtension = {
    getCanvas,
    RecolorizationManager,
    Recolorizer
};
};
gdjs.evtsExt__Recolorizer__DefineJavaScript.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Recolorizer__DefineJavaScript.userFunc0x91afa0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Recolorizer__DefineJavaScript.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Recolorizer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Recolorizer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Recolorizer__DefineJavaScript.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Recolorizer__DefineJavaScript.registeredGdjsCallbacks = [];