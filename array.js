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

const months = ['jan', 'feb', 'march', 'apr', 'march', 'jun'];

// const updatemonth = months.splice(2,1,"March"); // on 2 index we have to delete and update only one so 1.
// console.log(months);

// with second mehod index of 