package main

import (
	"fmt"
	"github.com/hackathon-machine/backend/controllers"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"os"
)

const (
	ACTION_INDEX = iota
	ACTION_SHOW
	ACTION_CREATE
	ACTION_UPDATE
	ACTION_DESTROY
)

var AppSecret = []byte(os.Getenv("APP_SECRET"))

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	// Public routes
	publicRoutes := e.Group("")
	publicRoutes.POST("/login", controllers.Login)

	// Restricted routes
	apiRoutes := e.Group("/api")
	apiRoutes.Use(middleware.JWT(AppSecret))

	// Resources
	resource(publicRoutes, "/users", controllers.UsersController{}, []int{ACTION_CREATE})
	resource(apiRoutes, "/users", controllers.UsersController{}, []int{ACTION_INDEX, ACTION_SHOW, ACTION_UPDATE, ACTION_DESTROY})
	resource(apiRoutes, "/hackathons", controllers.HackathonsController{}, nil)
	resource(apiRoutes, "/topics", controllers.TopicsController{}, nil)
	// TODO: UserVotesController should be here, but doesn't pass type checking
	resource(apiRoutes, "/user_votes", controllers.TopicsController{}, []int{ACTION_CREATE, ACTION_UPDATE})

	e.Logger.Fatal(e.Start(":1323"))
}

func resource(e *echo.Group, url string, controller controllers.CRUDController, resourceActions []int) {
	if resourceActions == nil {
		resourceActions = []int{ACTION_INDEX, ACTION_SHOW, ACTION_CREATE, ACTION_UPDATE, ACTION_DESTROY}
	}
	for _, action := range resourceActions {
		resourceAction(e, url, controller, action)
	}
}

func resourceAction(e *echo.Group, url string, controller controllers.CRUDController, action int) {
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
