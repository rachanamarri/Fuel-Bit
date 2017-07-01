var express = require('express');
var app = express();
var api = require('./api');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.use('/api', api);

// views is directory for all template files

// app.get('/', function(request, response) {
//   response.render('pages/index.html');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


