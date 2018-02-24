This project was generated with [Vue CLI](https://github.com/vuejs/vue-cli) version 3.0.0-beta.1.

```
yarn build
docker stop vue-cli
docker rm -v vue-cli
docker build . -t vue-cli
docker run --name vue-cli -d -p 8080:80 vue-cli
docker ps
```

*Or if you can run bash then just,*

```
sh run.sh
```
