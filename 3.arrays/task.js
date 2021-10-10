"use strict"

function compareArrays(arr1, arr2) {
  let result;
  
  result = arr1.every((x, i) => {return x === arr2[i];}) && (arr1.length === arr2.length);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((someLet) => {return someLet > 0}).filter((someLet) => {return someLet %3 === 0}).map((someLet) => {return someLet * 10});

  return resultArr; // array
}
