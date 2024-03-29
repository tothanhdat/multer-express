const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded());

app.use('/user', userRouter);

// app.get('/users', (req, res) => {
//     res.render('users', { users, error: false });
// })

// app.post('/add-user', (req, res) => {
//     const { username, password } = req.body;
//     let isExist = users.findIndex(user => Object.is(username.toString(), user.username.toString()));
//     if (isExist !== -1)
//         return res.render('users', { error: true, message: 'user_exist' })
//     users.push({ username, password });
//     return res.render('users', { error: false, users })
// })
// app.get('/user/delete/:username', (req, res) => {
//     const { username } = req.params;
//     const indexFinded = users.findIndex(user => Object.is(username.toString(), user.username.toString()))
//     users.splice(indexFinded, 1)
//     res.redirect('/users')
// })

app.listen(3000, () => console.log(`SERVER STARTED AT PORT 3000`));
