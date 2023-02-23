const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/prj5' )
.then(() => console.log('Connect To Mongoodb')).catch(() => console.log('Not Connect To Mongodb '))

