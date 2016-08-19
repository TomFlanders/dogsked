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
  res.send('Usage: Add "/listEvents" to the URL');
})

app.get('/listEvents', function (req, res) {
   fs.readFile(__dirname + "/public/bikesked.json", 'utf8', function (err, data) {
       console.log( "Hit" );
       res.end( data );
   });
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
