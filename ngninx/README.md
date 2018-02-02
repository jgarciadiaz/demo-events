Ngnix Image
====

Container to run ngnix and route apps

Docker commands
----

Build docker image

`docker build -t garciadiazjaime/container-nginx .`

Run docker instances based on an image

`docker run -d -p 8888:80 garciadiazjaime/container-nginx`

Push docker image to repo

`docker push garciadiazjaime/container-nginx`

Pull docker image from repo

`docker pull garciadiazjaime/container-nginx`
