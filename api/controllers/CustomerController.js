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
							res.end('created sucessfully ' + person.toString());
						});

    //  res.json(req.allParams());

        }
    catch(err){
			return new Error(err);
    };
  },

	joker: function(req, res){
		var first = req.param('first');
		var last = req.param('last');

		res.redirect('http://api.icndb.com/jokes/random?firstName=' +first + '&lastName=' + last);
	},

  update: function(req, res){
      //res.redirect('http://api.icndb.com/jokes/random?firstName=John&lastName=adams');
      return res.send('Update Completed');

  },

  delete: function(req, res){
		var id = req.param('id', null);
		try{
				Customer.findOne(id).done(function(err, person){
						person.destroy();
						res.end('customer ' + id + 'deleted');
				})
		//return res.send('Customer List');
	}
	catch(err){
		return new Error(err);
	};
      //return res.send('Customer deleted');
  },

  // display: function(req, res){
	//
	//
  // }

};
