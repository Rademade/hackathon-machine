package models

import (
    "github.com/jinzhu/gorm"
    _ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
  gorm.Model
	Email string
	EncryptedPassword string
}
