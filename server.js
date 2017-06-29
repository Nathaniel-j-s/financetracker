// Dependencies
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');

// Initializing app and dependencies.
const app = express();
app.use(express.static(__dirname + './dist'));
app.use(bodyParser.json());

// Massive setup
const connectionString = "postgres://postgres:nathan@localhost/personalfinance";
const massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);
const db = app.get('db');

const mainCtrl = {
  getInfo: function(req, res, next) {
    console.log('Yo');
    db.datam.getInfo([],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
}

app.get('/api/financial', mainCtrl.getInfo);

// The usual.
app.listen(5000, function() {
   console.log('Listening on port 5000.');
});
