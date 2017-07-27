package controllers

import (
  jwt "github.com/dgrijalva/jwt-go"
  "github.com/Rademade/hackathon-machine/backend/config"
  "github.com/Rademade/hackathon-machine/backend/models"
  "github.com/labstack/echo"
  "net/http"
  "time"
  //"fmt"
)

type TokenRequest struct {
  Email string `json:"email"`
  Password  string `json:"password"`
}

type UserResponse struct {
  Id int `json:"id"`
  IsAdmin bool `json:"is_admin"`
  FullName string `json:"full_name"`
  Email string `json:"email"`
}

type TokenResponse struct {
  Token string `json:"token"`
  User UserResponse `json:"user"`
}

func SignIn(c echo.Context) error {
  payload := new(TokenRequest)
  if err := c.Bind(payload); err != nil {
    return echo.ErrUnauthorized
  }

  user := models.User{}
  if err := models.DB.Where("email = ?", payload.Email).First(&user).Error; err != nil {
    return echo.ErrUnauthorized
  }

  if !user.IsCorrectPassword(payload.Password) {
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
  tokenString, err := token.SignedString([]byte(config.AppSecret))
  if err != nil {
    return err
  }

  response := TokenResponse{
    Token: tokenString,
    User: UserResponse{
      Id: user.Base.ID,
      Email: user.Email,
      IsAdmin: user.IsAdmin,
      FullName: user.Fullname,
    },
  }

  return c.JSON(http.StatusOK, response)
}
