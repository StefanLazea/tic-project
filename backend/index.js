const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// app.use('/', express.static('../front-end/build'));

app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`App started on http://localhost:${process.env.PORT}/api`);
});