package controllers

import (
	"github.com/labstack/echo"
	"net/http"
)

type IndexController interface {
	Index() interface{}
}

type ShowController interface {
	Show(echo.Context) (interface{}, error)
}

type CreateController interface {
	Create(echo.Context) (interface{}, error)
}

type UpdateController interface {
	Update(echo.Context) (interface{}, error)
}

type DestroyController interface {
	Destroy(echo.Context) error
}

type CRUDController interface {
	IndexController
	ShowController
	CreateController
	UpdateController
	DestroyController
}

func Index(ctrl IndexController) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		// Getting claims from JWT example
		// tokenUser := c.Get("user").(*jwt.Token)
		// claims := tokenUser.Claims.(jwt.MapClaims)
		// name := claims["name"].(string)

		records := ctrl.Index()

		return c.JSON(http.StatusOK, records)
	}

}

func Create(ctrl CreateController) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Create(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusCreated, record)
	}

}

func Show(ctrl ShowController) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Show(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, record)
	}
}

func Update(ctrl UpdateController) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Update(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, record)
	}

}

func Destroy(ctrl DestroyController) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		err := ctrl.Destroy(c)
		if err != nil {
			return err
		}

		return c.NoContent(http.StatusNoContent)
	}

}
