package models

import (
	// "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"time"
)

type UserVote struct {
	Base

	VotedAt time.Time
	Vote    int
	User    User
	UserId  int
	Topic   Topic
	TopicId int
}
