# Caravan-Code
Code and components for Caravan

CSCI 3308 Software Development - Fall 2019
University Of Colorado 

Project Name: Caravan

To run this project:
1. App is deployable on the Heroku Server at https://dashboard.heroku.com/apps/caravan-cu/settings
2. This app can be deployed locally in your web broswer:
    a. download the code from the git repository: https://github.com/willfrancisgit/Caravan-Code.git
    b. using the command line, navigate to the Caravan-Code -> Caravan-Code-master
    c. In the server.js make sure that the Heroku server information is commented out and uncomment the local hosting code.
    d. in the command line type "node server.js"
    e. in your web browser address bar type localhost:3000/login to run the hompage


Features of this app:
1.     Login page
This page allow users to both register a new account and login to their personal account. 
User can user their email as the account number to register a new account, and create passwords. 
For login, they need to enter their account number and password to access their home page. 
For all the users they can create only one account for one email address. This page allow user to access 
their account and protected user’s personal data. This login page will be the first page to access when 
customers use Caravan.
 
2. 	Profile customization
The Profile allows users to add descriptions about themselves and it is a public page for other users to view. 
In the profile page, users can edit and display their name, gender, age, type of climbing they do, 
experience Level, equipment they have, available schedule, and a short description about their personality and hobbies. 
This page is helping users who want to find a workout partner. This Profile page will help customers to attract 
potential workout partners, giving users the opportunity to gain change to chat with other users. 
The Profile page will be the first information user can view about other users.

3.  User Matching
The purpose of this feature was to connect users in the app based off of each user's preferences and profile customization 
features. Each custom profile section is assigned a boolean value which is then quatified with values. Each profile is compared
to others users and this page will present the user with other user pages based off of closesness in numeric values.


Web Service Design:
For our application, Node.js will process the HTTP request. Using REST API, the clients will POST, GET, PUT, 
and DELETE data regarding the account’s login and profile information from the database. When certain criteria 
are searched by the user, other users’ profiles aligning with those criteria will be retrieved and displayed for 
the user. The Web Services will also handle login, account and profile updates, account deletes, and buddy requests. We 
originally wrote the front-end in HTML and then converted it into PUG using an online converter so that we could use the 
javascript labs as a better reference.


Database:
Server created using PostgreSQL. Five tables created. One table for each section in the user's profile customization.






