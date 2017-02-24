var request = require('supertest');
const expect = require('chai').expect;

describe('customer model', function(){
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
             console.log(res.body, res.statusCode);

             done();
         }).expect(200);
    }),
    it('update a customer', function(done){
        request(sails.hooks.http.app).put('/customer/25')
        .send({
            
                first_name:"first"
        }).expect(200,done);
        // req.end(function(err,res){
        //     if(err){
        //         throw err;
        //     }
        //     expect(res.status).to.eql('');
        //     console.log(res.status);
        //     done();
        // })
    })

    it('give a joke to customer', function(done){
        request(sails.hooks.http.app).get('/customer/joker/1')
        .end(function(err,res){
            if(err){
                throw err;
            }
            expect(200);
            console.log(res.body, res.statusCode);
            done();
        })
    })
})