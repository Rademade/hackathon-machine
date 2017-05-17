package config

// db config
import (
	"fmt"
	"os"
)

var AppSecret = os.Getenv("APP_SECRET")

var DbName = os.Getenv("POSTGRES_DB")
var DbUser = os.Getenv("POSTGRES_USER")

var DATABASE_URL = fmt.Sprintf("host=db user=%s dbname=%s sslmode=disable",
	DbUser,
	DbName)
