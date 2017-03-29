package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
)

type UsersController struct{}

func (u UsersController) newResource() interface{} {
	return new(models.User)
}

func (u UsersController) Index() interface{} {

	var users []models.User

	models.DB.Find(&users)

	return users

}

func (u UsersController) Create(user interface{}) interface{} {

	if err := models.DB.Create(&user).Error; err != nil {
		return err
	}

	return user
}

func (u UsersController) Show(c echo.Context) error {

	return nil

}

func (u UsersController) Update(c echo.Context) (interface{}, error) {

	return nil, nil

}

func (u UsersController) Destroy(c echo.Context) error {

	return nil

}
