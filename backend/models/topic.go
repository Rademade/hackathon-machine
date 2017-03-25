package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type Topic struct {
	gorm.Model
	Name    string
	Creator User
}
