## 什麼是 Ajax？

Ajax，全名是「Asynchronous JavaScript and XML」，重點是 Asynchronous（非同步）。

是 JavaScript 以「非同步」方式與伺服器交換資料的統稱。
當你發送了一個 request 出去，並不會等到 response 回來才繼續往下執行，會邊等 response 回來邊執行以下的程序。

使網頁無需換頁，就能即時更新渲染畫面。



## 用 Ajax 與我們用表單送出資料的差別在哪？

- 使用 Ajax 可以在不刷新整個網頁的情況下取得 Response, 表單需要重新刷新網頁的同步載入。
- 使用 Ajax 需要瀏覽器支援 JavaScript。


## JSONP 是什麼？

JSON with Padding，是一種資料格式 JSON 的使用模式，可以讓網頁從別的網域取得資料。 
由於同源政策，一般來說無法跨網域取得資源，而在 HTML 中的 、<script> 這兩個 Tag 是其中的例外，我們可以使網頁得到其他來源動態產生的 JSON 資料，JSONP 就是利用 <script> 的這個特性來達成跨來源請求的。而使用 JSONP 抓到的資料並不是 JSON，而是任意的 JavaScript，使用 JavaScript 直譯器執行。 
在實務操作上，Server 通常會提供一個 callback 的參數讓客戶端帶過去，把 JavaScript 物件整個傳到 function 裡面，就可以在 function 裡面拿到想要的資料。

## 要如何存取跨網域的 API？

- 使用後端方式發 request
- 請 API 提供者開放跨網域（CORS） 在 response header 加上 ```access-control-allow-origin: * ```

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四週時我們是透過 node.js 發送 request 給 server，並不受到瀏覽器的管轄，也就不會受到同源政策的限制，而這週是透過了瀏覽器發送 request，瀏覽器主要因為安全考量所以加上了這些限制，使得我們無法隨意存取跨網域的 API。
