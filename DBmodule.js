const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workshop', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {

});

exports.saveInput = (input) => {
    input.save(() => {
        console.log("TACK")
    })
}