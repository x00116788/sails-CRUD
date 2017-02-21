
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

describe('#delete()', function() {
	it('should delete a customer', function (done) {
  		nock('http://localhost:1337/customer?id=4')
		.delete('/request')
		.reply(200,'customer deleted')
        done();
  	});
});

describe('#update()', function() {
	it('should update a customer', function (done) {
  		nock('http://localhost:1337/customer/3/?first_name=uwa')
		.put('/request')
		.reply(200,'customer deleted')
        done();
  	});
});

describe('#displayOne()', function() {
	it('should display a customer', function (done) {
  		nock('http://localhost:1337/customer?id=1')
		.get('/request')
		.reply(200,'displaying one')
        done();
  	});
});

describe('#display()', function() {
	it('should display all customers', function (done) {
  		nock('http://localhost:1337/customer')
		.get('/request')
		.reply(200,'displaying all')
        done();
  	});
});