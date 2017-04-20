package models

import (
	"github.com/hackathon-machine/backend/services/encryption"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	Base

	IsAdmin           bool        `json:"is_admin"`
	Fullname          string      `json:"full_name,omitempty"`
	EncryptedPassword string      `json:"-"`
	Email             string      `json:"email" gorm:"type:varchar(100);unique_index"`
	Password          string      `json:"password" sql:"-"`
	TopicsHeld        []Hackathon `json:"-" gorm:"ForeignKey:SpeakerID"`
	TopicsCreated     []Topic     `json:"-" gorm:"ForeignKey:CreatorID"`
	Votes             []UserVote  `json:"-"`
}

func (u *User) BeforeSave() (err error) {

	if u.Password != "" {
		u.EncryptedPassword = encryption.Encrypt(u.Password)
	}

	return
}

func (u *User) IsCorrectPassword(password string) bool {
	return encryption.CompareHashAndPassword(u.EncryptedPassword, password)
}
