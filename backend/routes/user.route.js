const express = require('express');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const conn = require('../DB');

// Require User model in our routes module
let User = require('../models/user');


mongoose.connect(conn.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
	() => {console.log('Database is connected!') },
	err => { console.log('Can not connect to the database'+ err)}
);


userRoutes.route('/add').post(function (req, res) {
	let user = new User(req.body);
  	user.save().then(user => {
		res.status(200).json({'user': 'user in added successfully'});
	})
    .catch(err => {
		res.status(400).send("unable to save to database");
    });
});


userRoutes.route('/').get(function (req, res) {
	User.find(function (err, users){
		if(err){
			console.log('error', err);
		}else {
			res.json(users);
		}
  	});
});

userRoutes.route('/edit/:id').get(function (req, res) {
	let id = req.params.id;
	User.findById(id, function (err, user){
		res.json(user);
	});
});

userRoutes.route('/update/:id').put(function (req, res) {
	User.findById(req.params.id, function(err, user) {
		if (!user)
			res.status(400).send('Could not load Document');
		else {
			user.user_ID = req.body.user_ID;
			user.user_name = req.body.user_name;

			user.save().then(user => {
				res.json('Update complete');
			}).catch(err => {
				res.status(400).send("unable to update the database");
			});
		}
	});
});

userRoutes.route('/delete/:id').delete(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
		if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;