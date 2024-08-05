gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDleftObjects1_1final = [];

gdjs.GameCode.GDpauseObjects2_1final = [];

gdjs.GameCode.GDrightObjects1_1final = [];

gdjs.GameCode.GDtitleObjects1= [];
gdjs.GameCode.GDtitleObjects2= [];
gdjs.GameCode.GDtitleObjects3= [];
gdjs.GameCode.GDtitleObjects4= [];
gdjs.GameCode.GDBarrelsObjects1= [];
gdjs.GameCode.GDBarrelsObjects2= [];
gdjs.GameCode.GDBarrelsObjects3= [];
gdjs.GameCode.GDBarrelsObjects4= [];
gdjs.GameCode.GDBarreluiObjects1= [];
gdjs.GameCode.GDBarreluiObjects2= [];
gdjs.GameCode.GDBarreluiObjects3= [];
gdjs.GameCode.GDBarreluiObjects4= [];
gdjs.GameCode.GDDroneuiObjects1= [];
gdjs.GameCode.GDDroneuiObjects2= [];
gdjs.GameCode.GDDroneuiObjects3= [];
gdjs.GameCode.GDDroneuiObjects4= [];
gdjs.GameCode.GDDroneObjects1= [];
gdjs.GameCode.GDDroneObjects2= [];
gdjs.GameCode.GDDroneObjects3= [];
gdjs.GameCode.GDDroneObjects4= [];
gdjs.GameCode.GDfloorObjects1= [];
gdjs.GameCode.GDfloorObjects2= [];
gdjs.GameCode.GDfloorObjects3= [];
gdjs.GameCode.GDfloorObjects4= [];
gdjs.GameCode.GDtextObjects1= [];
gdjs.GameCode.GDtextObjects2= [];
gdjs.GameCode.GDtextObjects3= [];
gdjs.GameCode.GDtextObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDSpringObjects1= [];
gdjs.GameCode.GDSpringObjects2= [];
gdjs.GameCode.GDSpringObjects3= [];
gdjs.GameCode.GDSpringObjects4= [];
gdjs.GameCode.GDbgObjects1= [];
gdjs.GameCode.GDbgObjects2= [];
gdjs.GameCode.GDbgObjects3= [];
gdjs.GameCode.GDbgObjects4= [];
gdjs.GameCode.GDloseObjects1= [];
gdjs.GameCode.GDloseObjects2= [];
gdjs.GameCode.GDloseObjects3= [];
gdjs.GameCode.GDloseObjects4= [];
gdjs.GameCode.GDretryObjects1= [];
gdjs.GameCode.GDretryObjects2= [];
gdjs.GameCode.GDretryObjects3= [];
gdjs.GameCode.GDretryObjects4= [];
gdjs.GameCode.GDscoreloseObjects1= [];
gdjs.GameCode.GDscoreloseObjects2= [];
gdjs.GameCode.GDscoreloseObjects3= [];
gdjs.GameCode.GDscoreloseObjects4= [];
gdjs.GameCode.GDpausetextObjects1= [];
gdjs.GameCode.GDpausetextObjects2= [];
gdjs.GameCode.GDpausetextObjects3= [];
gdjs.GameCode.GDpausetextObjects4= [];
gdjs.GameCode.GDresumeObjects1= [];
gdjs.GameCode.GDresumeObjects2= [];
gdjs.GameCode.GDresumeObjects3= [];
gdjs.GameCode.GDresumeObjects4= [];
gdjs.GameCode.GDpauseObjects1= [];
gdjs.GameCode.GDpauseObjects2= [];
gdjs.GameCode.GDpauseObjects3= [];
gdjs.GameCode.GDpauseObjects4= [];
gdjs.GameCode.GDrightObjects1= [];
gdjs.GameCode.GDrightObjects2= [];
gdjs.GameCode.GDrightObjects3= [];
gdjs.GameCode.GDrightObjects4= [];
gdjs.GameCode.GDleftObjects1= [];
gdjs.GameCode.GDleftObjects2= [];
gdjs.GameCode.GDleftObjects3= [];
gdjs.GameCode.GDleftObjects4= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDBagObjects1= [];
gdjs.GameCode.GDBagObjects2= [];
gdjs.GameCode.GDBagObjects3= [];
gdjs.GameCode.GDBagObjects4= [];
gdjs.GameCode.GDx2Objects1= [];
gdjs.GameCode.GDx2Objects2= [];
gdjs.GameCode.GDx2Objects3= [];
gdjs.GameCode.GDx2Objects4= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects2Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects2});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springRandom")) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springChance"));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.GameCode.GDSpringObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomX")) + gdjs.random((( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth()) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springWidth"))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), "");
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects2[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects2[i].getBehavior("Scale").setScale(0.5);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getHeight());
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("platformDistance")) + gdjs.random(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomPlatformDistance"))));
}{runtimeScene.getScene().getVariables().get("randomX").setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth())));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("randomX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), "");
}{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].setZOrder(1);
}
}{runtimeScene.getScene().getVariables().get("springRandom").setNumber(gdjs.randomInRange(1, 100));
}{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].getBehavior("Resizable").setSize(70, 40);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects2[k] = gdjs.GameCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].returnVariable(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects2Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "cartoon-jump-6462.mp3", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumping")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")) + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].returnVariable(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlatformObjects1Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("movingCamera")) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("totalMovingSpeed").setNumber(Math.min(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("movingSpeed")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("increasedSpeedPerScore")) * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("maxMovingSpeed"))));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("totalMovingSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY(""));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects3Objects = Hashtable.newFrom({"Drone": gdjs.GameCode.GDDroneObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects2Objects = Hashtable.newFrom({"Drone": gdjs.GameCode.GDDroneObjects2});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13256972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "throwRock") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockTime"));
if (isConditionTrue_0) {
gdjs.GameCode.GDDroneObjects3.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects3Objects, gdjs.random(300) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockWidth")) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), "");
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects3[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects3[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockSpeed")), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects3[i].getBehavior("Scale").setScale(1.5);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "throwRock") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockTime"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 500;
}
if (isConditionTrue_0) {
gdjs.GameCode.GDDroneObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects2Objects, gdjs.random(300) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockWidth")) / 2, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), "");
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects2[i].addForce(0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("rockSpeed")), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDroneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects2[i].getBehavior("Scale").setScale(1.5);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects1Objects = Hashtable.newFrom({"Drone": gdjs.GameCode.GDDroneObjects1});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("throwRocks")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drone"), gdjs.GameCode.GDDroneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDroneObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDroneObjects2[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getHeight()) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDroneObjects2[k] = gdjs.GameCode.GDDroneObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDroneObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDroneObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDroneObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDroneObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drone"), gdjs.GameCode.GDDroneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDroneObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumping")) == 0;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("commonJumpSpeed")));
}
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.GameCode.GDSpringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpringObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDSpringObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("springJumpSpeed")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects1[i].setAnimation(1);
}
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-video-game-spin-jump-2648.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13266404);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.GameCode.GDbgObjects2);
gdjs.copyArray(runtimeScene.getObjects("lose"), gdjs.GameCode.GDloseObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "lose");
}{for(var i = 0, len = gdjs.GameCode.GDloseObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDloseObjects2[i].setOutline("74;144;226", 20);
}
}{for(var i = 0, len = gdjs.GameCode.GDbgObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbgObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}{gdjs.adMob.loadRewardedVideo("", "", true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAnimationName("fall");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setY(gdjs.GameCode.GDPlayerObjects2[i].getY() + (400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("retry"), gdjs.GameCode.GDretryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDretryObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDretryObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDretryObjects2[k] = gdjs.GameCode.GDretryObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDretryObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("jump"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bag"), gdjs.GameCode.GDBagObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBagObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBagObjects2[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBagObjects2[k] = gdjs.GameCode.GDBagObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBagObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "store", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("x2"), gdjs.GameCode.GDx2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDx2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDx2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDx2Objects1[k] = gdjs.GameCode.GDx2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDx2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.adMob.loadRewardedVideo("", "", true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).mul(2);
}}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("gameRunning")) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{

gdjs.GameCode.GDpauseObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDpauseObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.GameCode.GDpauseObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDpauseObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDpauseObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDpauseObjects3[k] = gdjs.GameCode.GDpauseObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDpauseObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDpauseObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDpauseObjects2_1final.indexOf(gdjs.GameCode.GDpauseObjects3[j]) === -1 )
            gdjs.GameCode.GDpauseObjects2_1final.push(gdjs.GameCode.GDpauseObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDpauseObjects2_1final, gdjs.GameCode.GDpauseObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.GameCode.GDbgObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "pause-89443.mp3", false, 100, 1);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "pause");
}{for(var i = 0, len = gdjs.GameCode.GDbgObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbgObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resume"), gdjs.GameCode.GDresumeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDresumeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDresumeObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDresumeObjects1[k] = gdjs.GameCode.GDresumeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDresumeObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "pause");
}{gdjs.evtTools.sound.playSound(runtimeScene, "unpause-106278.mp3", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "red";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "208;2;27", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "green";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "126;211;33", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "yellow";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "243;225;12", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "blue";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "25;123;238", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "purple";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "144;19;254", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "white";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("245;166;35", "238;231;232", 90, 90, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("movingCamera").setNumber(0);
}{runtimeScene.getScene().getVariables().get("movingSpeed").setNumber(10);
}{runtimeScene.getScene().getVariables().get("increasedSpeedPerScore").setNumber(0.5);
}{runtimeScene.getScene().getVariables().get("maxMovingSpeed").setNumber(100);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().get("platformDistance").setNumber(90);
}{runtimeScene.getScene().getVariables().get("randomPlatformDistance").setNumber(5);
}{runtimeScene.getScene().getVariables().get("throwRocks").setNumber(1);
}{runtimeScene.getScene().getVariables().get("rockTime").setNumber(4);
}{runtimeScene.getScene().getVariables().get("rockWidth").setNumber(50);
}{runtimeScene.getScene().getVariables().get("rockSpeed").setNumber(80);
}{runtimeScene.getScene().getVariables().get("springChance").setNumber(5);
}{runtimeScene.getScene().getVariables().get("springWidth").setNumber(20);
}{runtimeScene.getScene().getVariables().get("commonJumpSpeed").setNumber(680);
}{runtimeScene.getScene().getVariables().get("springJumpSpeed").setNumber(2000);
}{runtimeScene.getScene().getVariables().get("springJumping").setNumber(0);
}{runtimeScene.getScene().getVariables().get("gamePaused").setNumber(0);
}{runtimeScene.getScene().getVariables().get("gameRunning").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "save-as-115826.mp3", true, 70, 1);
}{gdjs.adMob.loadInterstitial("", "", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Barrelui"), gdjs.GameCode.GDBarreluiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Droneui"), gdjs.GameCode.GDDroneuiObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.GameCode.GDtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("title"), gdjs.GameCode.GDtitleObjects1);
{for(var i = 0, len = gdjs.GameCode.GDtitleObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtitleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDBarreluiObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBarreluiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDDroneuiObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDroneuiObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("jump"), true);
}{runtimeScene.getScene().getVariables().get("movingCamera").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.GameCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.GameCode.GDrightObjects1);
{for(var i = 0, len = gdjs.GameCode.GDrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDrightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDleftObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDleftObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("jump"), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13241404);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.GameCode.GDleftObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("jump"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDleftObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.GameCode.GDleftObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDleftObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDleftObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDleftObjects2[k] = gdjs.GameCode.GDleftObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDleftObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDleftObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDleftObjects1_1final.indexOf(gdjs.GameCode.GDleftObjects2[j]) === -1 )
            gdjs.GameCode.GDleftObjects1_1final.push(gdjs.GameCode.GDleftObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDleftObjects1_1final, gdjs.GameCode.GDleftObjects1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.GameCode.GDrightObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("jump"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDrightObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs.GameCode.GDrightObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDrightObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDrightObjects2[k] = gdjs.GameCode.GDrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDrightObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDrightObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDrightObjects1_1final.indexOf(gdjs.GameCode.GDrightObjects2[j]) === -1 )
            gdjs.GameCode.GDrightObjects1_1final.push(gdjs.GameCode.GDrightObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDrightObjects1_1final, gdjs.GameCode.GDrightObjects1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDtitleObjects1.length = 0;
gdjs.GameCode.GDtitleObjects2.length = 0;
gdjs.GameCode.GDtitleObjects3.length = 0;
gdjs.GameCode.GDtitleObjects4.length = 0;
gdjs.GameCode.GDBarrelsObjects1.length = 0;
gdjs.GameCode.GDBarrelsObjects2.length = 0;
gdjs.GameCode.GDBarrelsObjects3.length = 0;
gdjs.GameCode.GDBarrelsObjects4.length = 0;
gdjs.GameCode.GDBarreluiObjects1.length = 0;
gdjs.GameCode.GDBarreluiObjects2.length = 0;
gdjs.GameCode.GDBarreluiObjects3.length = 0;
gdjs.GameCode.GDBarreluiObjects4.length = 0;
gdjs.GameCode.GDDroneuiObjects1.length = 0;
gdjs.GameCode.GDDroneuiObjects2.length = 0;
gdjs.GameCode.GDDroneuiObjects3.length = 0;
gdjs.GameCode.GDDroneuiObjects4.length = 0;
gdjs.GameCode.GDDroneObjects1.length = 0;
gdjs.GameCode.GDDroneObjects2.length = 0;
gdjs.GameCode.GDDroneObjects3.length = 0;
gdjs.GameCode.GDDroneObjects4.length = 0;
gdjs.GameCode.GDfloorObjects1.length = 0;
gdjs.GameCode.GDfloorObjects2.length = 0;
gdjs.GameCode.GDfloorObjects3.length = 0;
gdjs.GameCode.GDfloorObjects4.length = 0;
gdjs.GameCode.GDtextObjects1.length = 0;
gdjs.GameCode.GDtextObjects2.length = 0;
gdjs.GameCode.GDtextObjects3.length = 0;
gdjs.GameCode.GDtextObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDSpringObjects1.length = 0;
gdjs.GameCode.GDSpringObjects2.length = 0;
gdjs.GameCode.GDSpringObjects3.length = 0;
gdjs.GameCode.GDSpringObjects4.length = 0;
gdjs.GameCode.GDbgObjects1.length = 0;
gdjs.GameCode.GDbgObjects2.length = 0;
gdjs.GameCode.GDbgObjects3.length = 0;
gdjs.GameCode.GDbgObjects4.length = 0;
gdjs.GameCode.GDloseObjects1.length = 0;
gdjs.GameCode.GDloseObjects2.length = 0;
gdjs.GameCode.GDloseObjects3.length = 0;
gdjs.GameCode.GDloseObjects4.length = 0;
gdjs.GameCode.GDretryObjects1.length = 0;
gdjs.GameCode.GDretryObjects2.length = 0;
gdjs.GameCode.GDretryObjects3.length = 0;
gdjs.GameCode.GDretryObjects4.length = 0;
gdjs.GameCode.GDscoreloseObjects1.length = 0;
gdjs.GameCode.GDscoreloseObjects2.length = 0;
gdjs.GameCode.GDscoreloseObjects3.length = 0;
gdjs.GameCode.GDscoreloseObjects4.length = 0;
gdjs.GameCode.GDpausetextObjects1.length = 0;
gdjs.GameCode.GDpausetextObjects2.length = 0;
gdjs.GameCode.GDpausetextObjects3.length = 0;
gdjs.GameCode.GDpausetextObjects4.length = 0;
gdjs.GameCode.GDresumeObjects1.length = 0;
gdjs.GameCode.GDresumeObjects2.length = 0;
gdjs.GameCode.GDresumeObjects3.length = 0;
gdjs.GameCode.GDresumeObjects4.length = 0;
gdjs.GameCode.GDpauseObjects1.length = 0;
gdjs.GameCode.GDpauseObjects2.length = 0;
gdjs.GameCode.GDpauseObjects3.length = 0;
gdjs.GameCode.GDpauseObjects4.length = 0;
gdjs.GameCode.GDrightObjects1.length = 0;
gdjs.GameCode.GDrightObjects2.length = 0;
gdjs.GameCode.GDrightObjects3.length = 0;
gdjs.GameCode.GDrightObjects4.length = 0;
gdjs.GameCode.GDleftObjects1.length = 0;
gdjs.GameCode.GDleftObjects2.length = 0;
gdjs.GameCode.GDleftObjects3.length = 0;
gdjs.GameCode.GDleftObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDBagObjects1.length = 0;
gdjs.GameCode.GDBagObjects2.length = 0;
gdjs.GameCode.GDBagObjects3.length = 0;
gdjs.GameCode.GDBagObjects4.length = 0;
gdjs.GameCode.GDx2Objects1.length = 0;
gdjs.GameCode.GDx2Objects2.length = 0;
gdjs.GameCode.GDx2Objects3.length = 0;
gdjs.GameCode.GDx2Objects4.length = 0;

gdjs.GameCode.eventsList11(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
