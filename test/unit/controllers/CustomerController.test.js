
var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe("customer model", function(){
    it("create new customer", function(done){
        var req = request.post("crud/create/customer");
        req.send({
            data:{
                first_name:"first",
                last_name:"last",
                birth_date:19991010
            }
        })
        req.end(function(err,res){
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        })
    }),
    it("update a customer", function(done){
        var req = request.put("crud/update/customer");
        req.send({
            find:{
                id:2
            },
            data:{
                first_name:"first 2"
            }
        })
        req.end(function(err,res){
            if(err){
                throw err;
            }
            console.log(res.text);
            done();
        })
    })
})