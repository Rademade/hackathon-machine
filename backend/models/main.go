package models

import (
	"github.com/hackathon-machine/backend/config"
	"github.com/jinzhu/gorm"
	"time"
)

type Timestamp time.Time

func (t *Timestamp) UnmarshalParam(src string) error {
	ts, err := time.Parse(time.RFC3339, src)
	*t = Timestamp(ts)
	return err
}

var DB *gorm.DB

type Base struct {
	ID        int       `json:"id"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

func init() {

	DB, _ = gorm.Open("postgres", config.DATABASE_URL)

}
