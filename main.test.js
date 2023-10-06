import { XepLoaiSanPham } from "./main.js";
const expect = chai.expect;

describe("Kiem thu theo bang quyet dinh: function XepLoaiSanPham()", () => {
  it("1. Test case: 700000, Rất Tốt", () => {
    const result = XepLoaiSanPham(700000, "Rất Tốt");
    expect(result).to.equal("sanPhamCaoCap");
  });

  it("2. Test case: 500000, Tốt", () => {
    const result = XepLoaiSanPham(500000, "Tốt");
    expect(result).to.equal("sanPhamCaoCap");
  });

  it("3. Test case: 600000, Trung bình", () => {
    const result = XepLoaiSanPham(600000, "Trung bình");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("4. Test case: 500000, Không tốt", () => {
    const result = XepLoaiSanPham(500000, "Không tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("5. Test case: 200000, Rất Tốt", () => {
    const result = XepLoaiSanPham(200000, "Rất Tốt");
    expect(result).to.equal("sanPhamTrungBinh");
  });

  it("6. Test case: 300000, Tốt", () => {
    const result = XepLoaiSanPham(300000, "Tốt");
    expect(result).to.equal("sanPhamTrungBinh");
  });

  it("7. Test case: 250000, Trung bình", () => {
    const result = XepLoaiSanPham(250000, "Trung bình");
    expect(result).to.equal("sanPhamGiaRe");
  });

  it("8. Test case: 400000, Không Tốt", () => {
    const result = XepLoaiSanPham(400000, "Không Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("9. Test case: 100000, Rất Tốt", () => {
    const result = XepLoaiSanPham(100000, "Rất Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("10. Test case: 150000, Tốt", () => {
    const result = XepLoaiSanPham(150000, "Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("11. Test case: 50000, Trung bình", () => {
    const result = XepLoaiSanPham(50000, "Trung bình");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("12. Test case: 20000, Không Tốt", () => {
    const result = XepLoaiSanPham(20000, "Không Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });
});



describe("Kiem thu theo phân hoạch tương đương: function XepLoaiSanPham()", () => {
  it("1. Test case: 100000, Rất Tốt", () => {
    const result = XepLoaiSanPham(100000, "Rất Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("2. Test case: 350000, Trung bình", () => {
    const result = XepLoaiSanPham(350000, "Trung bình");
    expect(result).to.equal("sanPhamGiaRe");
  });

  it("3. Test case: 600000, Không tốt", () => {
    const result = XepLoaiSanPham(600000, "Không Tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("4. Test case: 500000, Không tốt", () => {
    const result = XepLoaiSanPham(500000, "Không tốt");
    expect(result).to.equal("sanPhamKhongDuocDanhGiaCao");
  });

  it("5. Test case: 200000, Trung bình", () => {
    const result = XepLoaiSanPham(200000, "Trung bình");
    expect(result).to.equal("sanPhamGiaRe");
  });

  it("6. Test case: 400000, Rất Tốt", () => {
    const result = XepLoaiSanPham(400000, "Rất Tốt");
    expect(result).to.equal("sanPhamTrungBinh");
  });
});







