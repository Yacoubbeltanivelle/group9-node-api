const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/users', (rep, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});