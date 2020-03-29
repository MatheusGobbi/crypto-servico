const express = require('express');
const app = express();

const { getTopList } = require('./functions/getTopList');

const PORT = process.env.PORT || 3000;

app.get('/getTopList', getTopList);

app.get('/', function (req, res) {
    console.log('dasdadfas')
    res.send('Hello World!');
});

app.listen(PORT, function () {
    console.log('Salve salve', PORT);
});