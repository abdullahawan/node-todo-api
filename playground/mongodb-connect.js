// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Todoapp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do #3',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined, 3));
  // });


  db.collection('Users').insertOne({
    name: 'Abdullah',
    age: 21,
    location: 'Michigan'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
  client.close();
});
