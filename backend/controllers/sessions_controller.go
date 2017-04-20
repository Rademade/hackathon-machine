package controllers

import (
  jwt "github.com/dgrijalva/jwt-go"
  "github.com/hackathon-machine/backend/models"
  "github.com/labstack/echo"
  "net/http"
  "time"
)

// TODO: change this key to get from ENV
var secretKey = []byte("impenetrable fortress")

type TokenRequest struct {
  Email string `json:"email"`
  Pass  string `json:"pass"`
}

func Login(c echo.Context) error {
  payload := new(TokenRequest)
  if err := c.Bind(payload); err != nil {
    return err
  }

  user := models.User{}
  if err := models.DB.Where("email = ?", payload.Email).First(&user).Error; err != nil {
    return err
  }

  if !user.IsCorrectPassword(payload.Pass) {
    return echo.ErrUnauthorized
  }

  // Create token
  token := jwt.New(jwt.SigningMethodHS256)

  // Set claims
  claims := token.Claims.(jwt.MapClaims)
  claims["name"] = user.Fullname
  claims["admin"] = user.IsAdmin
  claims["id"] = user.Base.ID
  claims["email"] = user.Email
  claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

  // Generate encoded token and send it as response.
  tokenString, err := token.SignedString(secretKey)
  if err != nil {
    return err
  }

  return c.JSON(http.StatusOK, map[string]string{
    "token": tokenString,
  })

  return echo.ErrUnauthorized
}
