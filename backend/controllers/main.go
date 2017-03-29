package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/labstack/echo"
	"net/http"
)

type Controller interface {
	Index() interface{}
	Show(echo.Context) error
	Create(echo.Context) error
	Update(echo.Context) error
	Destroy(echo.Context) error
}

func Index(ctrl Controller) echo.HandlerFunc {

	//TODO: auth || hooks

	return func(c echo.Context) error {
		records := ctrl.Index()

		fmt.Println("Records fetched")

		c.Response().Header().Set(echo.HeaderContentType, echo.MIMEApplicationJSONCharsetUTF8)
		c.Response().WriteHeader(http.StatusOK)

		fmt.Println("Headers written")

		return json.NewEncoder(c.Response()).Encode(records)
	}

}
