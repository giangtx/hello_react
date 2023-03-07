// luồng xử lý đăng nhập
```
tóm tắt: người dùng nhập thông tin -> check thông tin nhập -> gọi api -> xử kết quả api trả về (token) -> lỗi thì báo, không lỗi thì sẽ lưu token vào cookike -> chuyển hướng đến trang chủ để cho người dùng biết là đăng nhập thành công

chi tiết: 
-người dùng nhập thông tin: tạo giao diện...
-check thông tin nhập: tạo biến lưu thông tin người dùng nhập, check thông tin đúng k
-goi api: xem có api chưa nếu chưa tạo service để gọi api
-xử kết quả api trả về: login thường sẽ trả về token (cái mà để lưu lại trên trình duyệt), từ cái này thì server mới biết được là ai đang gọi đến
-lưu token (thường lưu vào localStore hoặc cookie), check xem có hàm để lưu chưa, chưa có thì tạo
-chuyển hướng trang
```
