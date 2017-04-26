// ==UserScript==
// @name Minimal Tetris Battle
// @namespace minimaltetrisbattle
// @description Reduces lag as much as possible
// @include http*://tbc.tetrisfb.com/
// @include http*://tbc.tetrisfb.com/?*
// @include http*://tbc.tetrisfb.com/index.php*
// @grant none
// @run-at document-end
// @version 0.0.3
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
    sponsorpayIsAvailable = function(){ return false; }

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
    spotxOnOpen = function(){};
    FB.log = function(){};
}
