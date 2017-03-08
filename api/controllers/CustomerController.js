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
						res.json(person);
					}
						});
        }
    catch(err){
		res.end('invalid details entered');
    };
  },

	joker: function(req, res){
		try{
			if(req.param('id')){
				JokerService.getJoker(req.param('id'))
				.then((joker) =>{
					res.json(201, JSON.parse(joker));
				})
				.catch((non) => {
				res.json(404,{error: 'id ' + req.param('id') + ' does not exist'})
				});
			}
			else{
				res.json(400, 'No Customer ID entered');			
			}
		}catch(err){

			console.log('err' + err);
		}

	}

};
