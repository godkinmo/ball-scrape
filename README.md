# Ball Scrape

## Build docker image
```bash
cd docker
./build
```

## Up & Running

Check that our nodejs container works
`./develop run --rm -w /var/www/html node -v`

Then we can spin up our containers to run this in development:
`./develop up -d`

Stop containers
`./develop stop`


```
docker run -it -v ~/ball-scrape:/var/www/html node:latest bash
```
