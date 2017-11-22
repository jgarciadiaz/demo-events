Commands
====
docker images

docker run --name mongodb -d mongo
docker exec -it mongodb bash

db.geekfest.insert({date: '2017-11-14', total: 100, success: true})
db.geekfest.insert({date: '2017-10-07', total: 100, success: false})
db.geekfest.find().pretty()
db.geekfest.find({success: true}).pretty()
db.geekfest.drop()
