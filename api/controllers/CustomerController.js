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
							if (!person){
						res.send(404, ' invalid input/s');
					}else{
						res.json('created sucessfully ' + person.first_name);
					}
							
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
				Customer.findOne(id, function (e,found){
					if (found){
						Customer.update(id,options, function(err, person){
							if (!person){
							res.send(' Failed');
							}else{
								res.json(person);		
							}
						if (err) return new Error(err);
       		 });
					}else{
							res.send(404, ' No Customer Found ')
					}
				})				
		}
    catch(err){
		res.end('An error occured');
    };
  },

	joker: function(req, res){

	 try {
			Customer.findOne(req.param('id'), function(err, person){
        if (person == null)res.send(404, 'No Customer Found');
				JokerService.joker(person).then((joke_obj) => {
					 var parsedJoke = 	JSON.parse(joke_obj)['value'].joke;
					var	customer_joke = parsedJoke.replace('Chuck Norris', person.first_name + " " + person.last_name);
          return res.json(customer_joke); 
	
				}).catch((error) => {
								console.log(error)
								return res.json(error);
					 });
			})
		}
	 catch (err) {
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
