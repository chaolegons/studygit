git status

//Them tat ca
git add . 

git commit - m 'noi dung'

quay lai
// git reset --hard <id_commit> =>{dùng để quay lại nhưng mất các commit sau đó}
// git revert <id_commit> =>{quay lại commit đó nhưng không mất các commit sau đó}

kết nối với github
// git remote add origin https://github.com/<link account>

Nếu chưa sync lần nào thì dùng lệnh này để push branch master
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
3. Tạo new pull request trên github thì sẽ có một link 
https://github.com/chaolegons/studygit/pull/1 
gửi link này cho bên B và bên B sẽ coi code và Approve