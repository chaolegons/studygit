git status

//Them tat ca
git add . 

git commit - m 'noi dung'

quay lai
// git reset --hard <id_commit> =>{dùng để quay lại nhưng mất các commit sau đó}
// git revert <id_commit> =>{quay lại commit đó nhưng không mất các commit sau đó}

Branch
1. tạo branch 
// git checkout -b <feature_branch>
2. chuyển branch
// git checkout <tên_branch>
3. xem branch
// git branch
4. xóa branch
// git branch -D <tên_branch>


kết nối với github
// git remote add origin https://github.com/<link account>

Nếu chưa sync lần nào thì dùng lệnh này để push branch master và nhập mật khẩu
// git push -u origin master 

Để không phải đăng nhập nhiều lần dùng cách sau
- Đăng nhập mãi mãi
// git config --global credential.helper store 
- Đăng nhập lưu trong RAM có thời gian
// git config --global credential.helper "cache --timeout=18000"

Tải project
// git clone <link>
Lấy commit về
// git pull

Pull request
1. tạo ra branch mới
// git checkout -b <feature_brach> => {ví dụ: feature/Monkey-class}
// git add .
// git commit -m 'nội dung'
2. push branch lên github
// git push origin <branch> =>{có thể bấm TAP để ra tên branch}
3. Tạo new pull request trên github thì sẽ có một link https://github.com/chaolegons/studygit/pull/1 
gửi link này cho bên B và bên B sẽ coi code và Approve
4. Bên B copy branch của bên A (VD: feature/Money-class) và fetch
// git remote -v  ==> {bên B kiểm tra đang remote link nào}
// git fetch origin <tên_branch_của_bên_A> 
5. Bên B kiểm tra test code của bên A
// git checkout <tên_branch_của_bên_A> 
6. Bên A tiến hành merger branch trên github
7. Bên B kiểm tra xong đổi branch và xóa branch bên A đi và cuối cùng sync
// git checkout master
// git branch -D <tên_branch_của_bên_A>
// git pull
8. Bên A sync
// git pull

Giải quyết xung đột khi 2 bên cùng sửa 1 file
