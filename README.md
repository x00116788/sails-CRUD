# custDB

a [Sails](http://sailsjs.org) application

A back-end CRUD application(restful web service) that allows a user to creat, read, update and delete customer information. it speaks HTTP Json
it also incorporates a joker function that takes a customers first and last name, and displays random jokes from http://www.icndb.com/api/ interpolating the names.

Framework of choice is sails JS and Database of choice is sqlite3

## CLONE
create a folder and cd into the folder.

    $ git clone https://github.com/x00116788/sails-CRUD.git

## Before use
    $ cd sails-CRUD
    $ npm install
    $ sails lift

### Create
send a **POST** request to

    http://localhost:1337/customer/create?  passing in the following parameters
    first_name
    last_name
    birth_date

### Display all Customers
Make a **GET** request to

    http://localhost:1337/customer

### Display one Customers
Make a **GET** request to  

    http://localhost:1337/customer?  passing the id as parameter
    e.g. http://localhost:1337/customer?1

### Update Customer
send a **PUT** request to

    http://localhost:1337/customer/ pass the id, ?
    column_name= new_value
    e.g. http://localhost:1337/customer/1?first_name=yuel
    note: changing the id is not permitted.

### Delete a Customer
send a **DELETE** request to

    http://localhost:1337/customer/ passing in the id
    e.g. http://localhost:1337/customer/1

### Get a Joke
send a **GET** request to

    http://localhost:1337/customer/joker/ passing in the customers id
    e.g. http://localhost:1337/customer/joker/1

### Sort by a given Column
send a **GET** request to

    http://localhost:1337/customer/?sort= column_name
    add %20< DESC> to sort in descending order as auto is set to ASC
    e.g. http://localhost:1337/customer/?sort=first_name

## CURL USAGE

### Create
    curl -X "POST" -d "first_name=< >&last_name=< >&birth_date=yyyy-mm-dd" localhost:1337/customer/create
    e.g curl -X "POST" -d "first_name=first&last_name=last&birth_date=1999-03-20" localhost:1337/customer/create

### Display all Customers
    curl localhost:1337/customer

### Display One Customer
    curl localhost:1337/customer/?id=< id>
    e.g curl localhost:1337/customer/?id=1

### Update Customer
    curl -X PUT -d "< column>=< new Paramenter>" localhost:1337/customer/< id>
    e.g curl -X PUT -d "first_name=chuck" localhost:1337/customer/6

### Delete Customer
    curl -X "DELETE" localhost:1337/customer/?id=< id>
    e.g curl -X "DELETE" localhost:1337/customer/?id=3

### Get a Joke
    curl localhost:1337/customer/joker/?id=< id>
    e.g curl localhost:1337/customer/joker/?id=4


## TEST

    Mocha tests are available in the test/
    first install mocha:
    $ npm install mocha -g
    to run test:  
    $ npm test

Alternatively u can use the test.sh in the root of the directory by running:
    $ bash test.sh
