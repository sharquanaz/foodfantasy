var express= require('express');
var router=express.Router();

var signup= require('./api/signin/signup');
// var login= require('./api/signin/login');
// var contact= require('./api/signin/contact');

router.post('/signup',signup.addData);
// router.post('/login',login.getData);
// router.post('/contact',contact.getData);
module.exports=router;