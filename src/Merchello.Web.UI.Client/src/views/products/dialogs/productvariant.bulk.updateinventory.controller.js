    /**
     * @ngdoc controller
     * @name Merchello.Product.Dialogs.ProductVariantBulkChangePricesController
     * @function
     *
     * @description
     * The controller for the adding / editing Notification messages on the Notifications page
     */
    angular.module('merchello').controller('Merchello.Product.Dialogs.ProductVariantBulkUpdateInventoryController',
        ['$scope',
        function($scope) {

            function init() {
                console.info($scope.dialogData);
            }

            // Initialize the controller
            init();

        }]);
