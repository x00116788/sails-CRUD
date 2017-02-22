
var url = 'localhost:1337/',
request = require('supertest')(url),
sinon = require('sinon');
const expect = require('chai').expect;

describe("CustomerController joker", function(){
  const person = {first_name:'u',
                last_name:'me',
                birth_date: 19991010},
        joke1 = {'type': 'success',
                'value':{'id': 42,
                        'joke': 'Chuck Norris programs occupy 150% of CPU, even when they are not executing.', 
                        'categories': ['nerdy'] }
    } ;
    before(function() {
      var stub;
      stub = sinon.stub(CustomerController, 'joker', function(pers) {
    		 var parsedJoke = 	JSON.parse(joke1)['value'].joke;
         var	customer_joke = parsedJoke.replace('Chuck Norris', pers.first_name + " " + pers.last_name);
         return customer_joke;
        done()
      });
    });

    after(function() {
      stub.restore();
    });

    it("give a joke to customer", function(done){
        var person = {first_name:'u',
                        last_name:'me'};
        var send = sinon.spy();
     var prom = CustomerController.joker(person, {
            'send': send
           
        })
        expect(prom).to.eql('u me programs occupy 150% of CPU, even when they are not executing.');
        done();
    })
       
})