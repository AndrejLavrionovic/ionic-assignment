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

/*
.factory('Products', function() {
    return{
        
        save: function(products) {
            window.localStorage['products'] = angular.toJson(products);
        },
        getLastActiveIndex: function(){
            return parseInt(window.localStorage['lastActiveProduct']) || 0;
        },
        
        setLastActiveIndex: function(index) {
            window.localStorage['lastActiveProduct'] = index;
        }
        
    }
});
*/


.controller('CalorificCtrl', function($scope) {
    var calories, protein, carb, fat, fibre, alc;
    calories=protein=carb=fat=fibre=alc = 0;
    
    $scope.elIndex = function(index){

        if(index == 0){
            calories = 214;
            protein = 18;
            carb = 0;
            fat = 145;
            fibre = 0;
            alc = 0;
        }

        else if(index == 1){
            calories = 42;
            protein = 6;
            carb = 0;
            fat = 2;
            fibre = 0;
            alc = 0;
        }
        else if(index == 2){
            calories = 252;
            protein = 4;
            carb = 37;
            fat = 11;
            fibre = 0;
            alc = 0;
        }
        else if(index == 3){
            calories = 219;
            protein = 7;
            carb = 0;
            fat = 10;
            fibre = 0;
            alc = 0;
        }
        else if(i == 4){
            calories = 326;
            protein = 14;
            carb = 62;
            fat = 7;
            fibre = 8;
            alc = 0;
        }
        else if(index == 5){
            calories = 265;
            protein = 8;
            carb = 54;
            fat = 2;
            fibre = 2;
            alc = 0;
        }
        else if(index == 6){
            calories = 182;
            protein = 4;
            carb = 38;
            fat = 1;
            fibre = 1;
            alc = 0;
        }
        else if(index == 7){
            calories = 151;
            protein = 7;
            carb = 27;
            fat = 3;
            fibre = 1;
            alc = 0;
        }
        else if(index == 8){
            calories = 3;
            protein = 0;
            carb = 1;
            fat = 0;
            fibre = 0;
            alc = 0;
        }
        else if(index == 9){
            calories = 92;
            protein = 2;
            carb = 17;
            fat = 2;
            fibre = 1;
            alc = 0;
        }
        else if(index == 10){
            calories = 9;
            protein = 1;
            carb = 1;
            fat = 0;
            fibre = 1;
            alc = 0;
        }
    }
    
    $scope.elements = [
        { title: 'Calories: '+calories},
        { title: 'Protein: '+protein},
        { title: 'Carbohidrat: '+carb},
        { title: 'Fat: '+fat},
        { title: 'Fibre: '+fibre},
        {title: 'Alcohol: '+alc}
    ];
    
    
    $scope.products = [
        {title: 'Cooked Minsed Beef', ind: 0},
        {title: 'Beef Steak', ind: 1},
        {title: 'Jam Donut', ind: 2},
        {title: 'Cheese', ind: 3},
        {title: 'Spaghetti', ind: 4},
        {title: 'Pasta', ind: 5},
        {title: 'Rice', ind: 6},
        {title: 'Rolls', ind: 7},
        {title: 'Radish Salad', ind: 8},
        {title: 'Choclate Bars', ind: 9},
        {title: 'Veg', ind: 10}
    ];
    
    // Select product
    $scope.selectProduct = function(product, index){
        $scope.activeProduct = product;
        $ionicSideMenuDelegate.toggleLeft(false);
    }
    
});