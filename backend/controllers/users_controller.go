package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
)

type UsersController struct{}

func (u UsersController) Index() interface{} {

	var users []models.User

	models.DB.Find(&users)

	return users

}

func (u UsersController) Create(c echo.Context) (interface{}, error) {

	user := models.User{}

	if err := c.Bind(&user); err != nil {
		return user, err
	}

	if err := models.DB.Create(&user).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (u UsersController) Show(c echo.Context) (interface{}, error) {

	user := models.User{}

	if err := models.DB.First(&user, c.Param("id")).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (u UsersController) Update(c echo.Context) (interface{}, error) {

	return nil, nil

}

func (u UsersController) Destroy(c echo.Context) error {

	return nil

}
