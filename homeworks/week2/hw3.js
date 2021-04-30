/* eslint-disable */

/*
hw3：反轉字串
給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

function reverse(str) {
  
}

reverse('hello');
*/

function reverse(str) {                         //宣告函式reverse ,參數str
    var reverseString = "";                     //宣告 reverseString是一個空字串
    for (var i = str.length - 1; i>=0; i--) {   // 設i = str長度-1(假設yoyoyo是6-1 = 5) ; i 大於等於0; i-- 是往回跑
      reverseString += str[i];                  //重新宣告reverString = str裡的[i]  i 跟著上面數字跑 若yoyoyo 第五數是o 就重o開始往回跑
    }
    console.log(reverseString);                 //印出reverseString
  }
  reverse("yoyoyo");
  reverse("1abc2");
  reverse("1,2,3,2,1");