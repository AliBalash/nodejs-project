const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');


//  Initialize
const app = express();
require('./database')


//  Setting
app.engine('ejs' , engine);
app.set('views' , path.join(__dirname , 'views'))
app.set('view engine' , 'ejs');
app.set('port' , process.env.PORT || 3000);


//  Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended : true}))

//  Routes
const routes = require('./routes/index')
app.use('/' , routes)

//  Starting the server 
app.listen(app.get('port') , ()=>{

    console.log('Server on port' , app.get('port'));

})