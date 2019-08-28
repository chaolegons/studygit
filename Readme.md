git status

//Them tat ca
git add . 

git commit - m 'noi dung'

//quay lai
git reset --hard <id_commit> =>{dùng để quay lại nhưng mất các commit sau đó}
git revert <id_commit> =>{quay lại commit đó nhưng không mất các commit sau đó}

//kết nối với github
git remote add origin https://github.com/<link account>
//Nếu chưa sync lần nào thì dùng lệnh này để push branch master
git push -u origin master 