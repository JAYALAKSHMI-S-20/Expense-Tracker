
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const {readdirSync} = require('fs')
const transactions = require('../backend/routes/transactions')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN stack');
});

//app.use('/books',transactions);


// const server = () => {
//     //db()
//     app.listen(PORT, () => {
//         console.log('listening to port:', PORT)
//     })
// }

// server()

mongoose
    .connect(
    "mongodb://localhost:27017/mern",
    )
    .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });
    });