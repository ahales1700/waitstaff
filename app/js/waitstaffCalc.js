angular.module('waitstaffCalculator', [])
    .controller('indexControl', function ($scope) {
        $scope.resetMeal = {
            meal_price: 0,
            tax_rate: 0,
            tip_percentage: 0
        };
        
        $scope.reset = function () {
            $scope.subtotal = 0;
            $scope.tip = 0;
            $scope.charges_total = 0;
            $scope.total = 0;
            $scope.meal_count = 0;
            $scope.average_tip = 0;
            $scope.meal = angular.copy($scope.resetMeal);
        };

        $scope.submit = function () {
            $scope.subtotal = $scope.meal.meal_price * (1 + $scope.meal.tax_rate / 100);
            $scope.tip = $scope.subtotal * $scope.meal.tip_percentage / 100;
            $scope.charges_total = $scope.subtotal + $scope.tip;
            $scope.total += $scope.tip;
            $scope.meal_count++;
            $scope.average_tip = $scope.total / $scope.meal_count;
            $scope.meal = angular.copy($scope.resetMeal);
        };

        $scope.cancel = function () {
            $scope.meal = angular.copy($scope.resetMeal);
        };

        $scope.reset();
    });