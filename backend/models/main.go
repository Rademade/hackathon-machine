package models

import (
	"github.com/hackathon-machine/backend/config"
	"github.com/jinzhu/gorm"
	// "time"
)

var DB *gorm.DB

func init() {

	DB, _ = gorm.Open("postgres", config.DATABASE_URL)

	// if err != nil {
	//   // do smth
	// }

}
