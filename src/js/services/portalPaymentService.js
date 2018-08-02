'use strict';

angular.module('copayApp.services').factory('portalPaymentService', function($log, $state, $timeout, portalPaymentParams, incomingData, externalLinkService, ongoingProcess) {
    var root = {};

    root.getPayParams = function() {
        return portalPaymentParams;
    };

    root.goSend = function() {
        if (portalPaymentParams.payState)
            incomingData.redir("bitcoin:" + portalPaymentParams.toAddress + "?amount=" + portalPaymentParams.toAmount);
    }

    root.goAuth = function(txid, address, amount) {
        if (portalPaymentParams.payState) {
            if (portalPaymentParams.toAddress == address && (portalPaymentParams.toAmount * 1000000000 == amount * 1000000000)) {
                portalPaymentParams.payState = false;
                $timeout(function() {
					if (portalPaymentParams.type == 1) {
                    	ongoingProcess.set('redirectAuthServerCallback', true);
                    	var callBackURI = portalPaymentParams.authServer + "?orderNumber=" + portalPaymentParams.orderNumber + "&txid=" + txid;
                    	window.location.href = callBackURI;
					}
                }, 100);
            }
        }

        return;
    }

    return root;
});
