const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9999;

app.use(cors());


app.get('/endpoint', (req, res) => {
    fs.readFile(path.join(__dirname, '/src/api/endpoint.json'), (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});


app.listen(PORT, () => console.log('listening: ', PORT));
