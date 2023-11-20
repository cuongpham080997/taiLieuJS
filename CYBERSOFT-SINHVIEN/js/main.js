var listSinhVien = []

function SinhVien(img,name,scoreTB){
    this.hinhAnh = img;
    this.ten = name;
    this.diemTrungBinh = scoreTB;
}

// ----------
// 1. Lấy tất cả thẻ tr chứa thông tin của sinh viên
var listTr = document.querySelectorAll('table#tableSinhVien tbody tr')
// 2. Duyệt qua từng thẻ tr để lấy thông tin của sinh viên:
var length = listTr.length;
for( var i = 0; i <length; i++){
    var ele = listTr[i]
    var img = ele.querySelector('td:nth-child(2) img').src;
    var ten = ele.querySelector('td:nth-child(3)').innerHTML;
    var dtb = ele.querySelector('td:nth-child(4)').innerHTML;
    var sinhVien = new SinhVien(img,ten,dtb);
    listSinhVien.push(sinhVien)
}


var soSVGioi = 0;
var soSvCoDtbHon5 = 0;
listSinhVien.forEach(function(sv){
    if(sv.diemTrungBinh >=8){
        soSVGioi++;
    }
    if(sv.diemTrungBinh>=5){
        soSvCoDtbHon5++;
    }
})
console.log(soSvCoDtbHon5,soSVGioi)
