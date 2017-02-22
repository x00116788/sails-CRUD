var url = 'localhost:1337/',
request = require('supertest')(url),
sinon = require('sinon');
const expect = require('chai').expect;

describe("joker service", function(){
   const joke1 = {'type': 'success',
        'value':{'id': 42,
             'joke': ' programs occupy 150% of CPU, even when they are not executing.', 
             'categories': ['nerdy'] }
    } ;
    
    before(function() {
        
      sinon.stub(JokerService, 'joker', function() {
        var customer_joke = (joke1)['value'].joke;

        return  joke1;        
        done()
      });
    });

    after(function() {
      JokerService.joker.restore();
    });

    it('Fetch a joke object', function(done){
        
        var send = sinon.spy();
        var prom = JokerService.joker( {
            'send': send           
        });
        expect(prom).to.eql({
            'type': 'success',
            'value':{
                'id': 42,
                'joke': ' programs occupy 150% of CPU, even when they are not executing.', 
                'categories': [
                    'nerdy'
                    ]
            }
            });
        done();
    })
})