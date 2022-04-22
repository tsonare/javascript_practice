// Array in javascript 
// In background javascript runs the code to make array to an var
// var myFriends = new Array; 

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];
// console.log(myFriends[3]);
// console.log(myFriends.length-1); // return last indexing of array
// console.log(myFriends.length);  //  return last elements value 

// use for loop to navigate
// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];
// for (var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i])
// }

// With for in loop which is introduce in  ES6
// for in loop returns the indexing of the elements.
// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// for (let friend in myFriends){
//   console.log(friend);
// }

// for of loop in js
// for of loop returns the value of the elements

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// for (let friend of myFriends){
//   console.log(friend);
// }

//  foreach loop in js 
// calls the function for each elements in the array

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// // with normal function
// myFriends.forEach(function(element, index, array){
//     console.log(`element: ${element} index: ${index} and array is ${array}`);
// });

// // with fat arrow function

// myFriends.forEach((element, index, array) => {
//   console.log(`element: ${element} index: ${index} and array is ${array}`);
// });

// searching and filtering in an array

// searching array method indexof()

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// console.log(myFriends.indexOf("ankur"));

// searching array method lastindexof()

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// console.log(myFriends.lastIndexOf("ankur"));


// Searching elements in array through includes()

// var myFriends = ["chetan", "ankur", "shubham", "vidhan"];

// console.log(myFriends.includes("ankur",2));

// methods for filter in array 
// find method of filteration in array 

// const prices = [200, 300, 400, 500, 600, 700];

// const getResult = prices.find((currVal)=>{
//   return currVal < 400;
// }
// );
// console.log(getResult);

// upper code in one line

// console.log(prices.find((val)=> val <400)); 

// findIndex method in filter of array

// const prices = [200, 300, 400, 500, 600, 700];

// console.log(prices.findIndex((val)=> val<400));

//  Array filter() method

// const prices = [200, 300, 400, 500, 600, 700];

// console.log(prices.filter((price)=> price>800 ));


// Array sort method 

// const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun']
// console.log(months.sort());

// sorting through number

// const number = [1,2,3,4,5]
// console.log(number.sort());

// Insert, add , Replace, delete or CRUD operations

// push() method in array
// it adds elements in array at last
// const city = ["Indore", "Bhopal", "Mumbai", "Delhi", "Dewas"];
// const count = city.push("Ujjain","jaipur");
// console.log(city);
// console.log(count); // returns how many elements of array  is present

// unshift method in array 
// it adds elements in 

// const city = ["Indore", "Bhopal", "Mumbai", "Delhi", "Dewas"];
// const count = city.unshift("Ujjain","jaipur");
// console.log(city);
// console.log(count);

// 2nd example

// const number = [1,2,3,4,5,6];
// number.unshift(7,8);
// console.log(number); 

// pop methods of array
// it will remove last elements of array 
// const city = ["Indore", "Bhopal", "Mumbai", "Delhi", "Dewas"];
// console.log(city);
// console.log(city.pop());
// console.log(city);

// shift methods of array
// it will remove last elements of array 
// const city = ["Indore", "Bhopal", "Mumbai", "Delhi", "Dewas"];
// console.log(city);
// console.log(city.shift());
// console.log(city);

// splice method of array 

// const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun'];
// const addMonth = months.splice(6,0,"dec"); // we want to put 'dec' at 6th index and we don't want to delete that's why 0.
// const addMonth = months.splice(0,3,"dec"); // for deleting the element
// const addMonth = months.splice(months.length,0,"dec");
// console.log(months);

// what is the return  value of splice

// ans :- The return type of splice method is empty Array. 

// Update march to March 

// const months = ['jan', 'feb', 'march', 'apr', 'march', 'jun'];

// const updatemonth = months.splice(2,1,"March"); // on 2 index we have to delete and update only one so 1.
// console.log(months);

// with second mehod index of 

// const indexOfmonth = months.indexOf('march')
// if(indexOfmonth != -1){
//   const updatemonth = months.splice(indexOfmonth,1,"March");
//   console.log(months);
// }else{
//   console.log("value not found");
// }

// deleting element at infinity

// const months = ['jan', 'feb', 'march', 'apr', 'march', 'jun'];

// const indexOfmonth = months.indexOf('march')
// if(indexOfmonth != -1){
//   const updatemonth = months.splice(indexOfmonth,Infinity); // deleting element
//   console.log(months);
// }else{
//   console.log("value not found");
// }


// Map method in javascript
// With map function we can use filter and reduce at the same time .
// Returns new array containing the result of calling a function on every element in this array .

// const arr = [1, 2, 3, 4, 5, 6]

// let newarr = arr.map((curelement, index, array) =>{
//     return curelement > 3;
// });
// console.log(arr);
// console.log(newarr);

// another method

// let newArr = arr.map((currElement, index, array)=>{
//     return (`Index number = ${index} and the value is = ${currElement} and this array belongs to = ${array}`)
// });

// console.log(newArr);

// challange 
// find the square root of the element 

// let num = [1,2,3,4,5,6,7,8,9,10]

// let numSquare = num.map((currElement)=>{
//   return currElement*currElement
// });

// console.log(numSquare);

// with the use Math.sqrt method 

// let num = [4, 9, 16, 25, 36, 49, 64]; // it returns square root like 4=>2 and 9=>3

// let numSquare = num.map((currElement)=>{
//   return Math.sqrt(currElement);
// });
// console.log(numSquare);


// q.2 multiply the number by 2 and print only the multipled number greater than 10.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let multipledNum = num.map((currElement)=>{
//   return currElement * 2;
// }).filter((currEl)=> currEl>10);

// console.log(multipledNum);

// Reduce method 
// to flattern the array 
// reduce method is use to convert 3rd and 2d array into one dimensional array


// The reduce method takes four argument 
// 1. Accumulator // to store together
// 2. Current value
// 3. Current Index
// 4. Source Array
// example
// let arr = [1, 2, 3, 4, 5, 10]

// let sum = arr.reduce((accumulator, currentValue, currentIndex, sourceArray)=>{
//   return accumulator + currentValue;
// }, 7); // after (,) the value is intial value was also adding in the sum
// console.log(sum);

// how to flattern an array

// const arr = [
//     ['Zone_1', 'Zone_2'],
//     ['Zone_3', 'Zone_4'],
//     ['Zone_5', 'Zone_6'],
//     ['Zone_7', 'Zone_8']
// ];

// let flatarr = arr.reduce((accumulator, currVal)=>{
//   return accumulator.concat(currVal)
// });
// console.log(flatarr);



