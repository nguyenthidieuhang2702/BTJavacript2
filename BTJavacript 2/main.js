/* Bài 1:
Đầu vào:
        + Lương 1 ngày: 100.000
        + Số ngày làm: 30
Xử lý:
        + Tính số tiền lương: Số ngày làm * Lương 1 ngày
Đầu ra:
        + Tính tiền lương
*/

document.getElementById("btnTinhLuong").onclick = function() {
    var luongNgay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value;

    var tienLuong = soNgayLam * luongNgay;
    var ketQua = "Tong la: " + tienLuong;
    document.getElementById("footerLogin").innerHTML = ketQua;
};


/* Bài 2:
Đầu vào:
        + 5 số thực :
        a = 1
        b= 2
        c= 3
        d= 4
        e= 5
Xử lý:
        + Tính số trung bình: (a + b + c + d + e)/5
Đầu ra:
        + Trung bình
*/
document.getElementById("btnTrungBinh").onclick = function() {
    var soA = document.getElementById("soA").value;
    var soB = document.getElementById("soB").value;
    var soC = document.getElementById("soC").value;
    var soD = document.getElementById("soD").value;
    var soE = document.getElementById("soE").value;

    var tinhTrungBinh = (soA + soB + soC + soD + soE) / 5;
    var trungBinh = "Trung binh la: " + tinhTrungBinh;
    document.getElementById("footerTrungBinh").innerHTML = trungBinh;
};


/* Bài 3:
Đầu vào:
        + Giá USD:23.500VDN
        + Số USD: 2
Xử lý:
        + Số tiền quy đổi: Số USD * 23.500 VND
Đầu ra:
        + Số tiền quy đổi
*/

document.getElementById("btnDoiTien").onclick = function() {
    var giaUSD = 23000;
    var soUSD = document.getElementById("soUSD").value;

    var tienDoi = giaUSD * soUSD;
    var doiTien = "Tong la: " + tienDoi;
    document.getElementById("footerDoiTien").innerHTML = doiTien;
};


/*Bài 4:
Đầu vào:
        + Chiều dài : 40
        + Chiều rộng: 60
Xử lý: 
        + Diện tích = Dài * Rộng
        + Chu vi = (Dài + Rộng )*2
Đầu ra:
        + Diện tích
        + Chu vi
*/
document.getElementById("btnDienTich").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var tinhDienTich = chieuDai * chieuRong;
    var dienTich = "Dien tich la: " + tinhDienTich;

    document.getElementById("footerDienTich").innerHTML = dienTich;
};

document.getElementById("btnChuVi").onclick = function() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var tinhChuVi = chieuDai * 2 + chieuRong * 2;
    var chuVi = "Chu vi la: " + tinhChuVi;

    document.getElementById("footerchuVi").innerHTML = chuVi;
};


/*Bài 5:
Đầu vào:
        + Số
Xử lý
        + Số hàng đơn vị = số % 10
        + Số hàng chục = số /10
        + Tong = Số hàng chục + Hàng đơn vị
Đầu ra:
        +Tổng?
*/

document.getElementById("btnTong").onclick = function() {
    var so = document.getElementById("so").value;
    var soHangDonVi = so % 10;
    var soHangChuc = so / 10;

    var tong = soHangDonVi * soHangChuc;
    var tongKySo = "Tong la: " + tong;
    document.getElementById("footerTong").innerHTML = tongKySo;
};