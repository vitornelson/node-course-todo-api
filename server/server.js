var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});



app.listen(3000, ()=> {
    console.log('started on port 3000');
});


// // var newTodo = new Todo({
// //     text: 'Cook dinner'
// // });

// var newTodo = new Todo({
//     text: 'Cook lunch',
//     completed: true,
//     completedAt: 1
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// }, (e) =>{
//     console.log('Unable to save todo')
// });

// //user
// //email - require it - trim it- set type - set min length of 1


// var user = new User({
//     email: 'vitor@exemple.com'

// });

// user.save().then(()=> {
//     console.log('user saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });