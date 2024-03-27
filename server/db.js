const mongoose = require('mongoose')

module.exports = function () {
    // mongoose.connect('mongodb://127.0.0.1:27017/modevco')
    mongoose.connect('mongodb+srv://modevco:1234alikhan@atlascluster.tirys06.mongodb.net/modevco')
    .then(() => {
        console.log('Mongo ishladi');
    }).catch((err) => {
        console.log('Mongoda hatolik bor', err);
    })
      
}

 