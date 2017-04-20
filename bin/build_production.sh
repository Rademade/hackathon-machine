#!/bin/bash

#builds production images

source bin/env.sh

./bin/build_frontend.sh

#echo "building backend"
dcprod build
