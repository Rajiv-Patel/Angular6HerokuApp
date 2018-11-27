
//Install express server
const express = require('express');
const path = require('path');
//const routes = require("./routes");
const app = express();



// Serve only the static files form the dist directory
app.use(express.static('./dist/firstapp'));
// app.use(express.static(__dirname + '/dist/<RajApp-Comp>'));
//app.use("/",routes);

// app.get('/*', function(req,res) {    
// res.sendFile(path.join(__dirname+'/dist/<RajApp-Comp>/index.html'));
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/firstapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


