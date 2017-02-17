#!/bin/bash

#create a customer
curl -X "POST" -d "id=3&first_name=me&last_name=pu&birth_date=1996-10-15" localhost:1337/customer/create

#find and display one customer
echo "__________"
echo "displaying one"
curl localhost:1337/customer/?id=1
curl localhost:1337/customer/?id=3

#display a non existing customer should not be possible
echo " "
echo "attempting to display a non existing customer"
curl localhost:1337/customer/?id=24

#display all
echo " "
echo "__________"
echo "displaying all"
curl localhost:1337/customer

#update a customer
echo " "
echo "__________"
echo "updating a customer"
curl -X PUT -d "first_name=susu" localhost:1337/customer/6

#confirming update
echo " "
echo "__________"
echo "checking for updated customer"
curl localhost:1337/customer/?id=6

#update a non existing customer should not be possible
echo " "
echo "__________"
echo "attempting to update a non existing customer"
curl -X PUT -d "first_name=susu" localhost:1337/customer/24

#delete customer record
echo " "
echo "__________"
echo "deleting a customer record"
curl -X "DELETE" localhost:1337/customer/?id=3

#confirming delete
echo " "
echo "__________"
echo "checking for deleted customer"
curl localhost:1337/customer/?id=3

#delete non existing customer record should not be possible
echo " "
echo "__________"
echo "attempting to delete a non existing customer record"
curl -X "DELETE" localhost:1337/customer/?id=24

#create
echo " "
echo "__________"
echo "CREATING RECORD"
curl -X "POST" -d "id=3&first_name=suli&last_name=ade&birth_date=1999-03-29" localhost:1337/customer/create

#create using an existing id should not be possible
echo " "
echo "__________"
echo "attempting to overwrite a customer"
curl -X "POST" -d "id=2&first_name=me&last_name=pu&birth_date=1996-10-15" localhost:1337/customer/create

#telling a joke
echo " "
echo "__________"
echo "a joke for you"
curl localhost:1337/customer/joker/?id=4

#sort by id (default is ascending order)
echo " "
echo "__________"
echo "sorting by id in ascending order"
curl localhost:1337/customer/?sort=id

#sort by id in descending order
echo " "
echo "__________"
echo "sorting by id in descending order"
curl localhost:1337/customer/?sort=id%20DESC

#sort by first_name
echo " "
echo "__________"
echo "sorting by first_name in ascending order"
curl localhost:1337/customer/?sort=first_name

#sort by last_name in descending order
echo " "
echo "__________"
echo "sorting by last_name in descending order"
curl localhost:1337/customer/?sort=last_name%20DESC
