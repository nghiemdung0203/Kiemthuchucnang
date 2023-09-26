import { danhGiaDanhHieu } from "./main.js";
const expect = chai.expect;


describe("Kiem thu theo phan hoach tuong duong: function danhGiaDanhHieu()", () => {
  // Lớp tương đương cho diemTongKet: diemTongKet < 0
  it("Test case: diemTongKet < 0", () => {
    const result = danhGiaDanhHieu(-1, "Tốt");
    expect(result).to.equal("saiDuLieu");
  });

  // Lớp tương đương cho diemTongKet: 0 <= diemTongKet < 4.0
  it("Test case: 0 <= diemTongKet < 4.0, hanhKiem = 'Tốt'", () => {
    const result = danhGiaDanhHieu(3, "Tốt");
    expect(result).to.equal("khongCoDanhHieu");
  });

  // Lớp tương đương cho diemTongKet: 4.0 <= diemTongKet < 6.5
  it("Test case: 4.0 <= diemTongKet < 6.5, hanhKiem = 'Khá'", () => {
    const result = danhGiaDanhHieu(5, "Khá");
    expect(result).to.equal("hocSinhTrungBinh");
  });

  // Lớp tương đương cho diemTongKet: 6.5 <= diemTongKet < 8.0
  it("Test case: 6.5 <= diemTongKet < 8.0, hanhKiem = 'Trung bình'", () => {
    const result = danhGiaDanhHieu(7, "Trung bình");
    expect(result).to.equal("hocSinhTienTien");
  });

  // Lớp tương đương cho diemTongKet: diemTongKet >= 8.0
  it("Test case: diemTongKet >= 8.0, hanhKiem = 'Yếu'", () => {
    const result = danhGiaDanhHieu(8.5, "Yếu");
    expect(result).to.equal("hocSinhTienTien");
  });

  // Lớp tương đương cho hanhKiem: hanhKiem = "Yếu"
  it("Test case: diemTongKet = 5, hanhKiem = 'Yếu'", () => {
    const result = danhGiaDanhHieu(5, "Yếu");
    expect(result).to.equal("hocSinhTrungBinh");
  });

  // Lớp tương đương cho hanhKiem: hanhKiem = "Trung bình"
  it("Test case: diemTongKet = 8, hanhKiem = 'Trung bình'", () => {
    const result = danhGiaDanhHieu(8, "Trung bình");
    expect(result).to.equal("hocSinhTienTien");
  });

  // Lớp tương đương cho hanhKiem: hanhKiem = "Khá"
  it("Test case: diemTongKet = 5, hanhKiem = 'Khá'", () => {
    const result = danhGiaDanhHieu(5, "Khá");
    expect(result).to.equal("hocSinhTrungBinh");
  });

  // Lớp tương đương cho hanhKiem: hanhKiem = "Tốt"
  it("Test case: diemTongKet = 7, hanhKiem = 'Tốt'", () => {
    const result = danhGiaDanhHieu(7, "Tốt");
    expect(result).to.equal("hocSinhTienTien");
  });
});


