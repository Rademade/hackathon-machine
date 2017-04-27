#!/bin/bash

source bin/env.sh

dcdev build
./bin/init_db.sh

echo "##### Installing frontend deps #####"
./bin/npm_frontend.sh i -q
echo "##### installing backend deps #####"
./bin/glide_backend.sh install
echo "##### Starting App #####"
dcdev up
