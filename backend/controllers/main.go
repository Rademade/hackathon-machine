package controllers

import (
	"github.com/labstack/echo"
	"net/http"
)

type Controller interface {
	Index() interface{}
	Show(echo.Context) (interface{}, error)
	Create(echo.Context) (interface{}, error)
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

		record, err := ctrl.Create(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusCreated, record)
	}

}

func Show(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Show(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, record)
	}
}

func Update(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		record, err := ctrl.Update(c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, record)
	}

}

func Destroy(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {

		err := ctrl.Destroy(c)
		if err != nil {
			return err
		}

		return c.NoContent(http.StatusNoContent)
	}

}
