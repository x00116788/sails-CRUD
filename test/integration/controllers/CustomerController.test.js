var request = require('supertest');
const expect = require('chai').expect;

describe('customer Controller', function(){
    it('create new customer', function(done){
        request(sails.hooks.http.app)
        .post('/customer')
        .send({
            first_name: "ASHUAHSUHAUS",
            last_name: "AIOEJHIUAEHUIHAEUIAE",
            birth_date: "1970-01-01T00:00:00.000Z"
          }).end(function(err,res){
             if(err){
                 done(err);
             }
             done();
         }).expect(200);
    }),

    it('update a customer', function(done){
        request(sails.hooks.http.app)
        .put('/customer/1')
        .send({            
                first_name:"first"
        }).end(function(err,res){
             if(err){
                 done(err);
             }
             done();
         }).expect(200);
    }),

    it('give a joke to customer', function(done){
        request(sails.hooks.http.app)
        .get('/customer/joker/1')
        .end(function(err,res){
            console.log(res.body);
            if(err){
                throw err;
            }
            expect(res.body).to.be.an('object');
            expect(res.text).to.include('joke', 'Customer', 'id', 'first_name', 'last_name');
            done();
        })
    }),

    it('delete customer with given id', function(done){
        request(sails.hooks.http.app)
        .del('/customer/1')
        .end(function(err,res){
             if(err){
                 done(err);
             }
             done();
         }).expect(200);
    })

})