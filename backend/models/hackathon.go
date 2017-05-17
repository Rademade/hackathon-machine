package models

type Hackathon struct {
	Base

	IsDone    bool      `json:"is_done" form:"is_done"`
	HeldAt    Timestamp `json:"held_at" form:"held_at"`
	Speaker   User      `json:"speaker"`
	SpeakerID int       `json:"speaker_id" form:"speaker_id"`
	Topic     Topic     `json:"topic"`
	TopicID   int       `json:"topic_id" gorm:"unique_index" form:"topic_id"`
	Materials string    `json:"materials" gorm:"type:text" form:"materials"`
}
