const mongoose = require('mongoose');
const URL = process.env.URL;

mongoose.connect(URL, {
    useNewUrlParser: true
}).then(() => {
    console.log('connected...');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;