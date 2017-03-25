package controllers

import (
	"github.com/labstack/echo"
)

type Controller interface {
	Index(echo.Context) error
	Show(echo.Context) error
	Create(echo.Context) error
	Update(echo.Context) error
	Destroy(echo.Context) error
}
