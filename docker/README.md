Docker
====

docker-compose files helps to setup all our docker containers

Commands
----

List docker images

`docker images`

List docker processes

`docker ps`

Pull docker image from repo

`docker pull <image-url>`


Remove "exited" container

`docker ps --filter "status=exited" | grep 'ago' | awk '{print $1}' | xargs docker rm`

Remove unused images

`docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")`


Star all containers on the background

`docker-compose up -d`
