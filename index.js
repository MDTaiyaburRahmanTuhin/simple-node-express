const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('wow i love js Hello from my first ever node')
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '0178888888' },
]
app.get('/users', (req, res) => {
    const search = req.query.search
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('lisening to port', port);
});