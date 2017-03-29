package controllers

import (
	// "fmt"
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
)

type HackathonsController struct {
}

func (u HackathonsController) newResource() interface{} {
	return new(models.Hackathon)
}

func (u HackathonsController) Index() interface{} {

	var hackathons []models.Hackathon

	models.DB.Preload("Topic.Creator").Preload("Speaker").Find(&hackathons)

	return hackathons

}

func (u HackathonsController) Create(hack interface{}) interface{} {

	return nil

}

func (u HackathonsController) Show(c echo.Context) error {

	return nil

}

func (u HackathonsController) Update(c echo.Context) error {

	return nil

}

func (u HackathonsController) Destroy(c echo.Context) error {

	return nil

}
