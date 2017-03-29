package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
	"net/http"
)

type UsersController struct {
}

func (u UsersController) Index() interface{} {

	var users []models.User

	models.DB.Find(&users)

	return users

}

func (u UsersController) Create(c echo.Context) error {

	user := new(models.User)
	if err := c.Bind(user); err != nil {
		return err
	}

	if err := models.DB.Create(&user).Error; err != nil {
		return err
	}

	return c.JSON(http.StatusCreated, user)
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
