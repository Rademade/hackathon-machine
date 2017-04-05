package main

import (
	"github.com/hackathon-machine/backend/controllers"
	"github.com/labstack/echo"
	"fmt"
)

const (
	ACTION_INDEX = iota
	ACTION_SHOW
	ACTION_CREATE
	ACTION_UPDATE
	ACTION_DESTROY
)

func main() {
	e := echo.New()

	resource(e, "/users", controllers.UsersController{}, nil)
	resource(e, "/hackathons", controllers.HackathonsController{}, nil)
	resource(e, "/topics", controllers.TopicsController{}, nil)
	resource(e, "/user_votes", controllers.TopicsController{}, []int{ ACTION_CREATE, ACTION_UPDATE })

	e.Logger.Fatal(e.Start(":1323"))
}

func resource(e *echo.Echo, url string, controller controllers.CRUDController, resourceActions []int) {
	if resourceActions == nil {
		resourceActions = []int{ ACTION_INDEX, ACTION_SHOW, ACTION_CREATE, ACTION_UPDATE, ACTION_DESTROY }
	}
	for _, action := range resourceActions {
		resourceAction(e, url, controller, action)
	}
}

func resourceAction(e *echo.Echo, url string, controller controllers.CRUDController, action int) {
	switch action {
	case ACTION_INDEX:
		e.GET(url, controllers.Index(controller))
	case ACTION_CREATE:
		e.POST(url, controllers.Create(controller))
	case ACTION_SHOW:
		e.GET(singularUrl(url), controllers.Show(controller))
	case ACTION_UPDATE:
		e.PUT(singularUrl(url), controllers.Update(controller))
		e.PATCH(singularUrl(url), controllers.Update(controller))
	case ACTION_DESTROY:
		e.DELETE(singularUrl(url), controllers.Destroy(controller))
	}
}

func singularUrl(url string) string {
	return fmt.Sprintf("%s/:id", url)
}