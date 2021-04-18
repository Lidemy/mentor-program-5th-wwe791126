## 交作業流程


1.首先，先開啟 Github classroom，從 Github 的(repositories) 到 git clone https://github.com/Lidemy/mentor-program-5th-wwe791126.git
2.然後打開 Git bash，把剛剛clone起來的網址貼到Git Bash上
3.指令為 git clone https://github.com/Lidemy/mentor-program-5th-wwe791126
4.輸入 ls 查看現在的位置
5.輸入 cd mentor-program-5th-wwe791126，到達資料夾

然後，到達資料夾後會顯示　/desktop/Lidemy/mentor-program-5th-wwe791126 (Master)

6.建立一個新 branch : git branch week1-hw1
7.切換到新   branch : git checkout week1-hw1 (又或者可以6.7步驟可用 git checkout -b week1-hw1)
8.到達/desktop/Lidemy/mentor-program-5th-wwe791126 (week1)
8.增加新檔案進去    : git commit -am "week1-hw1 ok"
9.把檔案送到遠端的github ： git origin push week1-hw1
10.前往 Github 點選 pull request
11.點選 Compare & pull request 讓 branch 與 Master 合併
12.然後繳交作業至Lidemy
13.最後等作業批改完成後： git checkout master
14.拉回原本的Master與本地一起同步： git pull origin master 
15.刪除本地的branch： git branch -d week1