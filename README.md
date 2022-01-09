# MEAN-Stack

This is a basic MEAN (MongoDB, Express, Angular, Node.js) Stack CRUD. For running the application use docker-compose.

## Build or rebuild services
```bash
docker-compose -f docker-compose.yml build
```

## Create and start containers
```bash
docker-compose -f docker-compose.yml up
```

## Stop and remove containers
```bash
docker-compose -f docker-compose.yml down
```

## Clean: Delete all images
```bash
docker rmi -f $(docker images -aq)
```

## Clean: Delete all volumes
```bash
docker volume rm $(docker volume ls -q)
```

## Example
[Screenshot](Users.png)