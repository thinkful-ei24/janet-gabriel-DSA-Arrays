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
const filterArr = (arr, minValue)=>{
     const filteredArray= [];

     arr.forEach(value=> value > minValue ? filteredArray.push(value) : null );

     return filteredArray;
};
  

console.log(filterArr([1,2,3,4,5,6,7,8], 5));