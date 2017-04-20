#!/bin/bash

source bin/env.sh

dcdev build
./bin/init_db.sh

echo "installing frontend deps"
./bin/npm_frontend.sh i -q

echo "starting"
dcdev up
