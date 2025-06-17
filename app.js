
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10); // ID en entier
    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users.splice(index, 1); // Supprime l'user du tableau
        res.status(200).send(`User ${userId} deleted`);
    } else {
        res.status(404).send('User not found');
    }
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/users', (rep, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);

  
const users = [{ id: 1, name: 'John Doe' },{ id: 2, name: 'Jane Doe' }];
app.get('/users',(req, res) => {
    res.json(users);
});

