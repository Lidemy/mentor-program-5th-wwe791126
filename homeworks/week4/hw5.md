## 請以自己的話解釋 API 是什麼

API = Application Programming Interface = 應用程式介面
也就是交換資料的管道，是一種協助應用程式彼此溝通 (傳遞、修改資料) 的程式。

以銷售車子來講的話  
買車需要銷售員為您介紹車子性能、cc 數、價格、舒適度等等
所以可以知道

自己 = 使用者
銷售員 = API
車店 = 資料庫
車子 = 資料

店面就可以裝取諸多不一樣的車子，因自己要買車，所以直接往店面去看車試駕是最快的，
也就是一個大資料庫，然後銷售員負責車子的性能等等介紹，等於串接之中的資訊落差，讓資訊可以同步！

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

499 Token Required：這兩個是以前一個叫做 ArcGIS for Server 的系統會回應的 Status Code。一般來說驗證資訊錯誤還是會回傳 401 Unathorized。

520 Unknown Error：Cloudflare 會用的未知錯誤。這個在電腦上有時候會遇到，查了一下圖片是如此的熟悉且耐人尋味。

521 Web Server Is Down：指目標伺服器掛了。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

**Base URL**: https://www.myrestaurants.com/api
| 說明 | method | path | 參數 | 範例 |
| ---------------- | ------ | ---- | --------- | ---------------- |
| 取得所有餐廳資料 |GET |/restaurants|\_limit : 限制回傳資料數量 |/restaurants?\_limit=30|
| 取得單一餐廳資料 |GET |/restaurants/:id |無 |/restaurants/3 |
| 刪除餐廳 |DELETE |/restaurants/:id |無 |/restaurants/3 |
| 新增餐廳 |POST |/restaurants|name: 餐廳名| 無 | |
| 更改餐廳 |PATCH |/restaurants/:id|name: 餐廳名 |/restaurants/3 |
