const express = require('express');
const mysql = require('mysql');
const path = require('path');

// create database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : '',
      database : 'jokes'
    }
});

// create express app
const app = express();
app.use(express.static('public'));

// sending index page as a response to default path
app.get('/', function(req, res){
    res.render(path.join(__dirname + '/public/index.html'));
});

// sending jokes 
app.get('/jokes', (req, res) => {
    knex.select('setup', 'punchline').from('jokes').then((results) => {
        res.send(results);
        res.end();
    });
});

// connection listener
app.listen(3000, () => {
    console.log("Server starting on port 3000");
});