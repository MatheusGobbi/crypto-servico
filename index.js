const express = require('express');
const app = express();

const { getTopList } = require('./functions/getTopList');

app.get('/getTopList', getTopList);

app.get('/', function (req, res) {
    console.log('dasdadfas')
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Salve salve');
});