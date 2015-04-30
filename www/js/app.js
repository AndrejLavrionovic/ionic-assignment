angular.module('calorific', ['ionic'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('CalorificCtrl', function($scope, $ionicModal){
            $scope.tasks = [];
    
    // create and load the modal
    $ionicModal.fromTemplateUrl('new-product.html', function(modal) {
        $scope.productModal = modal;
    },{
        scope: $scope,
        animation: 'slide-in-up'
    });
    
    // called when the form is submited
    $scope.createTask = function(product) {
        $scope.products.push({
            title: product.title
        });
        $scope.productModal.hide();
        product.title = "";
    };
    
    // Open our new product modal
    $scope.newProduct = function() {
        $scope.productModal.show();
    };
    
    // Close the new product modal
    $scope.closeNewProduct = function() {
        $scope.productModal.hide();
    };
});
