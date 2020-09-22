// Copyright 2020 Salif Mehmed and contributors
// Licensed under the Anepokis License version 1.0

package main

import (
	"os"

	"codeberg.org/salifm/anepokis/src/anepokis"
)

func main() {
	port := ":8413"
	if len(os.Args) > 1 {
		port = ":" + os.Args[1]
	}
	anepokis.New().Start(port)
}
