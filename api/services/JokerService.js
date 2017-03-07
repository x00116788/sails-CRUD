'use strict';
let http = require('http');
module.exports = { 
   
    getJoker: function(id){

        let jokePromise = new Promise( (fulfill,reject) => {
            try {
                this.getOne(id).then((retOne) =>{
                    if (retOne === '404, No Customer Found'){
                        reject(retOne);
                    }
                    this.joker(retOne.first_name,retOne.last_name)
                        .then((joke_obj) =>{
                            let customer_joke = {"Customer":retOne,
                                                "joke":joke_obj['value'].joke
                            };
                            fulfill(JSON.stringify(customer_joke));
                        })
                         
                }).catch((no_one) =>{
                    reject(no_one);
                });              
            }
            catch (err) {
                console.log(err);
            }
        });
        return jokePromise;
    },

    joker: function(first,last){      
        
        let promise = new Promise( (fulfill, reject) => {
            try{
                http.get('http://api.icndb.com/jokes/random/?firstName=' + first + '&lastName=' + last, (chunk) =>{
            
                    chunk.on('data', (jokeReturned) =>{
                        fulfill(JSON.parse(jokeReturned));
                    })
                }) 
            }catch(err){
                reject(err, 'endpoint error occured');
            }
        })
        return promise;
    },

    getOne: function(id){
        let onePromise = new Promise((res,rej) => {
            Customer.findOne(id, (err, person) => {
                if(person){
                    res(person);
                    }
                 else{
                    rej('404, No Customer Found');
                };
            });
        });
        return onePromise;
    }
};