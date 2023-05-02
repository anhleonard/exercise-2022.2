const express = require('express');
const app = express();
const mongoose = require("mongoose");
const allRoutes = require('./routes/routes.js');
let cors = require('cors');
const bodyParser = require('body-parser');
let methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors());

app.use(express.json());


app.use('/', allRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/CRUD');

let db = mongoose.connection;
//bắt sự kiện error
db.on ('error', function(err) {
    if(err) console.log(err);
})
//bắt sk open
db.once('open', function() {
    console.log('Connect successfully!');
    console.log('http://localhost:8000');
})


app.listen(8000);
