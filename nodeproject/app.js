var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));
 
app.set('views', './src/views');
app.set('view engine', 'ejs');
 
eventRouter.route('/')
    .get(function(req, res){
        res.send('Hello events');
    })
    
eventRouter.route('/event')
    .get(function(req, res){
        res.send('Hello single event');
    })
    
app.use('/Events', eventRouter)
    
 
app.get('/', function(req, res){
        // res.send('HAI!');
    res.render('index', { 
        list: ['first', 'second', 'third'],
        nav: [{Link: 'Services', Text: 'Services'},
        {Link: 'Portfolio', Text: 'Portfolio'},
        {Link: 'About', Text: 'About'},
        {Link: 'Contact', Text: 'Contact'},
        {Link: 'Events', Text: 'Events'}
        ]
    });
});

app.get('/routing', function(req, res){
    res.send('Routes 4 lyfe!');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port); 
})