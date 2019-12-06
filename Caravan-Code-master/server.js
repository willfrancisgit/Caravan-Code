/***********************
 
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pug          - A view engine for dynamically rendering HTML pages
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database

***********************/

const express = require('express'); // Add the express framework has been added
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool has been added
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies

const pug = require('pug'); // Add the 'pug' view engine

const compiledFunction = pug.compileFile('./views/pages/login.pug');

//Create Database Connection
const pgp = require('pg-promise')();


/**********************
  
  Database Connection information

  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!

**********************/


taken from Heroku server information
const dbConfig = {
	host: 'ec2-54-83-201-84.compute-1.amazonaws.com',
	port: 5432,
	database: 'd2a5sb6n9aknkq',
	user: 'hqgxkojofdagea',
	password: '0af0023a8d186e31990e1a1eee7c8ba7ca84f35194ff2785e46aaf9d340920db'
};

// // local hosting
// const dbConfig = {
//   host: 'localhost',
//   port: 5432,
//   database: 'caravan',
//   user: 'sean',
//   password: ''
// };





let db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/')); // This line is necessary for us to use relative paths and access our resources directory

//login
app.get('/login', function(req, res) {
  res.render('../views/pages/login',{
    local_css:"caravan_signin.css",
    my_title:"Login Page"
  });
});

// registration page
app.get('/register', function(req, res) {
  // console.log("test")
  res.render('../views/pages/profile',{
    my_title:"Registration Page"
  });
});

// insert data from the table
app.post('/submit_form', function(req,res) {
  var insert_profile = 'INSERT INTO profile_info(user_name,password,);';
  //puts the results of the query into a batch.
  db.task(query_email, task =>{
    return task.batch([
      task.any(query_email),
    ]);
  })
  // stores the restults of the batch into an array we can use as index.
  .then(data => {
    console.log(data)
    // res.render('pages/test',{
    //   my_title:"Testing"
    // })
  })
  .catch(error => {
      // display error message in case an error
          console.log('error', error);
          res.render('../views/pages/profile',{
        my_title: "ERROR",
      })
  });
});








// pulls data from the table
app.post('/submit_form', function(req,res) {
  var query_email = 'SELECT user_name FROM profile_info;';
   var query_password = 'SELECT password FROM profile_info;';
  //puts the results of the query into a batch.
  db.task(query_email, task =>{
    return task.batch([
      task.any(query_email),
      task.any(query_password),
    ]);
  })
  // stores the restults of the batch into an array we can use as index.
  .then(data => {
    console.log(data)
    // res.render('pages/test',{
    //   my_title:"Testing"
    // })
  })
  .catch(error => {
      // display error message in case an error
          console.log('error', error);
          res.render('../views/pages/profile',{
        my_title: "ERROR",
      })
  });
});









/***********************
***********************/

app.listen(3000);
console.log('3000 is the magic port');








