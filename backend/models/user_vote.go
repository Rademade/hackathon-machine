package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"time"
)

type UserVote struct {
	gorm.Model
	VotedAt time.Time
	User    User
	Vote    int
}
