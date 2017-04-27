package config

// db config
import (
	"fmt"
	"os"
)

var AppSecret = os.Getenv("APP_SECRET")

var DbName = os.Getenv("POSTGRES_DB")
var DbUser = os.Getenv("POSTGRES_USER")

var DATABASE_URL = fmt.Sprintf("postgresql://%s@db:5432/%s?connect_timeout=5&sslmode=disable",
	DbUser,
	DbName)
