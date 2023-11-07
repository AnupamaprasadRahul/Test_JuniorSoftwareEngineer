QUESTION:

Write a function in Node.js to read a JSON file, parse its contents, and return the data as a
JavaScript object. Assume that the JSON file is located in the same directory as the script.

                *--------------------------------------------------*

-> Import the 'fs' module for reading the file.
-> store the path of the JSON file in a const variable - (filepath)
-> created a function readJSONFile() which carries the filepath of JSON file.
-> In the function,inside the try-catch error handling method inorder to check the error during file reading and parsing, fs module takes the filepath,encoding to be used, which in this case is 'utf8'. and also  data parsing using JSON.parse.

-> If there is no error, the try block is executed, where I parse the JSON data using JSON.parse()method and output the data on the console.