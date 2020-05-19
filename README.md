# INT3310_2-Seminar
Ứng dụng demo cho bài Seminar môn học "Quản trị mạng"
> Sử dụng Docker để tạo ra một hệ thống mạng
### Yêu cầu hệ thống
- Hệ điều hành Ubuntu
- Docker Community Edition
- Nodejs
### Cài đặt
Clone cấu hình về máy tính cá nhân:
```sh
$ git clone https://github.com/vuchuc781999/INT3310_2-Seminar.git
```
Chạy file cấu hình:
```sh
$ cd INT3310_2-Seminar
$ npm start
```
### Mô tả
Hệ thống được tạo ra sẽ bao gồm:
- 3 app servers chạy nodejs dùng để xử lí dữ liệu và thao tác với database
- 1 database server sử dụng mongo database
- 1 load balancer (cân bằng tải) dùng để phân chia, định tuyến các requests từ người dùng đến các servers

Khi người dùng gửi request đến hệ thống LB sẽ tiếp nhận và chuyển tiếp request đến các app servers. App server sẽ xử lý request, thao tác với database server nếu cần thiết và trả request về cho người dùng thông qua LB.
### Thành viên nhóm bài tập
- Vũ Văn Chức
- Trịnh Văn Đức
- Lê Hải Đăng
- Lê Ngọc Hiệp
