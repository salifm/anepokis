// Copyright 2020 Salif Mehmed and contributors
// Licensed under the Anepokis License version 1.0

package web

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Web struct {
	r *gin.Engine
}

func New() *Web {
	var r = gin.Default()
	r.Use(cors.Default())
	var web = &Web{r: r}
	web.SetupRouter()
	return web
}

func (this *Web) Run(port string) {
	this.r.Run(port)
}
