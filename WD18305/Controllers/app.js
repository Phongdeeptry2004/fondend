function myFunc($scope) { //$scope: giúp truy xuất biến từ controller vào view
    //$scope sẽ luôn được xuât hiện
    $scope.name = "Nguyễn Văn A";
    // sau $scope thì sẽ khởi tạo một biến để render ra dữ liệu

}
//khai báo angular js cùng với vùng mà mình sử dụng
var app = angular.module("myApp", []);
//khi khai báo module thì ta phải chỉ định tên cho nó đồng thời có thêm một hành động
//map function myFunc với vùng demoController
// app.controller('demoController', myFunc);

//viết tắt
app.controller("demoController",function($scope){
    //hiển thị thông tin sinh viên bao gồm msv, name, year.
    $scope.student=
    [
    {
        msv:"PH40284",
        name :"Nguyễn Văn B",
        year :'2002',
        sex: "1",
        tinhtrang: true
    }
];
    $scope.pets=[
        {
            name :"Con Chó",
            tiengkeu :'gâu gâu',
            tuoi : '15 tháng'
        },
        {
            name :"Con Mèo",
            tiengkeu :'Meo Meo',
            tuoi : '3 tháng'
        }
    ]
    $scope.sanpham={
        msp: "SP17365",
        tensp:'Laptop Dell',
        price:9999
    }
    //khai báo mộit đối tượng công đân
    //tên, sdt. cmt. năm sinh ,giới tính(1:nam, 0:nữ)
    //hiển thị thông tin sau : tên , sdt, cmt. tuổi 
    //điều kiện nghĩa vụ nam , tuổi =>18 thì đi nghĩa vukj
    $scope.TTND = [
        {
            ten: "Đào Phong",
            cmt: "001204041987",
            year: 2004,
            sex: "1"
        },
        {
            ten: "Nguyễn Hiển",
            cmt: "001204041987",
            year: 2007,
            sex: "1"
        },
        {
            ten: "Đinh Thuý",
            cmt: "001204041987",
            year: 2002,
            sex: "0"
        }
    ];

    // Lấy năm hiện tại
    var currentDate = new Date();
    $scope.currentYear = currentDate.getFullYear();
});

