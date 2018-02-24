#!/usr/bin/env bash

yarn build
docker stop vue-cli
docker rm -v vue-cli
docker build . -t vue-cli
docker run --name vue-cli -d -p 8080:80 vue-cli
docker ps