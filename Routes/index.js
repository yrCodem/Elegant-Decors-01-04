var express = require("express");
var router = express.Router();
// var mongoose = require('mongoose');
// var passport = require('passport');
// var Message = require('../models/message.js');
// var User = require('../models/user.js');
// GET TO GET THE PAGE
router.get("/home", (req, res) => {
    return res.render("index", { title: "Home" });
});
//RENDER - TO GET THE PAGE
// router.get("/contact", (req, res) => {
//     return res.render("contact", { title: "Contact" });
// });
//POST TO DISPLAY
// router.post("/contact", (req, res) => {
//   Message.addMessage(req.body.name, req.body.email, req.body.phone, req.body.message, (err)=>
//   {
//     if (err) {
//       return res.render("contact", { title: "Contact", error: err });
//     }
//     else {
//       return res.render("contact", { title: "Contact", error: "Message sent successfully" });
//     }
//   })
// });

// router.get("/about", (req, res) => {
//     return res.render("aboutme", { title: "About Me"});
// });

// router.get("/project", (req, res) => {
//   return res.render("project", { title: "Projects" });
// });

// router.get("/admin", (req, res) => {
//   if (req.user) {
//     Message.find().exec(function(err, messages){
//       return res.render("admin", { title: "Admin", messages: messages});
//     })
//   }
//   else {
//     return res.render("admin-login", { title: "Admin-login" });
//   }
// });

// router.post('/admin', (req, res, next) => {
//     passport.authenticate('local', function(err, user) {
//       if (err) {
//         return res.render('admin-login', { title: 'Admin-login', error : err.message });
//       }
//       if (!user) {
//         return res.render('admin-login', { title: 'Admin-login', error : 'Wrong username/password.' });
//       }
//       req.logIn(user, function(err) {
//         return res.redirect('/admin');
//       });
//     })(req, res, next);
// });

// router.get('/admin/register', (req, res, next) => {
//   if (req.user) {
//     return res.redirect('/admin')
//   }
//   else {
//     return res.render('register', {title: "Register"})
//   }
// });

// router.post('/admin/register', (req, res, next) => {
//   User.register(new User({
//     username: req.body.username,
//   }), req.body.password, function(err, user) {
//     if (err) {
//       return res.render('register', {title: "Register", error: err})
//     }
//     else {
//       return res.render('register', {title: "Register", error: 'User registered'})
//     }
//   }
//   )
// })

// router.get('/logout', (req, res, next) => {
//     req.logout();
//     res.redirect('/admin');
// });

module.exports = router;