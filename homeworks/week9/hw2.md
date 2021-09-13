## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

- VARCHAR：
  - 可以設定最大長度，適合用在文字量少的欄位，可以有預設值。
  - 可變長度的字串，最多到 65,535 個字元。
  - 查詢速度較快。

- TEXT：
  - 不可設置長度，適用於文字量較多的欄位，或是無法預期文字量時可以使用。
  - 不可限制最大長度。
  - 查詢速度較慢。

- 大結論：
  - VARCHAR 的搜尋速度比 TEXT 快。


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

Cookie 是一個儲存在瀏覽器上的一個資訊檔案，它在發 request 給 server 時會被帶上，讓 server 知道這個 request 是有狀態的，也說是做 session 的其中一種方式，其它像是利用網址也能達到有狀態的效果。

Server 可以利用 Set-Cookie 這個 response header 來設定瀏覽器要存什麼樣的資訊，當發 request 給 server 時會在 Header 帶上 cookie 給 server。

[參考資料](https://blog.miniasp.com/post/2008/02/22/Explain-HTTP-Cookie-in-Detail)


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1.註冊可以多元化，例如可以新增大頭貼功能以及特殊個性的emoji等等...。
2.可以製作修改密碼的功能
3.添加忘記帳號或密碼的功能
