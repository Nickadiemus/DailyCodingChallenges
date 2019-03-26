/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 2, 1];

function sol(arr){
  var final = [];
  for(var i = 0; i < arr.length; i++){
    var holder = arr[i];
    arr[i] = 1;
    var s = sum(arr);
    arr[i] = holder;
    final.push(s);
  }
  console.log(final);

}

function sum(arr){
  var sum = 1;
  arr.forEach((a) => {
    sum *= a;
  })
  return sum;
}

sol(arr2);
