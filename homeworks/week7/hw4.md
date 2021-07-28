## 什麼是 DOM？

DOM(Document Object Model) 文件物件模型，是一個把 Document 轉換成 object 的模型。
把 HTML 上各個標籤定義成 Object，最終會形成一個樹狀結構，使 JavaScript 可以利用 DOM 拿到節點上的元素並加上事件處理程序，
所以 DOM 可視為瀏覽器上 JavaScript 與 HTML 的橋樑。

[參考資料](https://ithelp.ithome.com.tw/articles/10202689)


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

事件傳遞機制的順序是 : 捕獲 > 目標 > 冒泡。所以才叫「先捕獲，再冒泡。」

捕獲階段 : 當事件被觸發時，會從 window 開始往下尋找 target ；

目標階段 : 找到目標的時候就是目標階段。當在目標節點時，就不分捕獲和冒泡；

冒泡階段 : 最後，再從目標往上一路逆向傳回去根節點。

[參考資料](https://ithelp.ithome.com.tw/articles/10191970)


## 什麼是 event delegation，為什麼我們需要它？

事件代理機制，在父元素設定事件監聽，即可處理到所有子元素的事件。此做法比較有效率，而且可監聽到動態新增在底下的元素。
[參考資料](https://ithelp.ithome.com.tw/articles/10120565)


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

 1.event.preventDefault() : 阻止瀏覽器的預設行為，如跳轉頁面或是表單送出及超連結。
 2.event.stopPropagation() : 阻止事件的傳遞，中斷事件傳遞下去，會影響到後續傳遞過程的監聽事件。

 [參考資料](https://ithelp.ithome.com.tw/articles/10198999)
