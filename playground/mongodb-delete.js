// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('Todoapp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Users').deleteMany({name: 'Abdullah'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndDelete({
    _id: 123
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
