var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 3));
    res.send(doc);
  }, (e) => {
    console.log('Unsuccessful save to database', e)
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on Port 3000');
});

module.exports = {app};
