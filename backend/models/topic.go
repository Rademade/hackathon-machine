package models

type Topic struct {
	Base
	Name      string
	Creator   User
	CreatorID int
	// Type      int
}

func GetAllTopics(fields []string) []Topic {
	var topics []Topic

	DB.Select(fields).Find(&topics)

	return topics
}
