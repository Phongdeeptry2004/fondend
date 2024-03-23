angular.module("myRoute", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when(
            "/dangky", {//Định nghĩa router
            templateUrl: "View/dangky.html"
        }
        )
        .when(
            "/dangnhap", {//Định nghĩa router
            templateUrl: "View/dangnhap.html"// đường dẫn file  html mà chúng ta muốn hiển thị khi gọi đến /home    
        }
        )
        
        ;
        
    })
