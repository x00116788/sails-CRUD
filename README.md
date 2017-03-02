# custDB

a [Sails](http://sailsjs.org) application

A back-end CRUD application(restful web service) for customers that allows for creating, updating, displaying and deleting of customer information.
it also incorporates a joker function that takes a customers first and last name, and throws/displays random jokes from http://www.icndb.com/api/ interpolating the names.

Framework of choice is sails JS and Database of choice is sqlite3

#CLONE 
create a folder and cd into the folder.
$ git clone https://github.com/x00116788/sails-CRUD.git

# Before use
$ cd sails-CRUD
$ npm install
$ sails lift

# Create
send a POST to http://localhost:1337/customer/create?< id,first_name,last_name,birth_date>

# Display all Customers
Make a GET to http://localhost:1337/customer

# Display one Customers
Make a GET to http://localhost:1337/customer?< id>

#Update Customer
send a PUT to  http://localhost:1337/customer/< id>?< column_name>=< new_value>
note: changing the id is not permitted.

# Delete a Customer
send a DELETE request to http://localhost:1337/customer?< id>

# Get a Joke
send a GET to http://localhost:1337/customer/joker/?id=< id>

# Sort by a given Column
send a get request to http://localhost:1337/customer/?sort=< column_name>
add %20< DESC> to sort in descending order as auto is set to ASC

 
# CURL USAGE

# Create
curl -X "POST" -d "first_name=< >&last_name=< >&birth_date=yyyy-mm-dd" localhost:1337/customer/create
e.g curl -X "POST" -d "first_name=first&last_name=last&birth_date=1999-03-20" localhost:1337/customer/create

# Display all Customers
curl localhost:1337/customer

# Display One Customer
curl localhost:1337/customer/?id=< id>
e.g curl localhost:1337/customer/?id=1

# Update Customer
curl -X PUT -d "< column>=< new Paramenter>" localhost:1337/customer/< id>
e.g curl -X PUT -d "first_name=chuck" localhost:1337/customer/6

# Delete Customer
curl -X "DELETE" localhost:1337/customer/?id=< id>
e.g curl -X "DELETE" localhost:1337/customer/?id=3

# Get a Joke
curl localhost:1337/customer/joker/?id=< id>
e.g curl localhost:1337/customer/joker/?id=4


# TEST

Mocha tests are available in the test/
first install mocha: 
$ npm install mocha -g
to run test:  
$ npm test

Alternatively u can use the test.sh 
in the root of the directory run:
$ bash test.sh
