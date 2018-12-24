// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Todoapp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c20066cd301ce849a9dc451')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(results);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Omar'
  }, {
    $set: {
      name: 'Abdullah'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  // client.close();
});
