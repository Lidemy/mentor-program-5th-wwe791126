/* eslint-disable */

/*
hw2：首字母大寫
給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

function capitalize(str) {
  
}

console.log(capitalize('hello'));
*/

function capitalize(str) {           //以帶入nick為例
    var arr = str.split("")             //宣告arr = str.split = ["n" , "i" , "c" , "k"] 
    if (arr[0]>"a" && arr[0]<"z"){  //假設第一個字串在a~z之間
    arr[0] = arr[0].toUpperCase()   //第一個字串則變成大寫
    str = arr.join("")              //再把arr變大寫的字串加進去 str
    return str                      //返回str
    } else {
    return str                      //沒有的話,一樣返回str  ; 這個str返回是原樣的str
    }
   }
    console.log(capitalize('nick'));
    console.log(capitalize('Nick'));
    console.log(capitalize(',hello'));