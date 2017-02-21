
var url = 'localhost:1337/',
//app = require('sails'),
request = require('supertest')(url),
sinon = require('sinon'),
assert = require('assert');

describe("joker service", function(){
    before(function() {
      // Mocking our service
      sinon.stub(JokerService, 'joker', function(pers) {
        return 'Laugh if u get this '+ pers.first_name + ' ' + pers.last_name;
      });
    });

    after(function() {
      // Restores our mock to the original service
      JokerService.joker.restore();
    });
    it("give a joke to customer", function(done){
        var person = {first_name:'u',
                        last_name:'me'};
        var send = sinon.spy();
     var prom = JokerService.joker(person, {
            'send': send
           
        })
        console.log(prom);
        /*
        var Sails = require('sails');
var sinon = require('sinon'); // Mocking/stubbing/spying
var assert = require('chai').assert; // Assertions
var nock = require('nock'); // HTTP Request Mocking

describe('Joke Service',function(){
  var app;
  before(function(){
        var mockJoke = {
          "type": "success",
          "value": {
            "id": 513,
            "joke": "David Kiarie does not code in cycles, he codes in strikes.",
            "categories": [
              "nerdy"
            ]
          }
        };

    JokeService = nock()
      .get()
      .reply(200, mockJoke);
  });

  it('Should retrieve the joke and parse the data.', function(){
    var service = new JokeService();
    service.getJoke(){
      
    }
  })
});*/

        // var req = request.get("customer/joker/?id=2")
        // // req.send({
        // //     data:{
        // //         id:2
        // //     }
        // // })
        // //.expect(200)

        // req.end(function(err,res){
        //     if(err){
        //         throw err;
        //     }
        //     console.log(res.text+'here');
        //     done();
        // })
    })//,
    // it("update a customer", function(done){
    //     var req = request.put("crud/update/customer");
    //     req.send({
    //         find:{
    //             id:2
    //         },
    //         data:{
    //             first_name:"first 2"
    //         }
    //     })
    //     req.end(function(err,res){
    //         if(err){
    //             throw err;
    //         }
    //         console.log(res.text);
    //         done();
    //     })
    // })
})