'use strict';
  let url = 'localhost:1337/',
      request = require('supertest')(url),
      sinon = require('sinon'),
      CustomerController = require("/home/suliat/sails1/custDB/api/controllers/CustomerController"),
      req = {param: function(){}},
      res = {json: function(){}};
  const expect = require('chai').expect;

describe("CustomerController joker", function(){
    let joke1 = {'type': 'success',
                 'value':{'id': 42,
                          'joke': 'Chuck Norris programs occupy 150% of CPU, even when they are not executing.', 
                          'categories': ['nerdy'] }
        } ;

    before(function() {

        sinon.stub(req, "param", function(key){
          if(key == "id")
            return 1;
          else
            throw new Error("aeaea");
        });

      sinon.stub(res, "json", function(key){
        return joke1.value.joke;
      });

      // sinon.stub(CustomerController, 'joker', function(pers) {
    	// 	 var parsedJoke = 	JSON.parse(joke1)['value'].joke;
      //    var	customer_joke = parsedJoke.replace('Chuck Norris', pers.first_name + " " + pers.last_name);
      //    return customer_joke;
      //   done()
      // });
    });

    after(function() {
      //CustomersController.joker.restore();
    });

    it("cusomise a joke to customer", function(done){

        console.log(CustomerController.joker(req, res));

        // var prom = CustomerController.joker(person, {
           
        // })
        // expect(prom).to.eql('u me programs occupy 150% of CPU, even when they are not executing.');
        done();
    })
       
})