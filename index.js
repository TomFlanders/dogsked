var express = require('express');
var app = express();
var fs = require("fs");

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.disable('x-powered-by');

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.type('text/plain');
  res.send('Usage: https://dogsked.herokuapp.com/listEvents or https://dogsked.herokuapp.com/listRides https://dogsked.herokuapp.com/listOther');
})

app.get('/listEvents', function (req, res) {
   fs.readFile(__dirname + "/public/bikesked.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/listRides', function (req, res) {
   fs.readFile(__dirname + "/public/ridesked.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/listOther', function (req, res) {
   fs.readFile(__dirname + "/public/othersked.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/listCars', function (req, res) {
   fs.readFile(__dirname + "/public/racesked.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.get('/randie', function (req, res) {
var data2 = "";
for(i=0;i<5;i++)
{
  var data = "";
  var nouns = ["Jane","Hubert"]
  var verbs = ["sees","saw","swam"];
  var punct = [".",".",".","!"];
  var nounno = getRandomInt(0,nouns.length)
  var verbno = getRandomInt(0,verbs.length)
  var punctno = getRandomInt(0,punct.length)
  data = data + nouns[nounno] + " ";
    data = data + verbs[verbno];
    data = data + punct[punctno];
    data = data + "\n";
    data2 = data2 + data;
}
  res.send( data2 );
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

app.use(function(req,res,next){
  res.type('text/plain');
  res.status(404);
  res.send('Usage: https://dogsked.herokuapp.com/listevents');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
