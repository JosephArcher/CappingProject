var express = require('express');
var router = express.Router();

router.route('/posts')
	// Returns all posts
	.get(function (req, res){
		// temp solution cause no database
		res.send({message: 'TODO Return all post'});
	})

	.post(function (req, res){
		res.send({message: 'TODO create a new post'});
	});

router.route('/posts/:id')

	//return a particular post
	.get(function (req , res) {
		res.send({messsage: 'TODO return post with ID' + req.params.id});
	})

	//Update existing post
	.put(function (req, res) {
		res.send({message:'TODO modify post with ID' + req.params.id});
	})
	.delete(function (req, res) {
		res.send({message:'TODO modify post with ID' + req.params.id});
	});

	


module.exports = router;