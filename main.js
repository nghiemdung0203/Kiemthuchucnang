export function XepLoaiSanPham(gia_ban, danh_gia_nguoi_dung) {
  let result                    
      if (gia_ban >= 500000 && danh_gia_nguoi_dung == 'Rất Tốt' || gia_ban >= 500000 && danh_gia_nguoi_dung == 'Tốt' )       
          result = 'sanPhamCaoCap'                     
      else if (gia_ban >= 200000 && gia_ban < 500000 && danh_gia_nguoi_dung == 'Rất Tốt' || gia_ban >= 200000 && gia_ban < 500000 && danh_gia_nguoi_dung == 'Tốt') 
          result = 'sanPhamTrungBinh'                  
      else if (gia_ban >= 200000 && gia_ban < 500000 && danh_gia_nguoi_dung == 'Trung bình')   
          result = 'sanPhamGiaRe'                  
      else result =  'sanPhamKhongDuocDanhGiaCao'               
  return result                                      
}
