// Copyright 2020 Salif Mehmed and contributors
// Licensed under the Anepokis License version 1.0

package db

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/lib/pq"
)

type DB struct {
	db *sql.DB
}

func New() *DB {
	db, err := sql.Open(os.Getenv("A_DB_NAME"), fmt.Sprintf(os.Getenv("A_DB_STRING")))
	defer db.Close()
	if err != nil {
		fmt.Println("Error: " + err.Error())
	}
	_, err2 := db.Query("SELECT 1;")
	if err2 != nil {
		panic("Error: " + err2.Error())
	}
	return &DB{db: db}
}
