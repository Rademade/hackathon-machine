package controllers

import (
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/hackathon-machine/backend/models"
	"github.com/hackathon-machine/backend/queries"
	"github.com/labstack/echo"
	"encoding/json"
)

type TopicsController struct {
}

type Result struct {
	Json string
}

func (u TopicsController) Index() interface{} {

	var result Result
	models.DB.Raw(queries.GetAllTopics).Scan(&result)

	in := []byte(result.Json)
	var raw []interface{}
	json.Unmarshal(in, &raw)

	return raw

}

func (u TopicsController) Show(c echo.Context) (interface{}, error) {

	topic := models.Topic{}

	if err := models.DB.First(&topic, c.Param("id")).Error; err != nil {
		return topic, err
	}

	return topic, nil

}

func (u TopicsController) Create(c echo.Context) (interface{}, error) {

	// Getting claims from JWT example
	tokenUser := c.Get("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)

	topic := models.Topic{}

	if err := c.Bind(&topic); err != nil {
		return topic, err
	}

	topic.CreatorID = int(claims["id"].(float64))

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

	topic := models.Topic{}

	if err := models.DB.First(&topic, c.Param("id")).Error; err != nil {
		return err
	}

	if err := models.DB.Delete(&topic).Error; err != nil {
		return err
	}

	return nil

}
