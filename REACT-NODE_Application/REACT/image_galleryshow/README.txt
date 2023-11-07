##Installation:

Open a new folder and inside opened another folder open command promp window.
->type 'npm install create-react-app -g'
then hit enter. after installation, type the project name with the command 
ie.,  'create-react-app  image-galleryshow'
->then hit enter. It will start installing and starting. After completion, we can see the project folder and every inbuilt files inside it.

->Open visual studio code editor - then open this project folder.
->In the terminal, type 'npm start'. After successful completion, automatically opens the default browser at port 3000.
->Default port of React App is '3000'.



-> By default, index.js contains the root link and app.js is the part where the things are pushed upon.
->In the src folder, create a new folder named 'Components' and inside this folder, open a file - 'Route.js'.
-> In the index.js file , import this Route.js file and the change the path from app.js to Route.js, so that the things are pushed upon to the Route.js file.
->In the Route.js , wee write the route path of the program.


-> Open multiple terminal in visual studio code and write : 'npm i react-router-dom'
->Hit enter. After installation, we can see the latest version of the same is installed in the package.json

->We need to install 'axios'  for calling the API's.
ie.,   'npm i axios' . 


->Open a new file named ImageGallery.json, which is the page I created for Image Gallery project.
->The View part is written inside the render part of the page.

->Import axios to ImageGallery.js file.
-> We have to write the url, method and headers inside the axios inorder to call the APIs.

->For this project, I used modals. So I need to install react-modal  and react-responsive-carousel.

-> Through API, I fetched the images from the backend for the view.
->I created two web pages. First page (imageGallery.js) contains fetched images as a grid of thumbnails. When clicked, the page will navigate with a payload of id value to next page(image.js) to show the full sized image with title and description.
->In that page , there is a button(image Collection). When clicked ,it opens the image collections with corresponding title and description using navigation buttons  
->For performing navigation of pages with params, created a file named nav.js,  inside wrote navHook=(Component)=>navigate currently affected props.

->Faced some fetching problems using query-string, finally I splitted the methods, and  get the results.