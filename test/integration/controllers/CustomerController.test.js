var request = require('supertest');
const expect = require('chai').expect;

describe('customer Controller', function(){
    it('create new customer', function(done){
        request(sails.hooks.http.app)
        .post('/customer')
        .send({
            id: 22,
            first_name: "ASHUAHSUHAUS",
            last_name: "AIOEJHIUAEHUIHAEUIAE",
            birth_date: "1970-01-01T00:00:00.000Z"
          }).end(function(err,res){
             if(err){
                 done(err);
             }
             console.log(res.body, res.statusCode);

             done();
         }).expect(200);
    }),

    it('update a customer', function(done){
        request(sails.hooks.http.app)
        .put('/customer/22')
        .send({            
                first_name:"first"
        }).end(function(err,res){
             if(err){
                 done(err);
             }
             console.log(res.body, res.statusCode);

             done();
         }).expect(200);
    }),


    it('give a joke to customer', function(done){
        request(sails.hooks.http.app)
        .get('/customer/joker/22')
        .end(function(err,res){
            if(err){
                throw err;
            }
            console.log(res.text, res.statusCode);
            done();
        }).expect(200);
    }),

    it('delete customer with given id', function(done){
        request(sails.hooks.http.app)
        .del('/customer/22')
        .end(function(err,res){
             if(err){
                 done(err);
             }
             console.log(res.body, res.statusCode);

             done();
         }).expect(200);
    })

})