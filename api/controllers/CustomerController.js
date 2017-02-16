/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var app = sails.hooks.http.express;

module.exports = {
	create: function (req, res) {
        try{
            Customer.create(req.allParams(),function(err,person){
							if (err) return res.send(err,500);
							res.json('created sucessfully ' + person.toString());
						});
        }
    catch(err){
			return new Error(err);
    };
  },

	joker: function(req, res, next){

		try {
		Customer.findOne(req.param('id'), function(err, person){
				// if (person === undefined) return res.notFound();
        if (err) return Error(err);
				else{

					var first = (person.first_name);
					var	last = (person.last_name);
					res.redirect('http://api.icndb.com/jokes/random?firstName=' +first + '&lastName=' + last);
					res.json(person);
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
      

};
