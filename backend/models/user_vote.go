package models

import (
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"time"
)

type UserVote struct {
	Base

	VotedAt time.Time	`json:"-"`
	Vote    float64         `json:"vote"`
	User    User            `json:"-"`
	UserId  int             `json:"user_id"`
	Topic   Topic           `json:"-"`
	TopicId int             `json:"topic_id"`
}

func (uv *UserVote) BeforeCreate() (err error) {

	uv.VotedAt = time.Now()

	return
}
