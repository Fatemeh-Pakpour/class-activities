https://www.youtube.com/watch?v=qsNxdukPc2U&t=399s
what do print out these two console.log:
console.log(2+"2")
=> the answer is 22 because the plus operator can be applied to either when I have two numbers the operator add
 them, when I do not have two numbers then the operator concatenate them.
console.log(2-"2")
=> the answer is 0 because minus is only the number operator it wont work on any string.it would 
convert string to the number.
============================================================================

how to remove duplicate without using for loop and map and filter:
using Set; The Set object lets you store unique values of any type,
whether primitive values or object references.

let nums = [1,3,3,4];
num = new Set(nums);
the num will be a set including =>{ 1, 2, 3 } but that is a new set and not array.
and in order to converting to array we have to use spread operator 
num = [...new Set(nums)]
=============================================================================
A block statement (or compound statement in other languages) is 
used to group zero or more statements. The block is delimited by a pair of curly
brackets and may optionally be labelled:

===========================================================
what is difference between var and let?
var has been in js since the beginning but let was introduced in ES2015/ ES6.
let has block scope, it means a variable define with let keyword will dei at the end of block is defining.
var is a functional scope it does not respect all other blocks except function block. it will die at the 
end of function.

JavaScript Hoisting:
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
var get hoisted but let does not get hoisted. 
if you create a var at the top level (global level), it would create a property on the global object
in the case of a browser, this is likely to be the window object. So creating 
var myName = 'Sunil'; can also be referenced by calling window.myName.
However, if you wrote let newName = 'Sunny'; this would not be accessible 
in the global window object — therefore, you would not be able to use window.newName as a reference to 'Sunny'.

==========================================================
what is difference between the double equal sign and triple equal sign?
the triple equal sign is the strict comparison operator. 
the double equal sign is the type-converting comparison operator.
A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. it compares value and type.
The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. it compare just value.

=========================================================
difference between const and let?
let and const both use to define variables. const you can define constant. it means after the first
assignment of value you cannot assign the value again. 

array is an object and js let modify the object but we cannot to reassign the value.
========================================================

what is difference between null and undefined?
Null means an empty or non-existent value. null is also an object.
=========
Undefined means a variable has been declared, 
but the value of that variable has not yet been defined. undefined is of the type undefined

null !== undefined but null == undefined
the type of them are different.
========================================================
https://codeburst.io/javascript-why-does-3-true-4-and-7-other-tricky-equations-9dd13cb2a92a
 3 + true == 4?
I’m not kidding either. In JavaScript, when the plus operator is placed between a number and a boolean,
 the boolean is converted to a number.If you remember back to my JavaScript Showdown article, 
 false == 0 and true == 1. With this in mind, 3 + true is converted to 3 + 1 and thus we get the answer of 4.

===========================================================
 true + false === 1
This follows the same logic as the above example
===========================================================
‘4’ + 8 ='48'
What happens when we add a string number to an actual number?
 When the plus operator is placed between to operands, and one is a string, 
 it will convert the other number or boolean to a string and concatenate them.
By this logic: '4' + 8 becomes '4' + '8' and we get an answer of '48'.

true + ‘4’ = true4
=============================================================
1 + 1 + ‘1’ = '21'
=============================================================
‘1’ + 1 + 1 = '111'
string + number = string. So in this instance we’re left with one long string of '111'.
=============================================================
-‘69’ + 69 === 0
The minus sign before '69' is a unary minus operator that will actually 
convert the string to a number and make it negative. Thus, our equation 
becomes -69 + 69 which equals 0.
=============================================================
6-'6' === 0
'6'- 6 === 0
=============================================================
-‘giddyup’ + 409
What if our unary minus operator is in front of a string that 
can’t be converted to a number? When JavaScript fails to produce a number, 
we are left with NaN (Not A Number).
=============================================================
Arrow function :  one of the more popular features of ES6. === fat arrow functions
It’s much shorter! We are able to omit the curly braces and the return statement
===============================================================
ES6 syntax:
Array and object destructing
Destruction makes the assignment of the values of an array or object to the new variable easier.
===================
const {name , age , lastName} = contact;

console.log(name);
console.log(age);
console.log(lastName);
