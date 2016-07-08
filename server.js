var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000) );

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'public', 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));

/**
app.get('/', function(req, res) {
  res.render('index.ejs');
});
**/

app.get('/*', function(req, res){
  res.render(__dirname + '/public/views/index.ejs');
});

app.listen(app.get('port'), function() {
  console.log('SERVER RUNNING... PORT: ' + app.get('port'));
})

