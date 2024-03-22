var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/asm1/index.html",
            controller: "HomeController"
        })
        .when("/contact", {
            templateUrl: "lienhe.html",
            controller: "ContactController"
        })
        .when("/booking", {
            templateUrl: "dathang.html",
            controller: "BookingController"
        })
        .otherwise({ redirectTo: "/" });
});

app.controller("HomeController", function ($scope) {
    $scope.pageTitle = "Home";
});

app.controller("ContactController", function ($scope) {
    $scope.pageTitle = "Contact";
});

app.controller("BookingController", function ($scope) {
    $scope.pageTitle = "Booking";
});