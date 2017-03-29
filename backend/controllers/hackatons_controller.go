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

func (u HackathonsController) Create(c echo.Context) interface{} {

	hack := models.Hackathon{}

	if err := c.Bind(hack); err != nil {
		return err
	}

	if err := models.DB.Create(&hack).Error; err != nil {
		return err
	}

	return hack

}

func (u HackathonsController) Show(c echo.Context) error {

	return nil

}

func (u HackathonsController) Update(c echo.Context) (interface{}, error) {

	hack := models.Hackathon{}

	if err := models.DB.First(&hack, c.Param("id")).Error; err != nil {
		return hack, err
	}

	if err := c.Bind(hack); err != nil {
		return hack, err
	}

	if err := models.DB.Save(&hack).Error; err != nil {
		return hack, err
	}

	return hack, nil
}

func (u HackathonsController) Destroy(c echo.Context) error {

	return nil

}
