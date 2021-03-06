const express = require('express');
const welcome = require('./welcome');
const upload = require('./upload');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
//urlencoded({extended: false})

//Welcome module initialization
welcome(app);

//Upload module initialization
upload(app);

//Listening to server / initialization of server
app.listen(port , () => {
    console.log(`node server is running on http://localhost:${port}`);
})