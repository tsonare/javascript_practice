// Date and Time in javascript
// Date objects contain a number that represents milliseconds since 1 january 1970 UTC.

// Creating Date Objects

// There are four ways to create a new date objects:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 argument
// new Date(milliseconds)
// // we cannot avoid month section

// new Date(date string)
// Date object are created with the new Date() constructor

// let currDate = new Date()
// console.log(currDate); // its non local time

// let currDate = (new Date().toLocaleString()); // local time 
// let currDate = (new Date().toString()); // local time 
// console.log(currDate); 

// Date.now() method

// console.log(Date.now()); // it returns millisecond since from 1970 to present time

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// Note:- javascript count months from 0 to 11 means january is 0 and 11 is december.

// let date = new Date(2022, 3, 20, 20, 30, 30, 0);
// console.log(date.toLocaleString());
// console.log(date.toLocaleString()); // if we want only date then this method is used. 

// Note:- from this seven argument month argument is required always.


// new Date(datestring) method
// new date string creates a new date objects from a string 

// var d = new Date("April 20, 2022 12:56:00");
// console.log(d.toLocaleString());

// new Date(millisecond) method 

// var d = new Date(1650437872276);
// console.log(d.toLocaleString());


// ============================================================

// Date methods 

// how to get individual date 

// var currDate = new Date();
// console.log(currDate.toLocaleString()); // to get date and time in locale 
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); // 0-11 jan to dec
// console.log(currDate.getDate());
// console.log(currDate.getDay()); // this will be also return in the form of number


// how to set the individual date 

// var currDate = new Date();

// console.log(currDate.setFullYear(2022));
// console.log(currDate.setFullYear(2022, 3, 20));
// console.log(currDate.setMonth(3));
// console.log(currDate.setDate(20));
// console.log(currDate.toLocaleString());



// ==============================================================

// Time Methods

// get method of time

// var currTime = new Date();

// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());


// set method of time
 
// var currTime = new Date();

// // console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(5));
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(5)); 
 


