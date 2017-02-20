/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var http = require('http');

module.exports = {
	create: function (req, res) {
        try{
            Customer.create(req.allParams(),function(err,person){
							res.json('created sucessfully ' + person.first_name);
						});
        }
    catch(err){
		res.end('invalid details entered');
    };
  },

	update: function (req, res){
		var options = {};
		var id = req.param('id');
		options = _.merge({}, req.params.all(), req.body);
		try{
				Customer.update(id,options, function(err, person){
				if (err) return new Error(err);
				res.json(person);					
        });
		}
    catch(err){
		res.end('An error occured');
    };
  },

	joker: function(req, res, next){

		try {
		Customer.findOne(req.param('id'), function(err, person){
        	if (err) return Error(err);
			else{
				var first = (person.first_name);
				var	last = (person.last_name);
				http.get('http://api.icndb.com/jokes/random?firstName=' +first+ '&lastName=' +last, (chunk) =>{
					chunk.on('data', (jokeReturned) =>{
					res.end(JSON.parse(jokeReturned)['value'].joke);
					})
				});
			}
		})
		} catch (err) {
			return new Error(err);
		};
	},

  delete: function(req, res){
	var id = req.param('id', null);
		try{
				Customer.findOne(id).done(function(err, person){
						person.destroy();
						res.end('customer ' + id + 'deleted');
				})

	}
	catch(err){
		return new Error(err);
	};
  }   

};
