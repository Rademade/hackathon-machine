package encryption

import (
	"golang.org/x/crypto/bcrypt"
)

// encrypt string to base64 crypto using AES
func Encrypt(password string) string {

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}
	return string(hashedPassword)
}

func CompareHashAndPassword(encryptedPassword string, password string) bool {
	// Comparing the password with the hash
	err := bcrypt.CompareHashAndPassword([]byte(encryptedPassword), []byte(password))

	if err != nil {
		return false
	}

	return true
}
