
var chai = require('chai');
var nock = require('nock');
var request = require('request');

//create new customer with id 11

describe('#create()', function() {
	it('should create a customer', function (done) {
  		nock('http://localhost:1337/customer?id=11&first_name=me&last_name=u&birth_date=1998-10-10')
		.post('/request')
		.reply(200,'customer created')
        done();
  	});
});