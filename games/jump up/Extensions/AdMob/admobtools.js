var gdjs;(function(T){let Q;(function(r){const e=new T.Logger("AdMob"),J={appOpen:{android:"ca-app-pub-3940256099942544/9257395921",ios:"ca-app-pub-3940256099942544/5575463023"},banner:{android:"ca-app-pub-3940256099942544/6300978111",ios:"ca-app-pub-3940256099942544/2934735716"},interstitial:{android:"ca-app-pub-3940256099942544/1033173712",ios:"ca-app-pub-3940256099942544/4411468910"},interstitialVideo:{android:"ca-app-pub-3940256099942544/8691691433",ios:"ca-app-pub-3940256099942544/5135589807"},rewarded:{android:"ca-app-pub-3940256099942544/5224354917",ios:"ca-app-pub-3940256099942544/1712485313"},rewardedInterstitial:{android:"ca-app-pub-3940256099942544/5354046379",ios:"ca-app-pub-3940256099942544/6978759866"},native:{android:"ca-app-pub-3940256099942544/2247696110",ios:"ca-app-pub-3940256099942544/3986624511"},nativeVideo:{android:"ca-app-pub-3940256099942544/1044960115",ios:"ca-app-pub-3940256099942544/2521693316"}};let l;(function(s){s[s.BANNER=0]="BANNER",s[s.LARGE_BANNER=1]="LARGE_BANNER",s[s.MEDIUM_RECTANGLE=2]="MEDIUM_RECTANGLE",s[s.FULL_BANNER=3]="FULL_BANNER",s[s.LEADERBOARD=4]="LEADERBOARD",s[s.SMART_BANNER=5]="SMART_BANNER"})(l||(l={}));const X={BANNER:0,LARGE_BANNER:1,MEDIUM_RECTANGLE:2,FULL_BANNER:3,LEADERBOARD:4,SMART_BANNER:5};let C;(function(n){n[n.Portrait=1]="Portrait",n[n.PortraitUpsideDown=2]="PortraitUpsideDown",n[n.LandscapeRight=3]="LandscapeRight",n[n.LandscapeLeft=4]="LandscapeLeft"})(C||(C={}));let G=!1,k=!1,q=!1,R,K=5,W=!1,S=!1,p=!1,O=!1,c,h=!1,A=!1,v=!1,E=!1,u,g=!1,I=!1,V=!1,y=!1,f,L=!1,N=!1,_=!1,F=!1,x=!1,w,B=!1,b=!1,U=!1,P=!1,m=!1,H="0";document.addEventListener("deviceready",async()=>{e.info("Starting AdMob."),k=!0,await admob.start(),e.info("AdMob successfully started."),k=!1,G=!0},!1);const d=async()=>{if(typeof cordova=="undefined")return e.warn("We are not on mobile, AdMob will not be available."),!1;if(typeof admob=="undefined")return e.warn("AdMob has not been configured properly."),!1;if(!G){if(k){let t=0;for(;!G&&t<5e3;)await new Promise(a=>setTimeout(a,100)),t+=100}if(!G)return e.warn("AdMob is not started."),!1}return!0},D=(t,a,o)=>{if(typeof cordova=="undefined"){e.warn("Cordova is not available.");return}return cordova.platformId==="android"?q?J[o].android:t:cordova.platformId==="ios"?q?J[o].ios:a:(e.error("Unsupported platform: ",cordova.platformId),null)};r.setTestMode=async t=>{!await d()||(e.info("Setting AdMob test mode to:",t),q=t)},r.isAppOpenLoading=()=>g,r.isAppOpenReady=()=>I,r.isAppOpenShowing=()=>V,r.isAppOpenErrored=()=>y,r.loadAppOpen=async(t,a,o,i)=>{if(!await d()||g||V)return;const n=D(t,a,"appOpen");if(!!n){g=!0,I=!1,y=!1,u=new admob.AppOpenAd({adUnitId:n,orientation:o?4:1}),u.on("load",()=>{I=!0,g=!1}),u.on("loadfail",()=>{g=!1,y=!0}),u.on("show",()=>{V=!0,I=!1}),u.on("showfail",()=>{V=!1,y=!0}),u.on("dismiss",()=>{V=!1});try{e.info("Loading Admob App Open."),await u.load(),e.info("AdMob App Open successfully loaded."),g=!1,I=!0,i&&r.showAppOpen()}catch(z){e.error("Error while loading an App Open:",z),g=!1,I=!1,y=!0}}},r.showAppOpen=async()=>{if(!!await d()){if(!u){e.warn("App Open has not been set up, call loadAppOpen first.");return}if(!I){e.info("App Open not loaded yet, cannot display it.");return}y=!1;try{e.info("Showing AdMob App Open."),await u.show()}catch(t){e.error("Error while showing an AdMob App Open:",t),V=!1,y=!0}}},r.isBannerConfigured=()=>W,r.isBannerLoaded=()=>S,r.isBannerShowing=()=>p,r.isBannerErrored=()=>O,r.setBannerAdSizeType=t=>{K=X[t]||5},r.setupBanner=async(t,a,o)=>{if(!await d())return;const i=D(t,a,"banner");!i||(R&&p&&(e.info("Banner already visible, hiding it to display new one."),await r.hideBanner()),W=!1,S=!1,R=new admob.BannerAd({adUnitId:i,position:o?"top":"bottom",size:K}),R.on("load",()=>{p=!0,S=!0}),R.on("loadfail",()=>{p=!1,S=!1,O=!0}),W=!0)},r.showBanner=async()=>{if(!R){e.info("Banner not configured, use setupBanner first.");return}if(p){e.info("Banner already visible. Ignoring.");return}O=!1;try{e.info("Showing AdMob banner."),await R.show(),S&&(p=!0)}catch(t){p=!1,O=!0,e.error("Error while showing an AdMob banner:",t)}},r.hideBanner=async()=>{if(!!await d()){if(!R||!p){e.warn("No banner is being shown.");return}await R.hide(),p=!1}},r.isInterstitialLoading=()=>h,r.isInterstitialReady=()=>A,r.isInterstitialShowing=()=>v,r.isInterstitialErrored=()=>E,r.loadInterstitial=async(t,a,o)=>{if(!await d()||h||v)return;const i=D(t,a,"interstitial");if(!!i){h=!0,A=!1,E=!1,c=new admob.InterstitialAd({adUnitId:i,npa:H}),c.on("load",()=>{A=!0,h=!1}),c.on("loadfail",()=>{h=!1,E=!0}),c.on("show",()=>{v=!0,A=!1}),c.on("showfail",()=>{v=!1,E=!0}),c.on("dismiss",()=>{v=!1});try{e.info("Loading Admob interstitial."),await c.load(),e.info("AdMob interstitial successfully loaded."),h=!1,A=!0,o&&r.showInterstitial()}catch(n){e.error("Error while loading a interstitial:",n),h=!1,A=!1,E=!0}}},r.showInterstitial=async()=>{if(!!await d()){if(!c){e.warn("Interstitial has not been set up, call loadInterstitial first.");return}if(!A){e.info("Interstitial not loaded yet, cannot display it.");return}E=!1;try{e.info("Showing AdMob interstitial."),await c.show()}catch(t){e.error("Error while showing an AdMob interstitial:",t),v=!1,E=!0}}},r.isRewardedInterstitialLoading=()=>L,r.isRewardedInterstitialReady=()=>N,r.isRewardedInterstitialShowing=()=>_,r.isRewardedInterstitialErrored=()=>x,r.wasRewardedInterstitialRewardReceived=function(t){const a=F;return t&&(F=!1),a},r.loadRewardedInterstitial=async(t,a,o)=>{if(!await d()||L||_)return;const i=D(t,a,"rewardedInterstitial");if(!!i){L=!0,N=!1,x=!1,f=new admob.RewardedInterstitialAd({adUnitId:i,npa:H}),f.on("load",()=>{N=!0,L=!1}),f.on("loadfail",()=>{L=!1,x=!0}),f.on("show",()=>{_=!0,N=!1}),f.on("showfail",()=>{_=!1,x=!0}),f.on("dismiss",()=>{_=!1}),f.on("reward",()=>{F=!0});try{e.info("Loading AdMob rewarded interstitial."),await f.load(),e.info("AdMob rewarded interstitial successfully loaded."),L=!1,N=!0,o&&r.showRewardedInterstitial()}catch(n){L=!1,N=!1,x=!0,e.error("Error while loading a rewarded interstitial:",n)}}},r.showRewardedInterstitial=async()=>{if(!!await d()){if(!f){e.warn("interstitial has not been set up, call loadRewardedInterstitial first.");return}N||e.info("Rewarded interstitial not loaded yet, cannot display it."),x=!1;try{e.info("Showing AdMob rewarded interstitial."),await f.show()}catch(t){e.error("Error while showing an AdMob rewarded interstitial:",t),_=!1,x=!0}}},r.markRewardedInterstitialRewardAsClaimed=()=>{F=!1},r.isRewardedVideoLoading=()=>B,r.isRewardedVideoReady=()=>b,r.isRewardedVideoShowing=()=>U,r.isRewardedVideoErrored=()=>m,r.wasRewardedVideoRewardReceived=function(t){const a=P;return t&&(P=!1),a},r.loadRewardedVideo=async(t,a,o)=>{if(!await d()||B||U)return;const i=D(t,a,"rewarded");if(!!i){B=!0,b=!1,m=!1,w=new admob.RewardedAd({adUnitId:i,npa:H}),w.on("load",()=>{b=!0,B=!1}),w.on("loadfail",()=>{B=!1,m=!0}),w.on("show",()=>{U=!0,b=!1}),w.on("showfail",()=>{U=!1,m=!0}),w.on("dismiss",()=>{U=!1}),w.on("reward",()=>{P=!0});try{e.info("Loading AdMob rewarded video."),await w.load(),e.info("AdMob rewarded video successfully loaded."),B=!1,b=!0,o&&r.showRewardedVideo()}catch(n){B=!1,b=!1,m=!0,e.error("Error while loading a rewarded video:",n)}}},r.showRewardedVideo=async()=>{if(!!await d()){if(!w){e.warn("Video has not been set up, call loadRewardedVideo first.");return}b||e.info("Rewarded video not loaded yet, cannot display it."),m=!1;try{e.info("Showing AdMob rewarded video."),await w.show()}catch(t){e.error("Error while showing an AdMob rewarded video:",t),U=!1,m=!0}}},r.markRewardedVideoRewardAsClaimed=()=>{P=!1}})(Q=T.adMob||(T.adMob={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=admobtools.js.map