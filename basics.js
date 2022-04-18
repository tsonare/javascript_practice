// console.log("Hello world");

// variable and values in javascript

// var myFirstname = 'Tanuj';
// var _myLastname = 'Sonare';
// var $myAge = 20;

// console.log(myFirstname);
// console.log(_myLastname);
// console.log($myAge);

// Data types in javascript

// var myFirstname = 'Tanuj';
// var myAge = 20;
// var myName = true

// type of operater in js
// console.log(typeof(myFirstname));
// console.log(typeof(myAge));
// console.log(typeof(myName));

// challenge 2 for Concetination
// console.log( 10 + "20"); // it gives 1020
// console.log( 10 - "5"); // it gives 5 that's it is bug is js
// console.log("Tanuj " + "Sonare"); 
// console.log(" " + " "); // it gives empty  
// console.log(" " + 0); // it gives 0  
// console.log("Java" - "Script"); // NaN (not a number)   
// console.log(true + true); // it gives 2  becuase true=1 false=0

// Differene between null and undefined ?

// var Useless = null;
// console.log(Useless);
// console.log(typeof(Useless)); // bug in js because it giving datatype as object 

// var StandBy;
// console.log(StandBy);
// console.log(typeof(StandBy));

// what is NaN ?
// condtion for checking with NaN

// var myNumber = 10;

// if(isNaN(myNumber)){
//     console.log("plz enter the valid phone number");
// }
// else{
//     console.log("ok");
// }

// Challenge 3

// console.log(NaN == NaN); // It returns false because in this case NaN is not define that which type of it 
// console.log(Number.NaN == NaN); // It also return false becuase of the NaN is not defined
// console.log(isNaN(NaN)); // It returns true NaN is also equals NaN
// console.log(isNaN(Number.NaN)) // True beacuse if is not a number then NaN return True
// console.log(Number.isNaN(NaN)) // True beacuse if is not a number then NaN return True

// Expression and Operaters

// Assignment operater
// var number = 20; // ex. of assignment operater which assign value

// Arthmetic oper.
// console.log(3+2);
// console.log(3*2);
// console.log(3%2);
// console.log(3/2);
// console.log(3-2);

// postfix 
// var newNumber = number++

// console.log(number);
// console.log(newNumber); // it gives 20 becuase we can olny increase number not newnumber

// Prefix 
// var num = 15;
// var newNumberPrefix = ++num

// console.log(num);
// console.log(newNumberPrefix); // it gives 20 becuase we can olny increase number not newnumber


// Comparison operaters

// var a = 10;
// var b = 5;

// Equals(==)
// console.log(a == b);

// // Not Equals(!=)
// console.log(a != b);

// // Not Equals(>)
// console.log(a > b);

// // Not Equals(<)
// console.log(a < b);

// // Not Equals(>=)
// console.log(a >= b);

// // Not Equals(<=)
// console.log(a <= b);

// Logical Operater

// var a = 10;
// var b = 5;

// console.log((a>b) && (b<a)) // And operater
// console.log((a>b) || (b>a)) // Or operater
// console.log(!false) // Not operater


// string concatination (for joining the string operand)

// console.log("hello " + "world");

// challange 4 

// q1
// console.log(3**3); // it means power of 3*3*3

//q2
// console.log("Tanuj" + 1910);

//q3 Swapping two numbers
// var num1 = 10;
// var num2 = 15;
// var SwapNum1 = num2
// var SwapNum2 = num1
// console.log(SwapNum1)
// console.log(SwapNum2)

// now doing swapping without using third var.
// num1 = num2 + num1; //10+15=25
// num2 = num1 - num2; // 25 -15 =10 
// num1 = num1 - num2; // 25-10 = 15

// console.log("value of num 1 is "+ num1);
// console.log("value of num 2 is "+ num2);

// difference between == vs === ?

var a = 5;
var b = '5';

console.log(a == b); // it doesn't check data type only check values 
console.log(a === b); // it checks data type and values also










