package main

import (
	"fmt"
	"github.com/hackathon-machine/backend/config"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"gopkg.in/gormigrate.v1"
	"log"
	"time"
)

var (
	db gorm.DB
)

var connectStr = fmt.Sprintf("host=127.0.0.1 user=%s dbname=%s sslmode=disable password=%s",
	config.DbUser,
	config.DbName,
	config.DbPass)

func main() {
	db, err := gorm.Open("postgres", connectStr)

	if err != nil {
		log.Fatal(err)
	}

	if err = db.DB().Ping(); err != nil {
		log.Fatal(err)
	}

	db.LogMode(true)

	m := gormigrate.New(db, gormigrate.DefaultOptions, []*gormigrate.Migration{
		{
			ID: "201608301400",
			Migrate: func(tx *gorm.DB) error {
				type User struct {
					gorm.Model

					Email             string `gorm:"type:varchar(100);unique_index"`
					EncryptedPassword string
					IsAdmin           bool
				}
				return tx.AutoMigrate(&User{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.DropTable("users").Error
			},
		},
		{
			ID: "201608301415",
			Migrate: func(tx *gorm.DB) error {
				type User struct {
					gorm.Model
				}
				type UserVote struct {
					gorm.Model
					VotedAt time.Time
					User    User
					Vote    int
				}
				return tx.AutoMigrate(&UserVote{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.DropTable("user_votes").Error
			},
		},
		{
			ID: "201608301430",
			Migrate: func(tx *gorm.DB) error {

				type User struct {
					gorm.Model
				}
				type Topic struct {
					gorm.Model
					Name    string
					Creator User
				}
				return tx.AutoMigrate(&Topic{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.DropTable("topics").Error
			},
		},
		{
			ID: "201608301430",
			Migrate: func(tx *gorm.DB) error {

				type User struct {
					gorm.Model
				}

				type Hackathon struct {
					gorm.Model
					HeldAt  time.Time
					Speaker User
				}
				return tx.AutoMigrate(&Hackathon{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.DropTable("hackathons").Error
			},
		},
	})

	if err = m.Migrate(); err != nil {
		log.Fatalf("Could not migrate: %v", err)
	}
	log.Printf("Migration did run successfully")
}
