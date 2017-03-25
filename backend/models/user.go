package models

import (
	"github.com/hackathon-machine/backend/services/encryption"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model

	Email             string `gorm:"type:varchar(100);unique_index"`
	EncryptedPassword string
	password          string `gorm:"-"`
	IsAdmin           bool
	Votes             []UserVote
}

func (u *User) BeforeSave() (err error) {

	if u.password != "" {
		u.EncryptedPassword = encryption.Encrypt(u.password)
	}

	return
}

func (u *User) IsCorrectPassword(pass string) bool {

	return u.password == encryption.Encrypt(pass)

}
