//1.Do the below programs in anonymous function & IIFE.

//a.Print odd numbers in an array
//anonymous:-
var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//IIFE:-
var result =[];
  (function (arr){
    for (var i=0;i<arr.length;i=i+1){
     if(arr[i]%2!==0){
     result.push(arr[i]);
     }
   }
   console.log(result);
})([1,2,3,4,5,6,7,8,9,10]) 

//c.Sum of all numbers in an array
//anonymous:-
var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%1!==1){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//IIFE:-
var result =[];
  (function (arr){
    for (var i=0;i<arr.length;i=i+1){
     if(arr[i]%1!==1){
     result.push(arr[i]);
     }
   }
   console.log(result);
})([1,2,3,4,5,6,7,8,9,10]) 


//2.Do the below programs in arrow functions.

//a.Print odd numbers in an array

 var result = [];
var odd= (arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10])); 

//c.Sum of all numbers in an array
var result = [];
var odd= (arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%1!==1){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10])); 