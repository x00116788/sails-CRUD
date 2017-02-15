/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req, res) {
        res.send('Creating a customer');
        Customer.create(req.params.all(), function customerCreated(err, customer) {
            if (err){
                res.send('something went Wrong');
            }             
            res.send('created sucessfully ' + customer.id);
            res.json(customer);
        });
    },

    update: function(req, res){    
         var id=req.param('id',null);
         Person.findOne(id).done(function(err, person) {
            if(req.method=='PUT'&&req.param('Customer',null)!=null)
            {                    
                var c=req.param('Customer',null);
                person.name=p.name;
                person.age=p.age;
                person.save(function(err){
                if (err) {
                   return res.send('Error Saving');
                }
                else{
                    return res.send('saved succesfully');
                    }                    
                });                
            }
            else{
                res.end( 'yo');
            }
        
    },

    delete: function(req, res){
        customer.destroy();
        return res.send('Customer deleted' + id);
    },

    display: function(req, res){
        return res.send('Customer List');
    }
};

