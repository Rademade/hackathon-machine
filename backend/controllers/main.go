package controllers

import (
	"github.com/labstack/echo"
	"net/http"
)

type Controller interface {
	Index() interface{}
	Show(echo.Context) error
	Create(interface{}) interface{}
	Update(echo.Context) error
	Destroy(echo.Context) error

	newResource() interface{}
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

		r := ctrl.newResource()

		if err := c.Bind(r); err != nil {
			return err
		}

		record := ctrl.Create(c)

		return c.JSON(http.StatusCreated, record)
	}

}
