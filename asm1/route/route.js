angular.module("myRoute", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when(
            "/", {//Định nghĩa router
            templateUrl: "View/home.html"
        })
        $routeProvider.when(
            "/dangky", {//Định nghĩa router
            templateUrl: "View/dangky.html"
        })
        .when(
            "/dangnhap", {//Định nghĩa router
            templateUrl: "View/dangnhap.html"// đường dẫn file  html mà chúng ta muốn hiển thị khi gọi đến /home    
        })
        .when(
            "/lienhe", {//Định nghĩa router
            templateUrl: "View/lienhe.html"// đường dẫn file  html mà chúng ta muốn hiển thị khi gọi đến /home    
        })
        .when(
            "/dathang", {//Định nghĩa router
            templateUrl: "View/dathang.html"// đường dẫn file  html mà chúng ta muốn hiển thị khi gọi đến /home    
        })
    })