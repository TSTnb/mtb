// ==UserScript==
// @name Minimal Tetris Battle
// @namespace minimaltetrisbattle
// @description Reduces TB lag as much as possible
// @include http*://tbc.tetrisfb.com/
// @include http*://tbc.tetrisfb.com/?*
// @include http*://tbc.tetrisfb.com/index.php*
// @grant none
// @run-at document-end
// @version 0.0.16
// @author morningpee
// ==/UserScript==

function main()
{
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

    scaleFlashContainer = function()
    {
        var fullScreen = document.getElementById('resize_button').checked;

        flashContainer.style.visibility = "initial";
        var screenHeight = innerHeight
            screenWidth = innerWidth;
        var windowAspectRatio = screenHeight / screenWidth;

        var flashContainerAspectRatio = flashContainerSize.originalHeight / flashContainerSize.originalWidth;

        var scaleFactorX, scaleFactorY;
        var updatedWidth = flashContainerSize.originalWidth,
            updatedHeight = flashContainerSize.originalHeight;

        if(fullScreen === true) {
            if(  flashContainerAspectRatio > windowAspectRatio ) {
                updatedWidth = Math.round( screenHeight / flashContainerAspectRatio );
                updatedHeight = screenHeight;
            } else {
                updatedWidth = screenWidth;
                updatedHeight = Math.round( screenWidth * flashContainerAspectRatio );
            }
        }

        scaleFactorX = updatedWidth / flashContainerSize.originalWidth;
        scaleFactorY = updatedHeight / flashContainerSize.originalHeight;
        flashContainer.TSetProperty("/", flashContainerSize.T_WIDTH_SCALE_INDEX, 100 * scaleFactorX);
        flashContainer.TSetProperty("/", flashContainerSize.T_HEIGHT_SCALE_INDEX, 100 * scaleFactorY);

        flashContainer.style.marginLeft = -updatedWidth / 2 + "px";

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
        document.getElementById('flash-object').scrollIntoView(true)

    }

    function runOnFlashExists()
    {
        if(document.getElementById('flash-object').nodeName !== 'OBJECT') {
            setTimeout(runOnFlashExists, 1000);
            return;
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
            document.head.appendChild( document.createElement("style") ).innerHTML = "body{ position:relative; margin: 0; } #flash-object{ position: absolute; left: 50%; top: 0px; margin-left: -25%; margin-top: 0px; } _:-moz-tree-row(hover), #flash-container, #page-container{ height: calc( 350px + 37.5px ) !important; }";

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

            var buttons = document.createElement("div");
            buttons.style.position = 'absolute';

            var messageButton = document.createElement("button");
            messageButton.textContent = 'Messages';
            messageButton.addEventListener('click',
                                           function() {
                flashObject.openMessageCenter('');
            });

            var resizeButton = document.createElement('input');
            resizeButton.setAttribute('type', 'checkbox');
            resizeButton.setAttribute('id', 'resize_button');
            var resizeButtonLabel = document.createElement('label');
            resizeButtonLabel.appendChild(resizeButton);
            resizeButtonLabel.innerHTML += 'Full screen';
            /* has to come after innerHTML edit */
            resizeButtonLabel.children[0].addEventListener('change', scaleFlashContainer);

            buttons.appendChild(messageButton);
            buttons.appendChild(document.createElement('br'));
            buttons.appendChild(resizeButtonLabel);
            document.body.insertBefore(buttons, document.body.children[0]);
            runOnFlashContainerLoaded();
            window.addEventListener("resize", scaleFlashContainer);
        }
    }

    runOnFlashExists();
}

window.document.body.appendChild(document.createElement('script')).textContent = '(' + main + ')();';
