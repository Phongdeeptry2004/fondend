angular.module("myRouter", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when(
            "/home", {//Định nghĩa router
            templateUrl: "View/home.html"
        }
        )
        .when(
            "/home", {//Định nghĩa router
            templateUrl: "View/home.html"// đường dẫn file  html mà chúng ta muốn hiển thị khi gọi đến /home    
        }
        )
        
        ;
        
    })
