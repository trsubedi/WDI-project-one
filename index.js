//index.js for backend
var express = require("express"),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    // cookieParser = require('cookie-parser'),
    app = express(),
    db = require("./models");


app.use(express.static(__dirname + "/public"));
app.use("/vendor", express.static(__dirname+"/vendor"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



db.User.find({}, function(err, foundUsers){
  if(err){
    return console.log(err);
  }
});

/*
 * create our session
 */
app.use(
  session({
    secret: 'secret-private-key',
    resave: false,
    saveUninitialized: true
  })
);

app.use(function (req, res, next) {
  // login a user
  req.login = function (user) {
    req.session.userId = user._id;
  };
  // find the current user
  req.currentUser = function (cb) {
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  // logout the current user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }
  // call the next middleware in the stack
  next(); 
});

/*
 * Routes
 */

// where the user submits the sign-up form
app.post(["/signup", "/users"], function signup(req, res) {
  // grab the user from the params
  var user = req.body.user;
  // pull out their email & password
  var email = user.email;
  var password = user.password;
  // create the new user
  db.User.createSecure(email, password, function() {
    res.send(email + " is registered!\n");
  });
});


app.post(["/login", "/sessions"], function login(req, res){
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function(err, user){
    if (err === null) {
      req.login(user);
      res.redirect("/");
    } else {
      res.send(err);
    }
  });
});

app.get("/", function(req, res){
  // res.send("login to play")
  // find current user
  req.currentUser(function(err, user) {
    // render page with found user (but one may not be found...)
    res.render('index', {user: user});
  })
});

app.post(["/sessions", "/logout"], function(req,res){
  req.logout();
  res.redirect("/");
  });


app.get("/leaderboard", function(req, res){
  res.render('leaderboard');
});

 /*
 * Server
 */
 // var listener = app.listen(process.env.PORT || 3000);

var listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});