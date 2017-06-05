//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var user = {name: 'vitor', age: 28};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    //Insert new doc into users(name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Vitor',
    //     age: 28,
    //     location: 'Brasilia'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert users', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
    console.log('connection close');
});