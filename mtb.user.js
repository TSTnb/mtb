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
}
