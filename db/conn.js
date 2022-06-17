require('dotenv').config();

const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(`${process.env.DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to the Database!'))


module.exports = connectToDB;


