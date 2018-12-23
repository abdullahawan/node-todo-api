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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c2000a1d301ce849a9dc2d3')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 3));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos Count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Abdullah'}).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs, undefined, 3));
  }, (err) => {
    console.log('Unable to count Users', err);
  });

  // client.close();
});
