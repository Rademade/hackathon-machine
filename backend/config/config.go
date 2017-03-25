package config

// db config
import (
	"fmt"
	"os"
)

const DbName = "hmachine"
const DbUser = "postgres"
const DbPass = ""

var AppSecret = os.Getenv("APP_SECRET")

var DATABASE_URL = fmt.Sprintf("host=127.0.0.1 user=%s dbname=%s sslmode=disable password=%s",
	DbUser,
	DbName,
	DbPass)
