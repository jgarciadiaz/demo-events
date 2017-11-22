Rest API
====

API exposing /events endpoint

Setup
----

Install

`yarn`

Transpile es6 -> es5

`yarn babel`

Watch for JS Changes

`yarn babel -- -w`

Lint Code

`yarn lint`

Watch for lint errors

`yarn lint -- -w`

Run api

`yarn start`


How to query endpoint
----

Eg. http://0.0.0.0:49160/events?query={event{title,location,numberBought,price,ends,image}}

Docker commands
----

Build docker image

`docker build -t jgarciadiaz/api-events .`

Run docker instances based on an image

`docker run --name api-events --link mongodb:mongo -d -p 49160:8000 jgarciadiaz/api-events`

Push docker image to repo

`docker push jgarciadiaz/api-events`

Pull docker image from repo

`docker pull jgarciadiaz/api-events`

Resources
----

https://medium.com/@gethylgeorge/setting-up-a-simple-graphql-server-with-node-express-and-mongoose-ff8a1071af53
https://community.risingstack.com/redis-node-js-introduction-to-caching/