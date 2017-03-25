package main

import (
	"fmt"
	"github.com/hackathon-machine/backend/models"
	"github.com/hackathon-machine/backend/queries"
	"github.com/hackathon-machine/backend/routes"
	"github.com/hackathon-machine/backend/services"
)

func main() {

	routes.Check()
	services.Check()
	queries.Check()

	fmt.Println(models.User{})

}
