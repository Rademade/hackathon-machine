#!/bin/bash

source bin/env.sh

#for init_db.sh
export DOCKER_INIT_DB_CONFIG=$DOCKER_CONFIG_PROD

if  [ $(docker-compose -f $DOCKER_INIT_DB_CONFIG ps | grep dbdata | wc -l) == 0 ]; then
  ./bin/init_db.sh
else
  ./bin/backup.sh
fi
./bin/build_production.sh

echo "##### run migrations #####"
dcprod exec backend /migrate

./bin/stop_production.sh
./bin/start_production.sh
