package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"

	"time"
)

type Hackathon struct {
	gorm.Model
	HeldAt    time.Time
	Speaker   User
	SpeakerID int
	Topic     Topic
	TopicID   int    `gorm:"unique_index"`
	Materials string `gorm:"type:text"`
}
