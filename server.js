// server.js

'use strict';

// dependencies
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')



require('./configs/database');
const app = express();
app.use(cors());
//EJS 
app.set('view engine','ejs')
console.log(__dirname) ; 
// public folder 

// configure the body-parser
// to accept urlencoded bodies
// and json data
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

// register all routers
// all routes are prefixed with /api
app.use('/api', require('./routes/pizza'));

// set the port
const port = parseInt(process.env.PORT, 10) || 8000;

// start the server
const server = app.listen(port, () => {
    console.log(`App is running at: localhost:${server.address().port}`);
});