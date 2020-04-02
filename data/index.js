const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://root:example@mongo:27017/idp?authSource=admin',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

  } catch (e) {
    console.trace(e);
  }
})();

const Ads = require('./models/Ads.js');
const Users = require('./models/Users.js');

module.exports = {
  Ads,
  Users
}