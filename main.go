// Copyright 2020 Salif Mehmed
// Licensed under the EUPL

package main

import (
	"os"

	"salifm.com/go/anepokis/web"
)

func main() {
	port := ":8080"
	if len(os.Args) > 1 {
		port = ":" + os.Args[1]
	}
	web.NewWeb().Run(port)
}
