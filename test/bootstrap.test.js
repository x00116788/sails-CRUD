
var sails = require('sails');

before(function(done) {
  sails.lift({
    // configuration for testing purposes
  }, function(err, sails) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    var app = sails;
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});