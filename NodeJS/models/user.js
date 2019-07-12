const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
	user_ID: {
		type: Number
  },
  user_name: {
		type: String
  },
},{
	collection: 'user'
});

module.exports = mongoose.model('User', User);