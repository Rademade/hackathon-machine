package models

import (
    "github.com/jinzhu/gorm"
    _ "github.com/jinzhu/gorm/dialects/postgres"
)

type UserVote struct {
  gorm.Model
	UserId int
	Vote int
}
