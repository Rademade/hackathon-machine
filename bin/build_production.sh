#!/bin/bash

#builds production images

source bin/env.sh

echo "##### Building frontend #####"
./bin/build_frontend.sh

echo "##### Building go server sources #####"
dcbackend 'CGO_ENABLED=${CGO_ENABLED:-0} go build --installsuffix cgo --ldflags="${LDFLAGS:--s}" migrate.go'
mv backend/migrate backend/dist
dcbackend 'CGO_ENABLED=${CGO_ENABLED:-0} go build --installsuffix cgo --ldflags="${LDFLAGS:--s}" server.go'
mv backend/server backend/dist

echo "##### Building backend #####"
dcprod build
