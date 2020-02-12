const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

const routes = require('./routes/index');
app.use('/', routes);

app.use(function(req,res,next){
    const err = new Error('Dosya Bulunamadı');
    err.status = 404;
    next(err);
});

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        status: err.status,
        error: {}
    });
});

app.listen(process.env.PORT || 8000, function(){
    console.log('Your node js server is running');
});