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
