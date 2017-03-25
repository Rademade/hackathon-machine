package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model

	ID                uint   `gorm:"primary_key"`
	Email             string `gorm:"type:varchar(100);unique_index"`
	EncryptedPassword string
	IsAdmin           bool
	Votes             []UserVote
}
