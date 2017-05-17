package controllers

import (
	"github.com/Rademade/hackathon-machine/backend/models"
	"github.com/labstack/echo"
	"github.com/dgrijalva/jwt-go"
	"errors"
)

type UserVotesController struct {
}

func authorizeUser(c echo.Context, recordUserId int) bool {
	tokenUser := c.Get("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)
	userId := int(claims["id"].(float64))

	return userId == recordUserId;
}

func (u UserVotesController) Create(c echo.Context) (interface{}, error) {

	userVote := models.UserVote{}
	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	tokenUser := c.Get("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)
	userId := int(claims["id"].(float64))

	// if !authorizeUser(c, userVote.UserId) {
	// 	return nil, echo.ErrUnauthorized
	// }

	if userVote.Vote < 0 || userVote.Vote > 5 {
		return nil, errors.New("invalid vote")
	}

	userVote.UserId = userId

	if err := models.DB.Create(&userVote).Error; err != nil {
		return userVote, err
	}

	return userVote, nil

}

func (u UserVotesController) Update(c echo.Context) (interface{}, error) {

	userVote := models.UserVote{}
	if err := models.DB.First(&userVote, c.Param("id")).Error; err != nil {
		return userVote, err
	}

	if err := c.Bind(&userVote); err != nil {
		return userVote, err
	}

	if !authorizeUser(c, userVote.UserId) {
		return nil, echo.ErrUnauthorized
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
