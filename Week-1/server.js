const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const route = require('./Api/index');
process.env.DATABASE = "mongodb://localhost:27017/test";
app.use('/', route);

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug');

const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },(err) => {
        if(!err) {
            console.log('Successful Connection');
        } else {
            console.log(err);
        }
    });
}
connectDB();

app.use('/api/userModel', require('./Api/index'));
const port =process.env.PORT || 7700;

app.listen(port, () => console.log('Server started'));
app.set(port,process.env.PORT || 7700);

module.exports = app;