package models

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type Topic struct {
	gorm.Model
	Name      string
	Creator   User
	CreatorID int
	Type      int
}

func GetAllTopics(fields []string) []Topic {
	var topics []Topic

	DB.Select(fields).Find(&topics)

	return topics
}
