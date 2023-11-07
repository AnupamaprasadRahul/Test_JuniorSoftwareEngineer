QUESTION:

Write a JavaScript function that takes two parameters: an array of numbers and a target
number. The function should find two numbers from the array that add up to the target
number, and return them as an array. If no such numbers exist, the function should return an empty array.

      *------------------------------------------------------------------------------*

-> Used Visual Studio Code Editor to do the program.
-> Declared two variables which takes two parameters : 'array' for array of numbers, 'targetNum' for the targetNumber.
-> Created a function findNumber() which takes these two parameters. Inside the function, there is a loop for getting each element in the array.   and inside the first loop there is another loop for checking whether the sum of two elements gives the target value (as declared) or not.
-> If meets the target value, then that elements (array[i],array[j]) will be returned as new array. Otherwise return as empty array.
