// ==UserScript==
// @name Minimal Tetris Battle
// @namespace minimaltetrisbattle
// @description Reduces TB lag as much as possible
// @include http*://tbc.tetrisfb.com/
// @include http*://tbc.tetrisfb.com/?*
// @include http*://tbc.tetrisfb.com/index.php*
// @grant none
// @run-at document-end
// @version 0.0.5
// @author morningpee
// ==/UserScript==

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
    var fo = document.getElementById("flash-object").cloneNode();
    var dbc = document.body.children;
    for(var i = 0; i < dbc.length; i++)
        document.body.removeChild(dbc[i]);
    document.body.appendChild(fo);
}
