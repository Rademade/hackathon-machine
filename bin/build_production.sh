#!/bin/bash

#builds production images

source bin/env.sh

echo "##### Building frontend #####"
./bin/build_frontend.sh

echo "##### Building backend #####"
dcprod build
