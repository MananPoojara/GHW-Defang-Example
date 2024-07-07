const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ status: 'OK' });
    const imagePath = path.join(__dirname, '/image.png');
    res.sendFile(imagePath);
});

app.all('/echo', (req, res) => {
    res.json({
        path: req.path,
        method: req.method,
        headers: req.headers,
        args: req.query,
        body: req.body
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
1