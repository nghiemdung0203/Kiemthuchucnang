export function danhGiaDanhHieu(diemTongKet, hanhKiem) {
  if (diemTongKet < 0 || diemTongKet > 10) {
    return "saiDuLieu";
  } else if (
    hanhKiem != "Tốt" &&
    hanhKiem != "Khá" &&
    hanhKiem != "Trung bình" &&
    hanhKiem != "Yếu"
  ) {
    return "SaiDuLieu";
  } else {
    if (diemTongKet >= 8.0 && hanhKiem == 'Tốt') return 'hocSinhGioi'
        else if (diemTongKet >= 8.0 && hanhKiem != 'Tốt') return 'hocSinhTienTien'
        else if (diemTongKet >= 6.5 && diemTongKet < 8.0 && hanhKiem == 'Tốt') return 'hocSinhTienTien'
        else if (diemTongKet >= 6.5 && diemTongKet < 8.0 && hanhKiem == 'Khá' || hanhKiem == 'Trung bình') return 'hocSinhTienTien'
        else if (diemTongKet >= 6.5 && diemTongKet < 8.0 && hanhKiem == 'Yếu') return 'hocSinhTrungBinh'
        else if (diemTongKet >= 4.0 && diemTongKet < 6.5 && hanhKiem == 'Tốt' || hanhKiem == 'Khá') return 'hocSinhTrungBinh'
        else if (diemTongKet >= 4.0 && diemTongKet < 6.5 && hanhKiem == 'Trung bình') return 'hocSinhTrungBinh'
        else if (diemTongKet >= 4.0 && diemTongKet < 6.5 && hanhKiem == 'Yếu') return 'hocSinhYeu'
        else return 'khongCoDanhHieu';
  }
}
