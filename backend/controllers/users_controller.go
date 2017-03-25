package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
	"net/http"
)

type UsersController struct {
}

func (u UsersController) Index(c echo.Context) error {

	var users []models.User

	models.DB.Find(&users)

	return c.JSON(http.StatusOK, users)

}

func (u UsersController) Create(c echo.Context) error {

	return nil

}

func (u UsersController) Show(c echo.Context) error {

	return nil

}

func (u UsersController) Update(c echo.Context) error {

	return nil

}

func (u UsersController) Destroy(c echo.Context) error {

	return nil

}
