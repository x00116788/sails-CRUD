'use strict';
let http = require('http');
module.exports = { 

    getJoker: function(id){
        let jokePromise = new Promise( (fulfill,reject) => {
            try {
                this.getOne(id).then((retOne) =>{
                    return this.joker()
                        .then((joke_obj) =>{
                            let parsedJoke = joke_obj['value'].joke;
                            let	customer_joke = parsedJoke.replace('Chuck Norris', retOne.first_name + " " + retOne.last_name);
                            fulfill(customer_joke);
                        })
                        .catch(reject); 
                })
               
            }
            catch (err) {
                console.log(err);
            }
        });
        return jokePromise;
    },

    joker: function(){      
        
        let promise = new Promise( (fulfill, reject) => {
            try{
            http.get('http://api.icndb.com/jokes/random', (chunk) =>{
            
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
                }
            })
            
        })
        return onePromise;
    }

};

