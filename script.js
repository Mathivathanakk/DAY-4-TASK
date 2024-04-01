//TASK 1 AND TASK 2:

//PROGRAMS IN ANONYMOUS FUNCTION,IIFE FUNCTION AND ARROW FUNCTION:

//!Print odd numbers in an array

//ANONYMOUS FUNCTION:
/*
var result = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE FUNCTION:

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//ARROW FUNCTION:

var result = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Convert all the strings to title caps in a string array

//ANONYMOUS FUNCTION:

var caps=function (arr) {
  var res = arr.toString();
  var final = res.toLowerCase().split(" ");
  for (var i = 0; i < final.length; i += 1) {
    final[i]= final[i].charAt(0).toUpperCase()+final[i].slice(1);
  }
  return final.join(" ");
}
console.log(caps(["i aM mAtHiVathaNa"]));

//IIFE FUNCTION:

(function caps(arr) {
  var res = arr.toString();
  var final = res.toLowerCase().split(" ");
  for (var i = 0; i < final.length; i += 1) {
    final[i]= final[i].charAt(0).toUpperCase()+final[i].slice(1);
  }
  console.log(final.join(" "));
})
(["i aM mAtHiVathaNa"]);

//ARROW FUNCTION:

var caps=(arr) =>{
  var res = arr.toString();
  var final = res.toLowerCase().split(" ");
  for (var i = 0; i < final.length; i += 1) {
    final[i]= final[i].charAt(0).toUpperCase()+final[i].slice(1);
  }
  return final.join(" ");
}
console.log(caps(["i aM mAtHiVathaNa"]))

//Sum of all numbers in an array

//ANONYMOUS FUNCTION:

var sum = 0;
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
};
console.log(a([1, 8, 9, 5, 4]));

//IIFE FUNCTION:

var sum = 0;
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  console.log(sum);
})([1, 8, 9, 5, 4]);

//ARROW FUNCTION:

var sum = 0;
var a = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
};
console.log(a([1, 8, 9, 5, 4]));

//Return all the prime numbers in an array

//ANONYMOUS FUNCTION:

var result = [];
var prime=function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE FUNCTION:

var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//ARROW FUNCTION:

var result = [];
var prime=(arr)=> {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count = 1;
      }
    }
    if (count === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//Return all the palindromes in an array

//ANONYMOUS FUNCTION:

var palindrome=function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var res = arr[i].split("").reverse().join("");
    if (res === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(palindrome(["mom", "aba","jki","aabbaa"]));

//IIFE FUNCTION:

(function (arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var res = arr[i].split("").reverse().join("");
    if (res === arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})(["mom", "aba","jki","aabbaa"]);

//ARROW FUNCTION:

var palindrome=(arr)=> {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var res = arr[i].split("").reverse().join("");
    if (res === arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(palindrome(["mom", "aba","jki","aabbaa"]));

//Return median of two sorted arrays of the same size.

//ANONYMOUS FUNCTION:
let x = [1, 3, 6, 7];
let y = [2, 4, 3, 5];
var median = function (x, y) {
  let arr = [...x, ...y];
  //console.log(arr)
  arr.sort((a, b) => a - b);
  // console.log(arr)
  let n = arr.length;
  if (n % 2 === 0) {
    return (arr[n / 2] + arr[n - 1] / 2) / 2;
  } else {
    return arr[Math.floor(n / 2)];
  }
};
console.log(median(x, y));

//IIFE FUNCTION:

let x = [1,3,6,7];
let y = [2,4,3,5];
(function (x, y) {
  let arr = [...x, ...y];
//console.log(arr)
  arr.sort((a, b) => a - b);
 // console.log(arr)
  let n = arr.length;
  if (n % 2 === 0) {
    console.log ((arr[n / 2] + arr[n - 1] / 2) / 2);
  } else {
    console.log( arr[Math.floor(n / 2)]);
  }
})(x, y);

//Remove duplicates from an array

//ANONYMOUS FUNCTION:

let arr = [1, 2, 1, 3, 4, 4];

function duplicates(arr) {
  return [...new Set(arr)];
}
console.log(duplicates(arr));

//IIFE FUNCTION:

let arr = [1, 2, 1, 3, 4, 4];

(function duplicates(arr) {
  console.log([...new Set(arr)]);
})(arr);

//Rotate an array by k times

//ANONYMOUS FUNCTION:

let arr = [1, 2, 3, 4, 5];
let k = 3;
var Rotate = function (arr, k) {
  for (i = 0; i < k; i++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < k; i++) {
    arr.shift();
  }
  return arr;
};
console.log(Rotate(arr, k));

//IIFE FUNCTION:

let arr = [1, 2, 3, 4, 5];
let k = 4;
(function (arr, k) {
  for (i = 0; i < k; i ++) {
    arr.push(arr[i]);
  }
  for (var i = 0; i < k; i++) {
    arr.shift();
  }
  console.log (arr);
})(arr, k);
*/
