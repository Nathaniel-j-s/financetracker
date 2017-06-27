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
const connectionString = "postgres://postgres:nathan@localhost/nodesqlproject";
const massiveInstance = massive.connectSync({connectionString : connectionString})
app.set('db', massiveInstance);
const db = app.get('db');

const collection = {
  getInfo: function(req, res, next) {
    console.log(db.characters)
    db.characters.listChars([],
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
}

app.get('/api/financial', collection.getInfo);

// The usual.
app.listen(5000, function() {
   console.log('Listening on port 5000.');
});
