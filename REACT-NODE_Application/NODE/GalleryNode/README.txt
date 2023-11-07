Open the folder in visual studio code and open the terminal and type: 'npm init' to start  (node version is v18.17.1  and npm version is 9.6.7)
Then they will ask for some questions and at last type 'yes' to confirm.
Then package .json file will be opened.
After we need to install express, nodemon, body-parser, mongodb, mongoose and cors
ie.,  'npm i express nodemon body-parser mongodb mongoose cors' inside our project

->Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with resources.
Inorder to connect backend to frontend we need to install cors in node.

->In this project, I used mongodb for the database and the datas included in the database is listed inside the model folder for the reference.
-> In the app.js file, I given all the connections, required middlewares, and the required modules into this file.
-> I opened a folder named 'Routes' and inside the Routes, I opened a file named 'index.js' for the API links and its path.
=>I opened another folder as 'Controllers', inside I created two files - one file contains the program to fetch all the images. Another file contains the program to fetch the images by passing id.
-> In the database file, schema is  the structure of the database that defines the objects in the database. 
-> Inorder to connect to the cluster in mongodb, the IP address is '0.0.0.0/0'.

->The mongodb database name is 'imagegallery'  and the collection name is 'gallery'.



