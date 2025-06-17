
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