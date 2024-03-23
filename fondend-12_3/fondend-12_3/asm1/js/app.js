var app = angular.module('myApp', []);
app.controller('TitleController', function ($scope, $location) {
  var urlSttring = $location.absUrl();
  var url = new URL(urlSttring);
  var path1 = url.pathname;
  var path = path1.replace(/\.[^/.]+$/, "");
  console.log("Path: " + path);
  switch (path) {
    case '/test/contact':
      $scope.pageTitle = 'Liên Hệ';
      break;
    case '/test/booking':
      $scope.pageTitle = 'Đặt Phòng';
      break; case '/test/contact':
      $scope.pageTitle = 'Liên Hệ';
      break;
    case '/test/booking':
      $scope.pageTitle = 'Đặt Phòng';
      break;
    default:
      $scope.pageTitle = 'Không tồn tại';
      break;
  }
});
