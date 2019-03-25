//Given a list of numbers K, return two numbers that add up to K

var arr1 = [10,15,3,7]    //k = 17, true
var arr2 = [14,15,2,7,51] //k = 9, true
var arr3 = [12,4,3,7,52]  //k = 17, false

// function twoNumbers(k,arr){
//   var flag = false;
//   var twoNums = false
//   while(!flag){
//     var curr = arr[0];
//     for(var i = 1; i < arr.length; i++){
//       var compare = arr[i] + curr;
//       console.log(`Curr = ${curr}`);
//       console.log(`Compared: K = ${k} is eq to Compare = ${compare}`);
//       if(compare === k){
//         console.log("True!");
//         twoNums = true;
//         flag = true
//       }
//     }
//     if(!twoNums){
//       arr.shift();
//     }
//   }
//   if(!twoNums) return twoNums;
//   else return twoNums;
// }

function twoNumbers(k,arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      var comp = arr[i] + arr[j];
      // console.log(`${comp} == ${k}`);
      if(comp === k){
        return true
      }
    }
  }
  return false;
}

test1 = twoNumbers(17,arr1);
test2 = twoNumbers(2,arr2);
test3 = twoNumbers(64,arr3);
//
console.log(test1);
console.log(test2);
console.log(test3);
