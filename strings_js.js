// strings in javascript 
// javascript string are used for storing and manipulating text.
// string can be created as primitive.
// we can use single as well as double quoate.

// Methods of string

// length of string

// let myName = "Tanuj Sonare"
// console.log(myName.length);


// Escap character

// let sentence = "This is my \"line\" that's it."
// console.log(sentence);

              //  or

// let sentence = 'This is my "line" thats it.'
// console.log(sentence);

// indexOf method 
// if it does not find the string then returns -1.

// let mysentence = "This is my sentence";
// console.log(mysentence.indexOf('my'));

// lastIndexOf method in string

// let mysentence = "This is my sentence";
// console.log(mysentence.lastIndexOf('i'));

// how to search string in string
// Search method in string
// search the string and returns the position of the string

// let mysentence = "This is my sentence";
// console.log(mysentence.search('i'));

// Extracting strings part

// slice method of string in javascript
// it returns the sliced part in the new string
// it does not returns last index output 

// var str = "this is a string";

// let str_slice = str.slice(0,3);
// let str_slice = str.slice(3);
// let str_slice = str.slice(3,-1);
// console.log(str_slice);

// challenge display on 280 character of a string

// let  mysentence = "Nam natus ullam laudantium ut sit at. Placeat est sit non quisquam. Eligendi et fugit perspiciatis reiciendis perspiciatis aliquam non. Consequatur natus similique magni voluptates nobis id quis. Quis et est recusandae nam quia quam ut maiores. Dolor deleniti quidem odio et possimus blanditiis non saepe"

// let mytweet = mysentence.slice(0,280)

// console.log(mytweet);

// substring method of string 
// substring does not works with negative indexing

// var str = "this is a string";

// let res = str.substring(3,-1);
// console.log(str_slice);

// substr() method of string 
// this also not works with negative indexing if we want then only give the negative .0 
// var str = "this is a string";

// // let res = str.substr(0,4);
// // let res = str.substr(3,-1);
// let res = str.substr(3,-1);

// console.log(res);

// replacing string content
// replace method is casesenstitve 

// let str = "This is a string";

// let res = str.replace('a', 'my');
// console.log(res);


// Extracting string characeter

// There are 3 methods for extracting string characters

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// charAt method of string extracting
// Returns character present on the given index.

// let str = "Hello world";
// console.log(str.charAt(2));

// charCodeAt(positon) method of string extracting 
// it returns the character code of the present character like Asci value 

// let str = "Hello world";

// console.log(str.charCodeAt(0));


// challenge question - Return the Unicode of the last character in a string 


// let str = "Hello World";

// let lastChar = str.length - 1; // because to find the last index with use of length the we have to -1 because it may return one index added.
// console.log(str.charCodeAt(lastChar));

// property access of string extracting

// let str = "Hello World";

// console.log(str[0]); // it return the character present at the 0 index.


// toUpperCase () method in string

// let str = "hello world";
// console.log(str.toUpperCase());


// toUpperCase () method in string

// let str = "HELLO WORLD";
// console.log(str.toLowerCase());

// string concatination

// let firstName = "Tanuj";
// let lastName = "Sonare";

// console.log(firstName + lastName); 
// console.log(firstName.concat(" ",lastName)); // With concat method
// console.log(`${firstName} ${lastName}`); // With Template literals


// trim() method of string

// The trim() method removes whitespaces from both side

// let str = "           Hello World             ";

// console.log(str.trim());


// Split() method to convert string into array 
    
let str = "a, b, c, d, e";

console.log(str.split(',')); // it split and return the output in an array