const express = require('express');
require('dotenv').config();
const app = express();

console.log('hello from express');

let timeNow = new Date();

console.log(Date.now());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/time', (req, res) => {
    res.send(timeNow.toISOString());
});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});
