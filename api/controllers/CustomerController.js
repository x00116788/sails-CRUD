/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// var http = require('http');

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
					if (person.length === 0){
						res.send('not found');
					}
				if (err) return new Error(err);
				res.json(person);					
        });
		}
    catch(err){
		res.end('An error occured');
    };
  },

	joker: function(req, res){

		try {
		Customer.findOne(req.param('id'), function(err, person){
        	if (err) return Error(err);
			else{
			JokerService.joker(person).then(res.end); 
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
