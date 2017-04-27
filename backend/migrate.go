package main

import (
	"github.com/Rademade/hackathon-machine/backend/config"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"gopkg.in/gormigrate.v1"
	"log"
	"time"
)

var (
	db gorm.DB
)

func main() {
	db, err := gorm.Open("postgres", config.DATABASE_URL)

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
			ID: "1",
			Migrate: func(tx *gorm.DB) error {
				type Hackathon struct {
					gorm.Model
					HeldAt    time.Time
					SpeakerId int
					TopicID   int
					Materials string
				}
				return tx.AutoMigrate(&Hackathon{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				return tx.DropTable("hackathons").Error
			},
		},
		{
			ID: "2",
			Migrate: func(tx *gorm.DB) error {
				type Topic struct {
					CreatorID int
				}

				return tx.AutoMigrate(&Topic{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				type Topic struct {
					CreatorID int
				}

				return tx.Model(&Topic{}).DropColumn("CreatedID").Error
			},
		},
		{
			ID: "3",
			Migrate: func(tx *gorm.DB) error {
				type UserVote struct {
					UserID  int
					TopicID int
				}

				return tx.AutoMigrate(&UserVote{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				type UserVote struct {
					UserID  int
					TopicID int
				}

				return tx.Model(&UserVote{}).DropColumn("UserID").Error
				return tx.Model(&UserVote{}).DropColumn("TopicID").Error
			},
		},
		{
			ID: "4",
			Migrate: func(tx *gorm.DB) error {
				type Hackathon struct {
					IsDone bool
				}

				return tx.AutoMigrate(&Hackathon{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				type Hackathon struct {
					IsDone bool
				}

				return tx.Model(&Hackathon{}).DropColumn("IsDone").Error
			},
		},
		{
			ID: "5",
			Migrate: func(tx *gorm.DB) error {
				type User struct {
					Fullname string
				}

				return tx.AutoMigrate(&User{}).Error
			},
			Rollback: func(tx *gorm.DB) error {
				type User struct {
					Fullname string
				}

				return tx.Model(&User{}).DropColumn("Fullname").Error
			},
		},
		{
			ID: "6",
			Migrate: func(tx *gorm.DB) error {
				type UserVote struct {
					UserID  int
				}

				return tx.Model(&UserVote{}).AddForeignKey("user_id", "users(id)", "RESTRICT", "RESTRICT").Error
			},
		},
		{
			ID: "7",
			Migrate: func(tx *gorm.DB) error {
				type UserVote struct {
					TopicID  int
				}

				return tx.Model(&UserVote{}).AddForeignKey("topic_id", "topics(id)", "RESTRICT", "RESTRICT").Error
			},
		},
		{
			ID: "8",
			Migrate: func(tx *gorm.DB) error {
				type UserVote struct {
					UserId int
					TopicID  int
				}

				return tx.Model(&UserVote{}).AddUniqueIndex("idx_user_user_id_topic_id", "user_id", "topic_id").Error
			},
		},
		{
			ID: "9",
			Migrate: func(tx *gorm.DB) error {
				type Hackathon struct {
					SpeakerID int
				}

				return tx.Model(&Hackathon{}).AddForeignKey("speaker_id", "users(id)", "RESTRICT", "RESTRICT").Error
			},
		},
		{
			ID: "10",
			Migrate: func(tx *gorm.DB) error {
				type Hackathon struct {
					TopicID   int
				}

				return tx.Model(&Hackathon{}).AddForeignKey("topic_id", "topics(id)", "RESTRICT", "RESTRICT").Error
			},
		},
		{
			ID: "11",
			Migrate: func(tx *gorm.DB) error {
				type Topic struct {
					CreatorID   int
				}

				return tx.Model(&Topic{}).AddForeignKey("creator_id", "users(id)", "RESTRICT", "RESTRICT").Error
			},
		},
	})

	if err = m.Migrate(); err != nil {
		log.Fatalf("Could not migrate: %v", err)
	}
	log.Printf("Migration did run successfully")
}
