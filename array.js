Q1. What is an array in JavaScript?
is a special type of object used to store multiple values in a single variable. It is an ordered collection of items, where each item can be of any data type, including numbers, strings, objects, or even other arrays. Arrays are indexed, meaning each item has a numeric index starting from 0.

Q2. How do you create an array in JavaScript?
You can create an array in JavaScript using either the array literal syntax or the Array constructor. Here are two examples:

Using array literal syntax:
let myArray = [1, 2, 3, 'hello', true];

Using the Array constructor:
let myArray = new Array(1, 2, 3, 'hello', true);
Q3. What data types can you store inside an array?
You can store any data type inside an array, including:
Create one array that mixes numbers, strings, and booleans.
 be created in various programming languages.
 Q4. What is the difference between an array and a single variable?
 A single variable holds is only one value in array     s can hold multiple values at once.
 Explain in your own words and give one code example to support your answer:
 are better ways of doing this. Please comment on it    
 examples:
 Level 2: Accessing and Modifying Arrays 
 Q5. How do you access specific items from an array?
    You can access specific items from an array using their index. The index starts at 0 for the first item, 1 for the second item, and so on. You can use square brackets [] to access an item by its index.
    Write a program that prints the first and last elements of your array.
let myArray = [1, 2, 3, 'hello', true];
console.log(myArray[0]); // prints the first el
Q6. How do you change a value in an array?
    You can change a value in an array by accessing the item using its index and then assigning a new value to that index.
    Write a program that changes the second element of your array to a different value.
let myArray = [1, 2, 3, 'hello', true];
Q8. How can you add a new element to the end of an array without using .push()?
Level 3: Working with Loops and Arrays
Q9. Write a program that prints all elements in an array using three different loops:
Here is a Python program that prints all elements in an array using three different loops: a for loop with an index, a for-each loop (or enhanced for loop), and a while loop.
Level 3: Working with Loops and Arrays
Q9. Write a program that prints all elements in an array using three different loops:
Here is a JavaScript program that prints all elements in an array using three different loops: a for loop with an index, a for-of loop, and a while loop.ement
console.log(myArray[myArray.length - 1]); // prints the last element

let myArray = [1, 2, 3, 'hello', true];
myArray[1] = 'world'; // changes the second element to 'world'
console.log(myArray); // prints the modified array
Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i] * 2);
}
Q11. Create an array of names and print each name in uppercase using a loop.
let names = ['alice', 'bob', 'charlie'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}
Q12. Write a program that counts how many items are in an array without using .length. Use
a loop to count the items.
let myArray = [1, 2, 3, 'hello', true];
let count = 0;
for (let item of myArray) {
    count++;
}
console.log(count); // prints the number of items in the array
Q13. Create an array of numbers and use a loop to find the largest and smallest number.
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}



 



