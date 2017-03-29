package main

import (
	"fmt"
	"github.com/hackathon-machine/backend/controllers"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()

	resource(e, "/users", controllers.UsersController{})
	resource(e, "/hackathons", controllers.HackathonsController{})

	e.Logger.Fatal(e.Start(":1323"))
}

func resource(e *echo.Echo, url string, controller controllers.Controller) {

	e.GET(url, controllers.Index(controller))
	e.POST(url, controller.Create)

	singularUrl := fmt.Sprintf("%s/:id", url)

	e.GET(singularUrl, controller.Show)
	e.PUT(singularUrl, controller.Update)
	e.DELETE(singularUrl, controller.Destroy)

}
