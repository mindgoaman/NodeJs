const { MONGO_DB_URL } = require('../constants/DBConstants');
const mongoose = require('mongoose');
mongoose.connect(MONGO_DB_URL)