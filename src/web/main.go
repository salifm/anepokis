// Copyright 2020 Salif Mehmed
// Licensed under the EUPL

package web

import (
	"database/sql"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Web struct {
	c *sql.DB
	r *gin.Engine
	f map[string]F
}

func NewWeb() *Web {
	r := gin.Default()
	r.Use(cors.Default())
	r.Static("/docs", "./docs")
	f := make(map[string]F, 0)
	w := Web{c: nil, r: r, f: f}
	w.SetupF()
	w.SetupRouter()
	return &w
}

func (this *Web) Run(port string) {
	this.r.Run(port)
}
