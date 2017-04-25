// ==UserScript==
// @name Minimal Tetris Battle
// @namespace minimaltetrisbattle
// @description Reduces lag as much as possible
// @include http*://tbc.tetrisfb.com/
// @include http*://tbc.tetrisfb.com/index.php
// @grant none
// @run-at document-end
// @version 0.0.1
// @author morningpee
// ==/UserScript==

with(window)
{
    sponsorpayTimerId = -1
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
}
