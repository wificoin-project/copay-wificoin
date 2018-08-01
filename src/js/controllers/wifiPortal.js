'use strict';
/*
portalPaymentParams = {
	type 1: payment; 2: donate
	payTitle
    authServer 
    orderNumber
    toAddress
    toAmount
    payState
    timestamp
}
*/

angular.module('copayApp.controllers').value("portalPaymentParams", {});

angular.module('copayApp.controllers').controller('wifiPortalController', function($state, $log, $stateParams, $location, portalPaymentParams) {
    portalPaymentParams.payState = false;

    var requestType = $stateParams.recipientType;
    switch (requestType) {
        case "payment":
            if ($location.search().toAddress && $location.search().toAmount && $location.search().authServer && $location.search().orderNumber) {
				portalPaymentParams.type = 1;
				portalPaymentParams.payTitle = 
								$location.search().payTitle?$location.search().payTitle:'pay wfc to surf internet';
                portalPaymentParams.authServer = $location.search().authServer;
                portalPaymentParams.orderNumber = $location.search().orderNumber;
                portalPaymentParams.toAddress = $location.search().toAddress;
                portalPaymentParams.toAmount = $location.search().toAmount;
                portalPaymentParams.timestamp = new Date() / 1000;
                portalPaymentParams.payState = true;
            }
        break;
		case 'donate':
			if ($location.search().toAddress && $location.search().toAmount) {
				portalPaymentParams.type = 1;
				portalPaymentParams.payTitle = 
								$location.search().payTitle?$location.search().payTitle:'donate to support wificoin project';
				portalPaymentParams.toAddress = $location.search().toAddress;
                portalPaymentParams.toAmount = $location.search().toAmount;
                portalPaymentParams.timestamp = new Date() / 1000;
                portalPaymentParams.payState = true;
			}
		break;
    }

    $state.go('tabs.home');
});
