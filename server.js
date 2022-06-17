require('dotenv').config();
require('./db/conn');


const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/')
const port = process.env.PORT || 3333
const connectToDB = require('./db/conn')

connectToDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)



app.listen(port, () => console.log(`App running on port ${port}`));