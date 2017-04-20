#!/bin/bash

source bin/env.sh

dcdev build
./bin/init_db.sh

echo "installing frontend deps"
./bin/npm_frontend.sh i -q
echo "running migrations"
dcdev run --rm backend /bin/bash -c "cd backend && go run migrate.go"
echo "starting"
dcdev up
