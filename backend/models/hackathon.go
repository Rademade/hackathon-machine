package models

import (
	_ "github.com/jinzhu/gorm/dialects/postgres"

	"time"
)

type Hackathon struct {
	Base

	IsDone    bool      `json:"is_done"`
	HeldAt    time.Time `json:"held_at"`
	Speaker   User      `json:"-"`
	SpeakerID int       `json:"speaker_id"`
	Topic     Topic     `json:"topic"`
	TopicID   int       `json:"topic_id" gorm:"unique_index"`
	Materials string    `json:"materials" gorm:"type:text"`
}
