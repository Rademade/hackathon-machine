package controllers

import (
	"github.com/hackathon-machine/backend/models"
	"github.com/labstack/echo"
	"github.com/dgrijalva/jwt-go"
	"errors"
)

type UserVotesController struct {
}

func (u UserVotesController) Create(c echo.Context) (interface{}, error) {

	tokenUser := c.Get("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)
	userId := int(claims["id"].(float64))

	userVote := models.UserVote{}
	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	if userVote.Vote < 0 || userVote.Vote > 5 {
		return nil, errors.New("invalid vote")
	}

	if userId != userVote.UserId {
		return nil, echo.ErrUnauthorized
	}

	if err := models.DB.Create(&userVote).Error; err != nil {
		return userVote, err
	}

	return userVote, nil

}

func (u UserVotesController) Update(c echo.Context) (interface{}, error) {

	tokenUser := c.Get("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)
	userId := int(claims["id"].(float64))

	userVote := models.UserVote{}
	if err := models.DB.First(&userVote, c.Param("id")).Error; err != nil {
		return userVote, err
	}

	if userId != userVote.UserId {
		return nil, echo.ErrUnauthorized
	}

	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	if userVote.Vote < 0 || userVote.Vote > 5 {
		return nil, errors.New("invalid vote")
	}

	if err := models.DB.Save(&userVote).Error; err != nil {
		return userVote, err
	}

	return userVote, nil

}

func (u UserVotesController) Index() interface{} {

	return nil

}

func (u UserVotesController) Show(c echo.Context) (interface{}, error) {

	return nil, nil

}

func (u UserVotesController) Destroy(c echo.Context) error {

	return nil

}
