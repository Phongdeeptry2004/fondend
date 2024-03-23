app.controller('TitleController', function ($scope, $location) {
    var urlSttring = $location.absUrl();
    var url = new URL(urlSttring);
    var test= $location.path();
    console.log("URL: " + test);
    var path1 = url.pathname;
    var path = path1.replace(/\.[^/.]+$/, "");
    console.log("Path: " + path);
    switch (path) {
        case '/test/index':
            $scope.pageTitle = 'Trang Chủ';
            break;
        case '/test/dangnhap':
            $scope.pageTitle = 'Đăng Nhập';
            break;
        case '/test/dangky':
            $scope.pageTitle = 'Đăng Ký';
            break;
        case '/test/contact':
            $scope.pageTitle = 'Liên Hệ';
            break;
        case '/test/booking':
            $scope.pageTitle = 'Đặt Khoá Học';
            break;
        default:
            $scope.pageTitle = 'Không tồn tại';
            break;
    }
});
