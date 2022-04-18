// If and Else condition

// raining 
// var tommarow = 'rain';
// if(tommarow == 'rain'){
//     console.log("Please take an umbrella with you.")
// }else{
//     console.log("No raining today.")
// }

// leap year if it exactly divided by 4 
// nested else if

// var year = 2020;

// if (year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 != 0){
//             console.log("The year "+ year + " is not a leap year.");
//         }else{
//             console.log("The year " + year +  " is an leap year.");    
//         }
        
//     }else{
//         console.log("The year " + year +  " is an leap year.");
//     }
// }else{
//     console.log("The year "+ year + " is not a leap year.");
// }


// falsy values in javascript 
// There are 5 types of falsy values (0,null,undefined,NaN,"") 

// if (score=10){
//     console.log("You Won the game.");
    
// }else{
//     console.log("You lose the game.");
// }

// else if condition 

// var area = "triange";
// var PI=3.142, l=5, b=4, r=3;

// if(area == "circle"){
//     console.log("Area of given circel is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("Area of given triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("Area of given rectangle is : " + l*b);
// }else{
//     console.log("please enter valid choice" );
// }

// Switch
//  To short the process of else if loop as shown in above prg we can use switch

// var area = "rectangle";
// var PI=3.142, l=5, b=4, r=3;

// switch(area){
//     case 'circel':
//         console.log("Area of given circel is : " + PI*r**2);
//     break; // for breaking the statement 
//     case 'triangle':
//         console.log("Area of given triangle is : " + (l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("Area of given rectangle is : " + l*b);
//     break;
//     default:
//         console.log("please enter valid choice" );
// }

// Ternary opertor 

// var age = 14; 
// console.log((age >= 18)?"You are eligible for vote": "You are not eligible for vote");

// while loop

// var num = 10;

// while(num<=20){
//     console.log(num);
//     num++;
// }

// Do while loop

// var num = 11;
// do{
//     // debugger; 
//     console.log(num);
//     num++;
// }while(num<=10);

// for loop 

// for (var num = 1; num<=10; num++){
//     debugger;
//     console.log(num);
// }

// make programe for table of 8, 9, 12, 15

// for table of 8

console.log("Table of 8 is below \n");
for (var table=1; table<=10; table++){
    console.log(8 + " X " + table + " = " + table*8 )
}

console.log("--------------------------------------");

// for table of 9
console.log("Table of 9 is below \n");
for (var table=1; table<=10; table++){
    console.log(9 + " X " + table + " = " + table*9 )
}
console.log("--------------------------------------");

// for table of 12
console.log("Table of 12 is below \n");
for (var table=1; table<=10; table++){
    console.log(12 + " X " + table + " = " + table*12);
}
console.log("--------------------------------------");

// for table of 15
console.log("Table of 15 is below \n");
for (var table=1; table<=10; table++){
    console.log(15 + " X " + table + " = " + table*15);
}
