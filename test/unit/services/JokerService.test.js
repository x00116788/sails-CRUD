'use strict';
let url = 'localhost:1337/',
    request = require('supertest')(url),
    nock = require('nock'),
    sinon = require('sinon');
const expect = require('chai').expect;

describe("joker service", function(){
   const joke1 = {'type': 'success',
        'value':{'id': 42,
             'joke': 'Chuck Norris programs occupy 150% of CPU, even when they are not executing.', 
             'categories': ['nerdy'] }
    } ;
    
    before(function() {
        
      sinon.stub(JokerService, 'joker', function() {
          let joke1Promise = new Promise (function (resolve, reject) {
              nock('http://api.icndb.com/jokes/random')
              .get('/request')
              .reply(200, {joke1}).then(
            resolve(joke1));
          });
          return joke1Promise;
     })        
          
    });

    after(function() {
      JokerService.joker.restore();
    });

    it('Fetch a joke object', function(done){
        JokerService.joker().then((result) => {
        expect(result).to.eql({
            'type': 'success',
            'value':{
                'id': 42,
                'joke': 'Chuck Norris programs occupy 150% of CPU, even when they are not executing.', 
                'categories': [
                    'nerdy'
                    ]
            }
            });
        done();
    })
    })
})