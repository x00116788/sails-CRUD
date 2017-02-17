# custDB

a [Sails](http://sailsjs.org) application

A back-end CRUD application(restful web service) for customers that allows for creating, updating, displaying and deleting of customer information.
it also incorporates a joker function that takes a customers first and last name, and throws/displays random jokes from http://www.icndb.com/api/ interpolating the names.

Framework of choice is sails

to Create:
send a POST to http://localhost:1337/customer/create?<id,first_name,last_name,birth_date>

to retrieve all Customers in DB
Make a GET to http://localhost:1337/customer

to retrieve a single Customer from DB
Make a GET to http://localhost:1337/customer?<id>

Update Customer
send a PUT to  http://localhost:1337/customer/<id>?<column name>=<new value>
note: changing the id is not permitted.

Delete a Customer
send a DELETE request to http://localhost:1337/customer?<id>

to get a Joke
send a GET to http://localhost:1337/customer/joker/?id=<id>

to sort by a given column
send a get request to http://localhost:1337/customer/?sort=<column name>
add %20<DESC> to sort in descending order as auto is set to ASC

README todo
fix update, joke
use sqlite3
