var express = require("express");
var bodyParser = require("body-parser");

var compression = require("compression");

// var mongoose = require('mongoose');
// var passport = require('passport');
// var session = require('express-session');
// var MongoStore = require('connect-mongo');
// var LocalStrategy = require('passport-local').Strategy;

var app = express();
//Mongodb
// mongoose.connect(
//   "mongodb+srv://tech:tech@cluster0.kb9ac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.connect("mongodb://localhost:27017/decypher")
// var db = mongoose.connection;
//If Mongo Error
// db.on('error', console.error.bind(console, 'connection error'));
// app.set("trust proxy", 1);
//Setting up sessions+cookies
//   var sessionConfig = {
//     secret: 'FA1TH',
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl: 'mongodb+srv://tech:tech@cluster0.kb9ac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' }),

//   }
//   app.use(session(sessionConfig));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   var User = require('./models/user');
//   passport.use(new LocalStrategy(User.authenticate()));
//   passport.serializeUser(User.serializeUser());
//   passport.deserializeUser(User.deserializeUser());
//   app.use((req, res, next) => {
//     res.locals.currentUser = req.user;
//     next();
// });
//Setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Compress all HTTP responses
app.use(compression());
// //Setting public directory
app.use(express.static(__dirname + "/Public"));
//   app.use(express.static(__dirname + '/threejs'));

// app.use(express.static(__dirname + '/obfuscated'));

//Setting view engine
app.set("view engine", "pug");
app.set("views", __dirname + "/View");

//Setting routes
var routes = require("./Routes/index");
app.use("/", routes);

//404
app.use((res, req, next) => {
    var err = new Error("File not found!");
    err.status = 404;
    next(err);
});

//Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        title: "Error",
        message: err.message,
        error: {},
    });
});
// DDOS Protection
// const rateLimit = require("express-rate-limit");

// // Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// // see https://expressjs.com/en/guide/behind-proxies.html
// // app.set('trust proxy', 1);

// const apiLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100
// });

// // only apply to requests that begin with /api/
// app.use("/api/", apiLimiter);

// HTTP / 1.1
//Listening
app.listen(process.env.PORT || 5000);

// HTTP / 2
//   var port = 5000
//   var spdy = require('spdy')
//   var path = require('path')
//   var fs = require('fs')

//   var options = {
//     key: fs.readFileSync(__dirname + '/key.pem'),
//     cert:  fs.readFileSync(__dirname + '/cert.pem')
//   }

//Listening
//   spdy
//     .createServer(options, app)
//     .listen(port, (error) => {
//       if (error) {
//         console.error(error)
//         return process.exit(1)
//       } else {
//         console.log('Listening on port: ' + port + '.')
//       }
//     })
