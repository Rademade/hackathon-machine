package main

import (
	"github.com/hackathon-machine/backend/routes"
	"github.com/hackathon-machine/backend/services"
	"github.com/hackathon-machine/backend/queries"
)

func main () {

	routes.Check()
	services.Check()
	queries.Check()

}
