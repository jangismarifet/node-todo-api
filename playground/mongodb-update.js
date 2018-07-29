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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b5d1f1390446e05553611da')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b5d096662a4210a0d64a4f1')
  },{
    $set: {
      name: 'Bob'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close() //client.close(); in version 3 of Mongo DB
});
