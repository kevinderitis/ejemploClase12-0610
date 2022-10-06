const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Todo ok')
})

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log('Server running'));
server.on('error', error => console.log(error));