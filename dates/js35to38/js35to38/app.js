// 1. Write a function that displays current date & time in your
// browser


// var today =  new Date();


// var date = today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();
// // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


// alert(today);

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet() {
//     var firstName = prompt("Enter your name");
//     var lastName = prompt("please enter your last name");

//     console.log("Hello" + " "  + firstName + " " + lastName);
// }

// greet()


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(addition) {
//     var c = addition + 2;
//     return c;
// }

// function total() {
//     var b = sum(2);
//     document.write("the sum of two numbers" + " " + b);
// }

// total();

// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function multiply(num1, num2 = 2) {
//     var c = num1 * num2;
//     return c;
// }

// function total() {
//     var b = multiply(4);
//     document.write("" + " " + b);
// }

// total();


// 5. Write a function that squares its argument.

// function square(x) {
//     return x * x;
//   }

// function total() {
//     var b = square(9,9);
//     document.write(b);
// }  

// total();
// 6. Write a function that computes factorial of a number.

// function factorial(n){
//     //base case
//     if(n == 0 || n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.



// var a = +prompt("enter your number")
// var a = +prompt(" enter your first number");
// var b = +prompt(" enter your last number");


// // var a=0;
// while (a<b)
//   {
//   a++;
//   document.write(a+"<br>");

//   }




// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
  
//   console.log(pythagorean(4, 3));


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variablesa

// var length = prompt("Enter a whole number for the length of your rectangle.");
//         var width = prompt("Enter a whole number for the width of your rectangle.");
//         function area(length, width) {
//             return length * width;
//         }
//         function perimeter(length, width) {
//             return 2*( length + width);
//         }
        
//         document.writeln('The area of your rectangle is ' + area(length, width));         
//         document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


// function checkPalindrome(str) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function uppercase(str) {
//     var arr1 = str.split(' ');
//     newarr = [];

//     for ( var i = 0; i < arr1.length; i++ ) {
//         newarr.push(arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1));

        

//     }
//     return newarr.join(' ');
// }

// console.log(uppercase("the quick brown fox"));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// function | JAVASCRIPT
// Page 3 of 4
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function calcCircumfrence(radius) {
//     var circumference = Math.PI * 2*radius;
//     console.log("The circumference is " + circumference);
   
//   }
  
// // circumference(radius);
// calcCircumfrence();

// function calcArea(radius) {
//     var area = Math.PI * radius*radius;
//     console.log("The area is " + area);
// }


// calcArea();