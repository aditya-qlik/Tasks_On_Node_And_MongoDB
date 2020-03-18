const mongoose = require('mongoose');
require('./models/Users');
require('dotenv').config({path: 'variables.env'});

const connectDB = async () => {
    await mongoose.connect(`${process.env.DATABASE}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (err) => {
        if (!err) {
            console.log('Successful Connection');
        } else {
            console.log(err);
        }
    });
};

connectDB();
mongoose.Promise = global.Promise;


const app = require('./app.js');

app.set('port', process.env.PORT || 7700);
const server = app.listen(app.get('port'), () => {
    console.log( `Express running → PORT ${server.address().port}` );
});