package models

import (
	"github.com/hackathon-machine/backend/services/encryption"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model

	IsAdmin           bool
	EncryptedPassword string
	Email             string      `gorm:"type:varchar(100);unique_index"`
	password          string      `gorm:"-"`
	TopicsHeld        []Hackathon `gorm:"ForeignKey:SpeakerID"`
	TopicsCreated     []Topic     `gorm:"ForeignKey:CreatorID"`
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
