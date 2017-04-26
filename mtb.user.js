// ==UserScript==
// @name Minimal Tetris Battle
// @namespace minimaltetrisbattle
// @description Reduces TB lag as much as possible
// @include http*://tbc.tetrisfb.com/
// @include http*://tbc.tetrisfb.com/?*
// @include http*://tbc.tetrisfb.com/index.php*
// @grant none
// @run-at document-end
// @version 0.0.8
// @author morningpee
// ==/UserScript==

function getFlashContainerSize()
{
    flashContainerSize = new Object();

    flashContainerSize.T_PAN_X_INDEX = 0;
    flashContainerSize.T_PAN_Y_INDEX = 1;

    flashContainerSize.T_WIDTH_SCALE_INDEX = 2;
    flashContainerSize.T_HEIGHT_SCALE_INDEX = 3;

    flashContainerSize.T_WIDTH_INDEX = 8;
    flashContainerSize.T_HEIGHT_INDEX = 9;
    flashContainerSize.T_QUALITY_INDEX = 19;

    flashContainerSize.originalWidth = 760;
    flashContainerSize.originalHeight = 700;

    flashContainer.style.width = flashContainerSize.originalWidth + "px";
    flashContainer.style.height = flashContainerSize.originalHeight + "px";
}

function scaleFlashContainer()
{
    flashContainer.style.visibility = "initial";
    var windowAspectRatio = innerHeight / innerWidth;

    var flashContainerAspectRatio = flashContainerSize.originalHeight / flashContainerSize.originalWidth;

    var scaleFactorX, scaleFactorY;
    var updatedWidth, updatedHeight;

    if(  flashContainerAspectRatio > windowAspectRatio )
    {
        updatedWidth = Math.round( innerHeight / flashContainerAspectRatio );
        updatedHeight = innerHeight;
    }
    else
    {
        updatedWidth = innerWidth;
        updatedHeight = Math.round( innerWidth * flashContainerAspectRatio );
    }

    scaleFactorX = updatedWidth / flashContainerSize.originalWidth;
    scaleFactorY = updatedHeight / flashContainerSize.originalHeight;
    flashContainer.TSetProperty("/", flashContainerSize.T_WIDTH_SCALE_INDEX, 100 * scaleFactorX);
    flashContainer.TSetProperty("/", flashContainerSize.T_HEIGHT_SCALE_INDEX, 100 * scaleFactorY);

    flashContainer.style.marginLeft = -updatedWidth / 2 + "px";
    flashContainer.style.marginTop = -updatedHeight / 2 + "px";

    flashContainer.style.width = updatedWidth + "px";
    flashContainer.style.height = updatedHeight + "px";
}

function runOnFlashContainerLoaded()
{
    flashContainer = document.getElementById("flash-object");
    var percentLoaded = "0";
    try{
        percentLoaded = flashContainer.PercentLoaded();

        /* this line will fail if it is not loaded */
        flashContainer.TGetProperty('/', 0);
    }
    catch(e){
        percentLoaded = "0";
    }
    if( percentLoaded != "100" )
       return setTimeout( runOnFlashContainerLoaded, 5000 );
    getFlashContainerSize();
    flashContainer.TSetProperty('/', flashContainerSize.T_QUALITY_INDEX, "LOW");

    scaleFlashContainer();

}

with(window)
{
    sponsorpayTimerId = -1;
    sponsorpayScript = "about:blank";
    sponsorpayOnRefresh = function(){};
    sponsorpayOnReady = function(){};
    sponsorpayOnOpen = function(){};
    sponsorpayOnComplete = function(){};
    sponsorpayOnClose = function(){};
    sponsorpayOffers = [];
    sponsorpayIsAvailable = function(){ return false; };

    jungroupOnOpen = function(){};
    jungroupOnClose = function(){};
    jungroupOnComplete = function(){};

    videoAdId = -1;
    videoAdReward = -1;
    videoAdRewardType = "energy";
    videoOnAdVisible = false;
    videoOnClose = function(){};
    videoOnComplete = function(){};
    videoOnOpen = function(){};
    videoOnReward = function(){};

    initAdvertisements = function(){};
    initAdvertisementsComplete = function(){};
    initAnalytics = function(){};
    initBanner = function(){};
    initEbuzzing = function(){};
    initHouseAds = function(){};
    initVideoAds = function(){};
    initSponsorPayArmor = function(){};
    initSponsorPayEnergy = function(){};
    initSponsorPayGatcha = function(){};
    initSupersonicAds = function(){};
    initTrialpayBanner = function(){};
    initVideoAds = function(){};

    getDealSpotArmor = function(){};
    getDealSpotEnergy1 = function(){};
    getDealSpotEnergy2 = function(){};
    getDealSpotEnergy3 = function(){};
    getDealSpotEnergy4 = function(){};
    getDealSpotCash = function(){};
    dealspotOfferComplete = function(){};

    trialPayOnAvailable = function(){};
    trialPayOnComplete = function(){};
    trialPayOnUnavailable = function(){};
    trialPayPaymentOverlayScript = "about:blank";

    trackEvent = function(){};
    trackFlashEvent = function(){};
    trackGAEvent = function(){};

    refreshAdvertisements = function(){};
    houseOnOpen = function(){};
    lifestreetOnOpen = function(){};
    spotxOnOpen = function(){};
    FB = null;

    optimatic = null;
    optimaticAdTime = -1;
    optimaticTimeout = -1;
    optimaticOnOpen = function(){};
    optimaticRemoveIframe = function(){};
    optimaticShowStatic = function(){};

    liveRailTest = function(){};
    liveRailSpotxTest = function(){};
    liveRailOnOpen = function(){};

    onPageLoad = {};

    document.head.innerHTML = "";
    document.head.appendChild( document.createElement("style") ).innerHTML = "body{ position:relative; margin: 0; } #flash-object{ position: absolute; left: 50%; top: calc( 100% / 1.8 ); margin-left: -25%; margin-top: -25%; } #flash-container, #page-container{ height: calc( 350px + 37.5px ) !important; }";

    var contentWrapper = document.getElementById("content-wrapper");
    var contentMain = contentWrapper.children[0].cloneNode();
    var appContainer = document.getElementById("app-container");
    var flashObject = document.getElementById("flash-object");

    flashObject.parentNode.removeChild(flashObject);
    appContainer.parentNode.removeChild(appContainer);
    contentWrapper = contentWrapper.cloneNode();
    document.body = document.body.cloneNode();

    contentMain.appendChild(appContainer);
    contentWrapper.appendChild(contentMain);
    document.body.appendChild(contentWrapper);
    document.body.appendChild(flashObject);

    runOnFlashContainerLoaded();
    window.addEventListener("resize", scaleFlashContainer );
}
