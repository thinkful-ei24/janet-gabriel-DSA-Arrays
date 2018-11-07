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

// function mergeArrays(array1, array2) {
//   const tempArray = [];

//   while (array1.length || array2.length) {
//     if (typeof array1[0] === 'undefined') {
//       tempArray.push(array2[0]);
//       array2.splice(0, 1);
//     } else if (array1[0] > array2[0]) {
//       tempArray.push(array2[0]);
//       array2.splice(0, 1);
//     } else {
//       tempArray.push(array1[0]);
//       array1.splice(0, 1);
//     }
//   }
//   return tempArray;
// }

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//Remove Characters


//O(n)
// function removeVowels(str){
//     const vowels = ['a','e','i','o','u'];
//     let newStr = '';

//     for(let i=0; i<str.length; i++){
//         if(vowels.includes(str[i])!==true){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(removeVowels("Battle of the Vowels: Hawaii vs. Grozny"));

//Products

// function products (arr){
//  let num = 1;
//  const newArr = [];

//  for (let i=0; i<arr.length; i++){
//     num = 1;
//     for(let j=0; j < arr.length; j++ ){
//         if(j!==i){
//             num *= arr[j];
//         }  
//     }
//     newArr.push(num);
//     // console.log(num);
//  }

//  return newArr;
// }

// console.log(products([1, 3, 9, 4]));


// function twoDArray (arr) {
//     const newArr = [];

//     for (let i = 0; i, i < arr.length; i++){

//         for (let j = 0; j <arr.length; j++ ){

//             if(arr[i][j] === 0){

//                 arr[i].fill(0);

//                 for(let k = 0; k<arr.length; k++){
//                     arr[k][i]=0;
//                 }
//             }
//         }
//     }

//     return arr;

// }


// console.log(twoDArray([[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]]));

function zeroOneArray(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push([]);
    for (let j = 0; j < arr[i].length; j++) newArr[i].push(arr[i][j]);
  }

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        for (let n = 0; n < arr.length; n++) {
          newArr[n][j] = 0;
        }
        
        for (let m = 0; m < arr[i].length; m++) {
          newArr[i][m] = 0;
        }
      }
    }
  }

  return newArr;
}

console.log(zeroOneArray([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]));