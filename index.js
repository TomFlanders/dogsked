var express = require('express');
var app = express();
var fs = require("fs");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Usage: https://dogsked.herokuapp.com/listevents');
})

app.get('/listEvents', function (req, res) {
   fs.readFile(__dirname + "/public/bikesked.json", 'utf8', function (err, data) {
       console.log( "Hit" );
       res.end( data );
   });
})

app.use(function(req,res,next){
  res.type('text/plain');
  res.status(404);
  res.send('Usage: https://dogsked.herokuapp.com/listevents');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
