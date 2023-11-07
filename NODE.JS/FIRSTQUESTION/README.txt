QUESTION:

Create a Node.js server that listens on port 3000. Implement the following routes:
• GET: “/hello” - This route should respond with “Hello, World!”
• POST: “/hello” - This route should accept a JSON payload with a “name” field and
respond with “Hello, {name}!”. For example, if the request payload is
{“name”:“John”}, the response should be “Hello, John!”.
• PUT: “/hello/:id” - This route should accept a JSON payload with a “name” field and
update the name of a specific resource identified by the given :id. The response
should be 200 OK if successful.
• DELETE: “/hello/:id” - This route should delete a specific resource identified by the
given :id. The response should be 200 OK if successful.
Ensure that your server can handle requests made with different HTTP methods (GET,
POST, PUT, DELETE) and respond accordingly.

 *----------------------------------------------------------------------------*

 -> Visual Studio code Editor is used for this program.
 -> Before starting the program , we need to install Node.js (depending on Our operating system.).We can check the version by typing node -v and npm -v in the terminal.
 -> Before starting the Node.js project, run 'npm init' to create a new package.json file for the project.Then we need to answer the questions about the project.
 ->Then install Express, nodemon, body-parser by writing in the terminal as npm install express body-parser nodemon. and hit enter, then we can find these in the dependencies in the package.json after installing.
 -> after installing nodemon, we have to add "start": "nodemon app.js"
 ->Inside the project, open a file 'app.js'. Import and create express application on the top like: 
        const express=require('express');
        const app=express(); as express is the middleware.

->start the server on port 3000 : inorder to bind and listen to the connections on the specified host and port, use app.listen()function.
->For starting the server, use 'npm run start' in the terminal.
->started implementing the following routes using HTTP methods: GET, POST, PUT and DELETE .
-> bodyParser.json()-which returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option and express.json() function is a middleware function in EXpress.js applications to parse incoming JSON data from HTTP requests. 
-> response.setHeader () is used to ensure the handle request made with different HTTP methods and the Content-Type.
->next()is used to move to next line part of the code.
-> created an api-> '/hello'  through GET method and displayed in the console as Hello World!
-> For post method we need to pass a parameter in the url and is to be fetched in the server. Inorder to fetch the parameter passed , I used QueryString. For that we need to install query-string in the project by writing : npm i query-string.
After installng , we need to import query-string to the file.
->After the url, write ?name:Dolly. For fetching the name given in the url, I used a variable  in the POST method which stores the passed value  by writing the code as 'const name=req.query.name;'. When run the server, displays the output as Hello Dolly!
->Inorder to update the value assigned to particular id, PUT method is used.
->For deleting a record for a particular id, DELETE method is used.

