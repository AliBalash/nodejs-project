const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use('local-signup' , new LocalStrategy({
    usernameField : 'email' ,
    passwordField : 'password',
    passReqToCallback : true
} , (req , email , password , done)=>{
    
}))