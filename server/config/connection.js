const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://perrywayne39:U10M7DkAPMsvOR55@cluster0.y00szmj.mongodb.net/redux-store-db' || 'mongodb://127.0.0.1:27017/mern-shopping');

module.exports = mongoose.connection;
