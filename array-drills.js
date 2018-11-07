/* eslint-disable no-empty */
/* eslint-disable indent */
//URLify a string

//Big O is o(n) Linear
// the run time complexity scales with the iput size
// const URLify = str=>{
//     let newUrl= '';

//     for (let i=0; i<str.length; i++){
//         if(str[i] !== ' '){
//             newUrl += str[i];
//         } else {
//             newUrl += '%20';
//         }
//     }
//     return newUrl;
// };

// console.log(URLify('www.thinkful.com /tauh ida parv een'));

//Filtering an array

//option1
// const filterArr = (arr, minValue)=>{
//     const filteredArr= [];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > minValue){
//             filteredArr.push(arr[i])
//         }
//     }

//     return filteredArr;
// };

//option2
// const filterArr = (arr, minValue) => {
//   const filteredArray = [];

//   arr.forEach(value => (value > minValue ? filteredArray.push(value) : null));

//   return filteredArray;
// };

// console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8], 5));

// // Max sum in the array
// // Linear O(n)
// function maxSum(array) {
//   let largestNumber = 0;
//   let currentSum = 0;

//   array.forEach(number => {
//     currentSum += number;
//     if (largestNumber < currentSum) largestNumber = currentSum;
//   });

//   return largestNumber;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// Option 1 - 2N
// function mergeArrays(array1, array2) {
//   return array1.concat(array2).sort((a, b) => a - b);
// }

// Option 2
// function mergeArrays(array1, array2) {
//   const mergedArray = [];
//   const sortedArray = [];

//   array1.forEach(element => {
//     mergedArray.push(element);
//   });

//   array2.forEach(element => {
//     mergedArray.push(element);
//   });

//   mergedArray.forEach((number, index) => {});

//   return mergedArray;
// }

function mergeArrays(array1, array2) {
  const tempArray = [];

  while (array1.length || array2.length) {
    if (typeof array1[0] === 'undefined') {
      tempArray.push(array2[0]);
      array2.splice(0, 1);
    } else if (array1[0] > array2[0]) {
      tempArray.push(array2[0]);
      array2.splice(0, 1);
    } else {
      tempArray.push(array1[0]);
      array1.splice(0, 1);
    }
  }
  return tempArray;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
