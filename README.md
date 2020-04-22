# sample-docker-nodeapp

This is a sample Node.js application used to demonstrate
how to wrap an app inside a Docker image / container.

The webserver exposes two HTTP GET endpoints:

- `HTTP GET /` is a pretty standard text-based response with the `$HOSTNAME`
- `HTTP GET /compute` is a deliberately compute-intensive operation,
  meant for demonstrating auto-scaling on a deployment platform.

## Running the server

Super straightforward.

```
# :: after cloning this repo

npm install
npm start
```

The server listens on the port provided by `$PORT` by default.
Otherwise, at `:8080`.
You can override this using your env vars or through the Docker build process.

```
PORT=9500 npm start
```

## Building the images

The codebase provides two Dockerfiles --- one for a basic build,
and one that creates a slim build using Docker multi-stage builds.

```bash
# :: standard build
docker build -t <image tag> .

# :: slim build
docker build -t <image tag> -f ./Dockerfile-slim .
```

---

[homepage][homepage] &middot; [@techlifemusic][twitter]

[homepage]: https://richardneililagan.com
[twitter]: https://twitter.com/techlifemusic
