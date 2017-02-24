'use strict';
let url = 'localhost:1337/',
    request = require('supertest')(url),
    nock = require('nock'),
    sinon = require('sinon');
const expect = require('chai').expect,
     customer = {id: 2,
                 first_name: "susu",
                 last_name: "suli",
                 birth_date: 19700101                  
                },
            id = 2,

          joke1 = {'type': 'success',
                  'value':{'id': 42,
                          'joke': 'Chuck Norris programs occupy 150% of CPU, even when they are not executing.', 
                          'categories': ['nerdy'] }
        } ;
    

describe("joker service", function(){
    before(function() {
        
     sinon.stub(JokerService, 'joker', function() {
         let joke1Promise = new Promise (function (resolve, reject) {
             resolve(joke1);
         });
         return joke1Promise;
     });
          
     sinon.stub(JokerService, 'getOne', function(id){
         let customerOne = new Promise(function(res,rej){

             res(customer)
         });
         return customerOne;
     });

    });

    after(function() {
      JokerService.joker.restore();
      JokerService.getOne.restore();
    });

    it('Expect a customer joke', function(done){
        JokerService.getJoker(id).then((result) => {
            expect(result).to.eql('susu suli programs occupy 150% of CPU, even when they are not executing.')
            done();
        }).catch(done);
    })

}) 
