Ngnix Image
====

Container to run ngnix and route apps

Docker commands
----

Build docker image

`docker build -t jgarciadiaz/container-nginx .`

Run docker instances based on an image

`docker run --name container-nginx --link site-events:site-events -d -p 8888:80 jgarciadiaz/container-nginx`

docker run -e 'DB_URL=mongodb://mongo/events' -e 'PORT=80' --name api-events --link mongodb:mongo -d -p 49160:80 jgarciadiaz/api-events

Push docker image to repo

`docker push jgarciadiaz/container-nginx`

Pull docker image from repo

`docker pull jgarciadiaz/container-nginx`
