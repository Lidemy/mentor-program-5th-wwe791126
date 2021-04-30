/* eslint-disable */

/*

hw1：印出星星

給定 n（1<=n<=30），依照規律「印出」正確圖形

function printStars(n) {

}

printStars(5)

*/

function printStars(n) {             //設一個函式printStars,參數(n)
    if (n >= 1 && n <= 30) {          //給n一個範圍 （1<=n<=30）
      for (let i = 1; i <= n; i ++) {  //設 i =1 ; i<5的話 ; 持續i++
      console.log("*");                //滿足迴圈條件則印出* ; 印到等於5 
  
         }
    }
}
printStars(5);