package slack

import (
	"fmt"
	"log"
	"strings"
)

func StartScan() {
	for {
		// read each incoming message
		m, err := getMessage()

		fmt.Printf("Received message: %s", m)

		if err != nil {
			log.Fatal(err)
		}

		// see if we're mentioned
		if m.Type == "message" && strings.HasPrefix(m.Text, "<@"+id+">") {
			// if so try to parse if
			parts := strings.Fields(m.Text)
			if len(parts) == 2 && parts[1] == "topics" {
				// looks good, get the quote and reply with the result
				go postTopicsInfo(m)
				// NOTE: the Message object is copied, this is intentional
			} else {
				m.Text = fmt.Sprintf("sorry, that does not compute\n")
				postMessage(m)
			}
		}
	}
}
