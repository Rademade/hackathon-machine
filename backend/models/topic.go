package models

type Topic struct {
	Base
	Name      string   `json:"name"`
	Creator   User     `json:"-"`
	CreatorID int      `json:"creator_id"`
	// Type      int
}

func GetAllTopics(fields []string) []Topic {
	var topics []Topic

	DB.Select(fields).Find(&topics)

	return topics
}
