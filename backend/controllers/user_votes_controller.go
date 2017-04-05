package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
)

type UserVotesController struct {
}


func (u UserVotesController) Create(c echo.Context) (interface{}, error) {

	userVote := models.UserVote{}

	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	if err := models.DB.Create(&userVote).Error; err != nil {
		return userVote, err
	}

	return userVote, nil

}

func (u UserVotesController) Update(c echo.Context) (interface{}, error) {

	userVote := models.Hackathon{}

	if err := models.DB.First(&userVote, c.Param("id")).Error; err != nil {
		return userVote, err
	}

	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	if err := models.DB.Save(&userVote).Error; err != nil {
		return userVote, err
	}

	return userVote, nil

}
