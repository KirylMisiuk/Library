const mongoose = require('mongoose');

module.exports = async () => {
  mongoose.connect('mongodb://kiryl:IINFKDYT@127.0.0.1:27017/library', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch((e) => console.log('problem with connection ', e));
};