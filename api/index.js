const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const user = require('./components/user/network'); 

const app  = express();

app.use(bodyParser.json());

//ROUTER
app.use('/api/user', user)

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});