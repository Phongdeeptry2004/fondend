var app = angular.module("myApp", []);

app.controller('mainCtrl', function ($scope) {

    $scope.submit = function(){
        var a=parseFloat($scope.a);
        var b=parseInt($scope.b);
        $scope.s=a*b;
        $scope.c=(a+b)*2;
    }
    $scope.save = function(){
        var a = parseFloat($scope.diem);
        if(a < 5){
            $scope.HL = "Rớt";
        } else if(a >= 5 && a <= 10){
            $scope.HL = "Qua Môn";
        }
    }
    
});