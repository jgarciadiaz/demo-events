Ngnix Image
====

Container to run ngnix and route apps

Docker commands
----

Build docker image

`docker build -t jgarciadiaz/container-nginx .`

Run docker instances based on an image

`docker run -d -p 8888:80 jgarciadiaz/container-nginx`

Push docker image to repo

`docker push jgarciadiaz/container-nginx`

Pull docker image from repo

`docker pull jgarciadiaz/container-nginx`
