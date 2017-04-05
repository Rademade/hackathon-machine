package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
	"net/http"
)

type TopicsController struct {
}

func (u TopicsController) Index() interface{} {

	var topics []models.Topic

	models.DB.Preload("Creator").Find(&topics)

	return topics

}

func (u TopicsController) Show(c echo.Context) (interface{}, error) {

	topic := models.Topic{}

	if err := models.DB.First(&topic, c.Param("id")).Error; err != nil {
		return topic, err
	}

	return topic, nil

}

func (u TopicsController) Create(c echo.Context) (interface{}, error) {

	topic := models.Topic{}

	if err := c.Bind(&topic); err != nil {
		return topic, err
	}

	if err := models.DB.Create(&topic).Error; err != nil {
		return topic, err
	}

	return topic, nil

}

func (u TopicsController) Update(c echo.Context) (interface{}, error) {

	topic := models.Topic{}

	if err := models.DB.First(&topic, c.Param("id")).Error; err != nil {
		return topic, err
	}

	if err := c.Bind(&topic); err != nil {
		return topic, err
	}

	if err := models.DB.Save(&topic).Error; err != nil {
		return topic, err
	}

	return topic, nil

}

func (u TopicsController) Destroy(c echo.Context) error {

	return nil

}