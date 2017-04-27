package main

import (
	"fmt"
	"github.com/Rademade/hackathon-machine/backend/models"
	"github.com/Rademade/hackathon-machine/backend/queries"
	"github.com/Rademade/hackathon-machine/backend/routes"
	"github.com/Rademade/hackathon-machine/backend/services"
)

func main() {

	routes.Check()
	services.Check()
	queries.Check()

	fmt.Println(models.User{})

}
