
var http = require('http');
module.exports = {   
  joker: function jokerService() {          
    
    return promise = new Promise(function (fulfill, reject) {
        try{
           http.get('http://api.icndb.com/jokes/random', (chunk) =>{
          chunk.on('data', (jokeReturned) =>{
               fulfill(jokeReturned);
           })
    	}) 

        }catch(err){
            reject(err, 'endpoint error occured');
        }
        
      })
    }


};

