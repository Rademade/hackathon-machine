package controllers

import (
	// "fmt"
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
)

type HackathonsController struct {
}

func (u HackathonsController) Index() interface{} {

	var hackathons []models.Hackathon

	models.DB.Preload("Topic.Creator").Preload("Speaker").Find(&hackathons)

	return hackathons

}

func (u HackathonsController) Create(c echo.Context) (interface{}, error) {

	hack := models.Hackathon{}

	if err := c.Bind(&hack); err != nil {
		return nil, err
	}

	if err := models.DB.Create(&hack).Error; err != nil {
		return nil, err
	}

	return hack, nil

}

func (u HackathonsController) Show(c echo.Context) (interface{}, error) {

	return nil, nil

}

func (u HackathonsController) Update(c echo.Context) (interface{}, error) {

	hack := models.Hackathon{}

	if err := models.DB.Preload("Topic").First(&hack, c.Param("id")).Error; err != nil {
		return hack, err
	}

	if err := c.Bind(&hack); err != nil {
		return hack, err
	}

	if err := models.DB.Save(&hack).Error; err != nil {
		return hack, err
	}

	return hack, nil
}

func (u HackathonsController) Destroy(c echo.Context) (interface{}, error) {

	return nil, nil

}
