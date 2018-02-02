Ingestor Service
====

Pulls data from specific sources

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

Run ingestor

`yarn grpn`


Docker commands
----

Build docker image

`docker build -t jgarciadiaz/ingestor-events .`

Run docker instances based on an image

`docker run -e "DB_URL=mongodb://mongo/events" --name ingestor-events --link mongodb:mongo -d -p 49161:8080 jgarciadiaz/ingestor-events`

Push docker image to repo

`docker push jgarciadiaz/ingestor-events`

Pull docker image from repo

`docker pull jgarciadiaz/ingestor-events`

Restart docker container

`docker restart ingestor-events`

Env vars
----

Mongo URL

`mongodb://mongo/events`


Links
----

- [Groupon API](http://partner-api.groupon.com/help/deal-api)
