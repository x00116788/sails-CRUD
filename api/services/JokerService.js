
var http = require('http');
module.exports = {   
  joker: function jokerService(option, done) {          
    
    return promise = new Promise(function (fulfill, reject) {
        try{
           http.get('http://api.icndb.com/jokes/random?firstName=' +option.first_name+ '&lastName=' +option.last_name, (chunk) =>{
          chunk.on('data', (jokeReturned) =>{
               fulfill((JSON.parse(jokeReturned)['value'].joke));
           })
    	}) 

        }catch(err){
            reject(err, 'endpoint error occured');
        }
        
      })
    }


};

