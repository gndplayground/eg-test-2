# Bài test ứng dụng tìm kiếm thông tin sản phẩm

[Xem online](https://eg-2-giang.netlify.app/)

## Phân tích yêu cầu

### Phần tìm kiếm

Trang tìm kiếm sản phẩm sẽ tương tự như các trang tìm kiếm của các web thương mại điện tử.
Khi vào trang tìm kiếm thì sẽ hiện một search box với empty value và chưa hiển thị bất cứ sản phẩm nào.

![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/default.jpeg)

UI có nút "Hiện tất cả" để chúng ta có thể xem tất cả sản phẩm. Chức năng này không có trong yêu cầu và trong thực tế trang tìm kiếm cũng không có. Em để vào mục đích chỉ để debug và demo cho người chấm bài dễ kiểm tra toàn bộ sản phẩm trong bộ dữ liệu mẫu.

![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/all-product.jpeg)

Dữ liệu mẫu dùng để xử lý tìm kiếm là tại local, tuy nhiên trên thực tế chúng ta sẽ thường lấy dữ liệu tại remote api nên phần tìm kiếm được add thêm wait time là 1s để giả lập độ delay của network.

Từ việc giả lập delay của network ta sẽ làm UI sát với thực tế hơn. Như hiển thị loading, debounce search box (để không request dữ liệu liên tục từ server).

Một vài trạng thái

- Loading, nếu có dữ liệu cũ sẽ được làm mờ

![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/loading.jpeg)

- Tìm thấy sản phẩm

![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/found-product.jpeg)


- Không tìm thấy sản phẩm


![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/notfound.jpeg)

### Hiển thị sản phẩm

![Login](https://raw.githubusercontent.com/gndplayground/eg-test-2/main/docs/assets/product.jpeg)

Sản phẩm được hiển thị theo danh sách. Mỗi sản phẩm sẽ gồm

- Ảnh sản phẩm
- Tiêu đề sản phẩm
- Giá sau & trước khuyến mãi (nếu có). Đang hiển thị theo vnd
- % giảm giá (nếu có)
- Trạng thái còn hàng, hết hàng.

## Công nghệ

- Reactjs
- Tailwind

## Phát triển

```
npm i
```

Chạy dev

```
npm run dev
```

Build production

```
npm run build
```

## Code quality

- Ensured the code quality with `eslint`, `style-lint`
- Formated the code with `prettier`
- Commit lint `commit-lint`
- All the process automatically when commit the code by `husky`, `lint-staged`

Although some developers might trick the process by bypass the commit hook. In the real project, we should protect the important branches (prevent merge directly) and setup CI to check the code quality before merge request.
