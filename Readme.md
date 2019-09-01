# Hướng dẫn về sử dụng git
---
```javascript
// git status
```
//Them tat ca
```javascript
// git add . 
```
git commit - m 'noi dung'

quay lai
```javascript
// git reset --hard <id_commit> =>{dùng để quay lại nhưng mất các commit sau đó}
// git revert <id_commit> =>{quay lại commit đó nhưng không mất các commit sau đó}
```

Branch
1. tạo branch 
```javascript
// git checkout -b <feature_branch>
```
2. chuyển branch
```javascript
// git checkout <tên_branch>
```
3. xem branch
```javascript
// git branch
```
4. xóa branch
```javascript
// git branch -D <tên_branch>
```


kết nối với github
```javascript
// git remote add origin https://github.com/<link account>
```

Nếu chưa sync lần nào thì dùng lệnh này để push branch master và nhập mật khẩu
```javascript
// git push -u origin master 
```

Để không phải đăng nhập nhiều lần dùng cách sau
- Đăng nhập mãi mãi
```javascript
// git config --global credential.helper store 
```
- Đăng nhập lưu trong RAM có thời gian
```javascript
// git config --global credential.helper "cache --timeout=18000"
```

Tải project
```javascript
// git clone <link>
```
Lấy commit về
```javascript
// git pull
```

Pull request
1. tạo ra branch mới
```javascript
// git checkout -b <feature_brach> => {ví dụ: feature/Monkey-class}
// git add .
// git commit -m 'nội dung'
```
2. push branch lên github
```javascript
// git push origin <branch> =>{có thể bấm TAP để ra tên branch}
```
3. Tạo new pull request trên github thì sẽ có một link https://github.com/chaolegons/studygit/pull/1 
gửi link này cho bên B và bên B sẽ coi code và Approve
4. Bên B copy branch của bên A (VD: feature/Money-class) và fetch
```javascript
// git remote -v  ==> {bên B kiểm tra đang remote link nào}
// git fetch origin <tên_branch_của_bên_A> 
```
5. Bên B kiểm tra test code của bên A
```javascript
// git checkout <tên_branch_của_bên_A> 
```
6. Bên A tiến hành merger branch trên github
7. Bên B kiểm tra xong đổi branch và xóa branch bên A đi và cuối cùng sync
```javascript
// git checkout master
// git branch -D <tên_branch_của_bên_A>
// git pull
```
8. Bên A sync
```javascript
// git pull
```

Giải quyết xung đột khi 2 bên cùng sửa 1 file như:
Bên A được viết giao method run và B viết method jump
1. Bên A và B đều tạo branch và add, commit
```javascript
// git checkout -b <tên_branch>
// git add .
// git commit -m 'nội dung'
```
2. Bên A tiến hành push branch lên
```javascript
// git push origin <tên_branch>
```
Và tạo pull request trên github, sau đó bên A vào setting -> collaborators để thêm người làm việc cùng vào, sau đó đợi bên B accept
3. Bên B sau khi đã đồng ý thì tiến hành push và lên github của bên A tiến hành pull request với branch của B. Sau đó bên B (hoặc A) tiến hành merge 1 pull request thì không có gì xảy ra, tuy nhiên không thể merge pull request tiếp theo vì cùng thay đổi 1 file nên phải resolve conflict như sau:
- Bên A chuyển sang branch master và pull
```javascript
// git checkout master
// git pull
```
- Sau đó lại chuyển sang branch đã tạo và tiến hành rebase vào branch master
```javascript
// git checkout <'feature/run-method-monkey'>
// git rebase master
```
- Sau đó vào VSC bên A để sửa code, muốn giữ lại tất cả thì xóa gạch gạch và mũi tên đi và add. -> rebase:
```javascript
// git add .
// git rebase --continue
```
việc rebase này sẽ update lại commit cũ bên A
4. Bên A tiến hành push cái branch cũ đã tạo (nhớ có -f ở cuối vì lịch sử commit trên branch 'feature/run-method-monkey' đã thay đổi)
```javascript
// git push origin <'feature/run-method-monkey'> -f
```
5. Sau đó Bên A lên github và có thể merge lại pull request
6. Bên A và B đều chuyển branch về master và xóa branch đã tạo và tiến hành pull
```javascript
// git checkout master
// git branch -D <tên_branch>
// git pull
```