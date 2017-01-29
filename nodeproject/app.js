var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));
 
app.set('views', './src/views');
app.set('view engine', 'ejs');
 
app.get('/', function(req, res){
        // res.send('HAI!');
    res.render('index', { list: ['first', 'second', 'third']});
});

app.get('/routing', function(req, res){
    res.send('Routes 4 lyfe!');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port); 
})