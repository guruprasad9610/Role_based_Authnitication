const express = require('express')
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/routes');
mongoose.set('strictQuery', false);

const cors = require('cors');

app.use(cors('http://localhost:4200/'));

const connectionString = 'mongodb://127.0.0.1:27017:27017//meanstack-LOGIN';
async function connectToDatabase() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
}

connectToDatabase();

app.listen(9002,function check(error)
{
    if(error)
    console.log("Error....!!!!");
    else
    console.log("Started....!!!!");
});


app.use(express.json());
app.use(routes);

// http://localhost:9002/user/create or login