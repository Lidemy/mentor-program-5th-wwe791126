/* eslint-disable */

/*
hw4：印出因數
先幫大家複習一下數學，給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，
所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。
現在請寫出一個函式來「印出」所有的因數
function printFactor(n) {
  
}

printFactor(10);
*/

function printFactor(n) {          //設一個函數printFactor ,參數n
    for(let i=0 ; i <= n ; i+=1) {  
      if (n % i == 0) {            //若n除i餘數等於0 
        console.log(i);            //就印出i
      }
    }

  }
  printFactor(15);               //印出 1,3,5,15