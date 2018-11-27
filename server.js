
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('/dist/FirstApp'));
// app.use(express.static(__dirname + '/dist/<RajApp-Comp>'));

// app.get('/*', function(req,res) {    
// res.sendFile(path.join(__dirname+'/dist/<RajApp-Comp>/index.html'));
// });

app.get('/*all', function(req, res) {
  res.sendFile(path.join('/dist/FirstApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
