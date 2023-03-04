const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session')

//  Initialize
const app = express();
require('./database');
require('./passport/local-auth')


//  Setting
app.engine('ejs' , engine);
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'ejs');
app.set('port' , process.env.PORT || 3000);


//  Middlewares
app.use(morgan('dev'))
app.use(session({
    secret : 'randomSecret',
    resave : false,
    saveUninitialized : false
}))
app.use(express.urlencoded({extended : true}));
app.use(passport.initialize());
app.use(passport.session());

//  Routes
const routes = require('./routes/index')
app.use('/' , routes)

//  Starting the server 
app.listen(app.get('port') , ()=>{

    console.log('Server on port' , app.get('port'));

})