package controllers

import (
	"github.com/labstack/echo"
	"net/http"
)

type Controller interface {
	Index() interface{}
	Show(echo.Context) error
	Create(echo.Context) interface{}
	Update(echo.Context) (interface{}, error)
	Destroy(echo.Context) error
}

func Index(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {
		records := ctrl.Index()

		return c.JSON(http.StatusOK, records)
	}

}

func Create(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record := ctrl.Create(c)

		return c.JSON(http.StatusCreated, record)
	}

}

func Update(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Update(c)

		if err != nil {
			return err
		}

		return c.JSON(http.StatusCreated, record)
	}

}
