var app = angular.module('myApp', []);

app.controller('myController', function ($scope) {
    //để dữ liệu mặc định của check box là false
    $scope.input = {
        danhsach: {
            All: false,
            A: false,
            B: false,
            C: false
        }
    }
    $scope.danhmuc = [
        {
            id: "1",
            name: "Tất cả"
        },
        {
            id: "2",
            name: "Danh Mục A"
        },
        {
            id: "3",
            name: "Danh Mục B"
        },
        {
            id: "4",
            name: "Danh Mục C"
        }];
        
    $scope.submit = function () {
        //     $scope.tong=parseInt($scope.input.a)+parseInt($scope.input.b);
        //     $scope.hieu=parseInt($scope.input.a)-parseInt($scope.input.b);
        //     $scope.tich=parseInt($scope.input.a)*parseInt($scope.input.b);
        //     if($scope.input.b==0){
        //         alert("không thể chia cho 0 vui lòng nhập lại");
        //         $scope.thuong=false;
        //     }else{
        //     $scope.thuong=parseInt($scope.input.a)/parseInt($scope.input.b);
        // }
        //    if(isNaN($scope.tong)||isNaN($scope.hieu)){
        //     alert("không thể chia cho 0 vui lòng nhập lại")
        //     }

        //mảng đối tượng danh mục

            console.log($scope.danhmucid)
    }
});
//Nhập a và b hiển ra tổng hiệu tích thương