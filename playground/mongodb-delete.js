// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


// Version 3: Use client instead of db in the function below
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Successfully connected to MongoDB server!');

  //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch baby'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch baby'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Do some shit.'}).then((result) => {
    console.log(result);
  });

  //db.close() //client.close(); in version 3 of Mongo DB
});
