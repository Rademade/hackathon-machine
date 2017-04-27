package controllers

import (
	"github.com/Rademade/hackathon-machine/backend/models"
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

	hackathon := models.Hackathon{}

	if err := c.Bind(&hackathon); err != nil {
		return nil, err
	}

	if err := models.DB.Create(&hackathon).Error; err != nil {
		return nil, err
	}

	return hackathon, nil

}

func (u HackathonsController) Show(c echo.Context) (interface{}, error) {

	hackathon := models.Hackathon{}

	if err := models.DB.First(&hackathon, c.Param("id")).Error; err != nil {
		return hackathon, err
	}

	return hackathon, nil

}

func (u HackathonsController) Update(c echo.Context) (interface{}, error) {

	hackathon := models.Hackathon{}

	if err := models.DB.Preload("Topic").First(&hackathon, c.Param("id")).Error; err != nil {
		return hackathon, err
	}

	if err := c.Bind(&hackathon); err != nil {
		return hackathon, err
	}

	if err := models.DB.Save(&hackathon).Error; err != nil {
		return hackathon, err
	}

	return hackathon, nil
}

func (u HackathonsController) Destroy(c echo.Context) error {

	hackathon := models.Hackathon{}

	if err := models.DB.First(&hackathon, c.Param("id")).Error; err != nil {
		return err
	}

	if err := models.DB.Delete(&hackathon).Error; err != nil {
		return err
	}

	return nil

}
