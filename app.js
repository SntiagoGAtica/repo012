const express = require('express');
const app = express();
const path = require('path');
const PORT =8080
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen (process.env.PORT || 8080, function ()  { 
    console.log ('servidor en puerto 8080');})