package models

import (
	"github.com/hackathon-machine/backend/services/encryption"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model

	IsAdmin           bool        `json:"is_admin"`
	Fullname          string      `json:"full_name"`
	EncryptedPassword string      `json:"-"`
	Email             string      `json:"email", gorm:"type:varchar(100);unique_index"`
	password          string      `json:"-", gorm:"-"`
	TopicsHeld        []Hackathon `json:"-", gorm:"ForeignKey:SpeakerID"`
	TopicsCreated     []Topic     `json:"-", gorm:"ForeignKey:CreatorID"`
	Votes             []UserVote  `json:"-"`
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
