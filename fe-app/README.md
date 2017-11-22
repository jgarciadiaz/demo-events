FE App
====

FE app consumed by the user

Setup
----

Install

`yarn`

Run on development

`yarn dev`

Run app

`yarn start`

Docker commands
----

Build docker image

`docker build -t jgarciadiaz/site-events .`

Run docker instances based on an image

`docker run --name site-events --link api-events:api -d -p 49162:3000 jgarciadiaz/site-events`

Push docker image to repo

`docker push jgarciadiaz/site-events`

Pull docker image from repo

`docker pull jgarciadiaz/site-events`

Env vars
----

API URL
