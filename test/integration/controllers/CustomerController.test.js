'use strict';
const expect = require('chai').expect;
let request = require('supertest'),
    test_id;

describe('customer Controller', function(){
    it('create new customer', function(done){
        request(sails.hooks.http.app)
        .post('/customer/')
        .send({
            first_name: "ASHUAHSUHAUS",
            last_name: "AIOEJHIUAEHUIHAEUIAE",
            birth_date: "1970-01-01T00:00:00.000Z"
          }).end(function(err,res){
             if(err){
                 done(err);
             }
             test_id= res.body['id'];
             expect(res.statusCode).to.eql(200);
             expect(res.text).to.include('id', 'first_name', 'last_name');             
             done();
         })
    }),

    it('update a customer', function(done){
        request(sails.hooks.http.app)
        .put('/customer/' + test_id)
        .send({            
                first_name:"first"
        }).end(function(err,res){
             if(err){
                 done(err);
             }
        let updated = res.body;
        console.log(updated.first_name);
           //console.log(JSON.stringify(res.body["first_name"]));
           // expect(res.body["first_name"]).to.eql('first'); 
             done();
         }).expect(200);
    }),

    it('give a joke to customer', function(done){
        request(sails.hooks.http.app)
        .get('/customer/joker/' + test_id)
        .end(function(err,res){
           // console.log(res.body);
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
        .del('/customer/' + test_id)
        .end(function(err,res){
             if(err){
                 done(err);
             }
             //console.log(res.body);
             done();
         }).expect(200);
    })

})