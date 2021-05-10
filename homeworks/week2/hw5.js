/* eslint-disable */

/*function join(arr, concatStr) {
  
}

function repeat(str, times) {
  
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
*/
                                                  //以join([1, 2, 3], "")為例子
function join(arr, concatStr) {                   //設函式名稱join,兩個參數(str , concaStr)
    let newStr = "";                              //宣告newStr為空字串
    for (let i = 0; i < arr.length; i += 1) {     //str長度為3 以[1,2,3]為例
      if (i < (arr.length - 1)) {                 //因為陣列長度從0開始,所以要-1
        newStr +=  arr[i] + concatStr;           // "" + arr[0](元素 1) + "" = 1
      } else {                                   //未滿足條件時,繼續跑迴圈 到 i < 3,則跑下一個條件
        newStr += arr[i];                       // i < 3後,則跑這一行 ; 因concatStr是空字串,則可忽略
      }
    }
    return newStr;                                   //回傳newStr  = "str裡的字串或數字"
  }
  console.log(join([1, 2, 3], ""))                   //正確回傳值：123
  console.log(join(["a", "b", "c"], "!"))            //正確回傳值：a!b!c
  console.log(join(["a", 1, "b", 2, "c", 3], ','))   //正確回傳值：a,1,b,2,c,3
  console.log(join(["a","!"]));                      //正確回傳值：aundefied!


  function repeat(str, time){              //設函式名稱join,兩個參數(str , time)
    var string = ""                        //宣告string為空字串
    for(var i=1; i<= time; i++){           //給一個條件 
      string += str                        //滿足條件的話 空字串 ""+ a ="a" ,到i<=time才停止迴圈
    }
    return string                         // i < 6之後跳出迴圈,回傳string
  }
  
  console.log(repeat("a", 5));       //印出aaaaa
  
  console.log(repeat("yoyo", 2));   //印出yoyoyoyo

  