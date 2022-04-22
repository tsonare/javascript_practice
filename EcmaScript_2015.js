// EcmaScript Es6 is an sixth edition of Ecmascript relased in 2015

// Let vs const

// With the use of var
// var myname = "Tanuj"
// console.log(myname)

// myname = "Ankit"
// console.log(myname);

// with the use of let 


// let myname = "Tanuj"
// console.log(myname)

// myname = "Ankit"
// console.log(myname);

// with the use of const 
// it will shows error because once we declare the value of const then it does not change.

// const myname = "Tanuj"
// console.log(myname)

// myname = "Ankit"
// console.log(myname);

// Function Scope example which may be followed by (var) 
// function biodata(){
//   var myFirstName = "Tanuj";
//   console.log(myFirstName); 

//   if(true){
//     var myLastName = "Sonare";
//     console.log('inner '+ myFirstName );
//     console.log('inner '+ myLastName );
//   }
//   console.log('innerInOuter '+ myLastName);
// }

// biodata();

// Block scope folllowed by (Let) and (const)
// it may shows error
 
// function biodata(){
//   let myFirstName = "Tanuj";
//   console.log(myFirstName); 

//   if(true){
//     let myLastName = "Sonare";
//     console.log('inner '+ myFirstName );
//     console.log('inner '+ myLastName );
//   }
//   console.log('innerInOuter '+ myLastName);
// }

// biodata();

// Template literals (Template String)

// example of table of 2

// for (let num = 1; num<= 10; num++){
//   let tableof = 2;
//   console.log(` ${tableof} X ${num} = ${tableof*num}`); // template literals 
// }

// Default parameter 
// Default function parameter allow named parameter to be initialized with default values if no value or undefined is passed.

// function mult(a, b=2){
//   return a*b
// }

// console.log(mult(2));

// Fat Arrow fucntion

// normal function

// function sum(a,b){
//     var total = a + b;
//     console.log("sum of a and b is : "+ total);
// }
// sum(10,20);

// converting it into Fat Arrow function
// with the use of fat arrow funcction we can only call function after declartion

// const sum = (a,b) =>{
//       let total = a + b;
//       return (` sum of ${a} and ${b} is ${total}`);
//   }
//   console.log(sum(10,20));

// another example we can use it one line also

const sum = (a, b) => `sum of ${a} and ${b} is ${a+b}`
console.log(sum(20,30));