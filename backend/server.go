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
	e.POST(url, controllers.Create(controller))

	singularUrl := fmt.Sprintf("%s/:id", url)

	e.GET(singularUrl, controllers.Show(controller))
	e.PUT(singularUrl, controller.Update)
	e.DELETE(singularUrl, controller.Destroy)

}
