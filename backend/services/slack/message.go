package slack

import (
	"fmt"
	"github.com/Rademade/hackathon-machine/backend/config"
	"github.com/Rademade/hackathon-machine/backend/models"
	"golang.org/x/net/websocket"
	"sync/atomic"
)

const MessageType = "message"

var counter uint64

// These are the messages read off and written into the websocket. Since this
// struct serves as both read and write, we include the "Id" field which is
// required only for writing.

type Message struct {
	Id      uint64 `json:"id"`
	Type    string `json:"type"`
	Channel string `json:"channel"`
	Text    string `json:"text"`
}

func getMessage() (m Message, err error) {
	err = websocket.JSON.Receive(ws, &m)

	return
}

func postMessage(m Message) error {
	m.Id = atomic.AddUint64(&counter, 1)

	return websocket.JSON.Send(ws, m)
}

func PostMessage(m string) error {
	message := Message{Text: m, Channel: config.SlackChannel, Type: MessageType}

	return postMessage(message)
}

func postTopicsInfo(m Message) {
	m.Text = "List of topics: \n"

	topics := models.GetAllTopics([]string{"name"})

	for i, topic := range topics {
		m.Text += fmt.Sprintf("%b. %s\n", i+1, topic.Name)
	}

	postMessage(m)
}
