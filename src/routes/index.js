const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res, nex) => {
    res.render('index')
})




router.get('/singup', (req, res, next) => {
    res.render('singup')
})

router.post('/singup', passport.authenticate('local-signup' , {
    successRedirect : '/profile',
    failureRedirect  : '/singup',
    passReqToCallback : true
}));

router.get('/profile' , (req , res , next) =>{
    res.render('profile')
})


router.get('/singin', (req, res, next) => {

})


router.post('/singin', (req, res, next) => {
    console.log(req.body)

})
module.exports = router;