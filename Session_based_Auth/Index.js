const express = require("express");
const sessions = require("express-session");
require("dotenv").config();

const app = express();
app.use(
  sessions({
    secret: process.env.Session_Secret, // secret key for cryptograsphically signing the seesion ID cookie
    resave: true, // Forces saving the session details int he session store(generally taxing)
    saveUninitialized: true, // Saves session details for non initialised sessions as well. Like visiting website for the first time and not logging in. This is generally taxing as well.
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      //   httpOnly: true, for security reasons, this is set to true so that the cookie cannot be accessed by any client side script. This is a good practice to prevent XSS attacks. XSS injects malicious client side js for obtaining sensitive information like cookies. This is a good practice to prevent XSS attacks.
      //   secure: true // Inorder to allow only https access to the cookie, this is set to true. This is a good practice to prevent MITM attacks. MITM(Man-in-the-middle attacks) attacks are when an attacker intercepts the communication between the client and server and can read or modify the data being sent. This is a good practice to prevent MITM attacks.
    },
  }), // Main object that determines the session configuration like session timeout, security, etc.
);

app.use(express.json()); // parses the incoming information to json
app.use(express.urlencoded({ extended: true })); // parses the incming html form data to js object

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const HomeHandler = require("./handlers/home.js"); //import handler
app.get("/", HomeHandler); // register the homapge handler

const LoginHandler = require("./handlers/login.js"); // importsd handler for login page
app.get("/login", LoginHandler); // register login page handler

const processLogin = require("./handlers/process-login.js"); // imports the handler for processing login
app.post("/process-login", processLogin); // register the handler for processing login

const Logout = require("./handlers/logout.js"); // imports the handler for logout
app.get("/logout", Logout); // register the handler for logout
