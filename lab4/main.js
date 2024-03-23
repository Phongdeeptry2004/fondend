var app = angular.module("myApp", []);

app.controller('mainCtrl', function ($scope) {
    $scope.fullname = "Tèo Nguyễn";
    $scope.birthday = "20-11-2000";
    $scope.gender = "Nam";
    $scope.photo = "OIP.jfif";
    $scope.mark = 8.5;
    // $scope.sinhvien = {
    //     fullname: "Hà Phúc",
    //     birthday: "30-09-2004",
    //     gender: "Nữ",
    //     photo: "OIP.jfif",
    //     mark: 7
    // }
    $scope.svs = [
        {
            fullname: "Hà Phúc",
            birthday: "30-09-2004",
            gender: "Nữ",
            photo: "OIP.jfif",
            mark: 7
        },
        {
            fullname: "Phúc Đức",
            birthday: "30-09-2004",
            gender: "Nam",
            photo: "OIP.jfif",
            mark: 7
        },
        {
            fullname: "Đức Dũng",
            birthday: "30-09-2004",
            gender: "Nam",
            photo: "OIP.jfif",
            mark: 7
        }
    ]

});