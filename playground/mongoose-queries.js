const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user');

var id = '5a993c6e9d0b21144fe757ea';

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos',todos);

// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todos',todo);
// });

// Todo.findById(id).then((todo) => {
// if(!todo)
// {
//    return console.log('Id not found');
// }
// console.log('todos',todo)

// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if(!user)
    {
        return console.log('Id not found');
    }
    console.log('User',user);
}).catch((e) => {
    console.log(e);
});



