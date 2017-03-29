package models

import (
	"github.com/hackathon-machine/backend/config"
	"github.com/jinzhu/gorm"
	"time"
)

var DB *gorm.DB

type Base struct {
	ID        int       `json:"id"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}

func init() {

	DB, _ = gorm.Open("postgres", config.DATABASE_URL)

}
