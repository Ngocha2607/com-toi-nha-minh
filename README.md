# Cơm Tối Nhà Mình

Ứng dụng web trả lời câu hỏi "Tối nay ăn gì?": bấm một nút là có thực đơn bữa tối 4 món (món chính, món rau, canh, tráng miệng) cho 3 người lớn, chọn từ 100 thực đơn ghép sẵn. Mỗi món có ảnh, nguyên liệu và cách nấu.

Có thể thêm vào màn hình chính điện thoại như một app (PWA) và dùng được khi không có mạng.

## Tính năng

- **Hôm nay**: thực đơn của ngày, chạm vào món để xem nguyên liệu và cách nấu. Nút "Chọn món khác" bỏ qua 30 thực đơn gần nhất để tránh lặp.
- **Đi chợ**: danh sách nguyên liệu có ô tích đã mua, chép được để gửi Zalo.
- **Thực đơn**: xem và tìm trong cả 100 thực đơn (gõ không dấu cũng được).

## Cấu trúc

| Đường dẫn | Nội dung |
| --- | --- |
| `index.html`, `css/style.css` | Giao diện |
| `js/data.js` | 82 món ăn: nguyên liệu cho 3 người, cách nấu. Thêm/sửa món ở đây |
| `js/app.js` | Ghép 100 thực đơn và xử lý giao diện |
| `js/photos.js`, `images/` | Ảnh món ăn từ Pexels và tên tác giả |
| `manifest.webmanifest`, `sw.js`, `icons/` | Cài lên màn hình chính, chạy offline |
| `tools/` | Script tìm và tải ảnh từ Pexels |

Khi sửa bất kỳ file nào, tăng `VERSION` trong `sw.js` để điện thoại đã cài nhận bản mới.

## Chạy thử trên máy

Mở `index.html` bằng trình duyệt là dùng được. Muốn thử chế độ offline thì chạy qua một web server, ví dụ `npx serve .`.

## Đổi ảnh một món

Script đọc API key từ biến môi trường, không lưu key trong mã nguồn:

```sh
# Xem các ảnh gợi ý
PEXELS_API_KEY=... node tools/list.js "m1=braised pork belly"
# Tải ảnh đã chọn theo mã ảnh Pexels
PEXELS_API_KEY=... node tools/pick.js . m1=34474143
```

## Ghi nguồn

Ảnh món ăn từ [Pexels](https://www.pexels.com), tên tác giả hiện trên từng ảnh trong app.
