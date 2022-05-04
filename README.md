# The Jokes Site
Site displaying random jokes at the click of a button.
Installation instructions
Database:
1. Install [XAMPP](https://www.apachefriends.org/download.html) (or use another MySQL database management system)
2. Launch XAMPP and turn on the Apache and MySQL modules
3. Press "admin" button next to MySQL module or go to http://localhost/phpmyadmin/
4. Go to import tab, choose jokes.sql file from database folder and press "Go" at the bottom right of the page to import the database

Site:
1. Open the repository in external editor (I've used Visual Studio Code)
2. Make sure the database connection details are correct. They should be good by default but I can't guarantee it 100%, maybe the port will be different. Database connection details are located between 6th and 15th lines of code in app.js file.
3. Open terminal and type npm install
4. After the installation finishes type node app.js to start the server
5. Go to http://localhost:3000/
6. Press left mouse button to display jokes
