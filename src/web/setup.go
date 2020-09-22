// Copyright 2020 Salif Mehmed and contributors
// Licensed under the Anepokis License version 1.0

package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (this *Web) SetupRouter() {
	r := this.r.Group("v1")
	r.POST("/connect", this.PostConnect)
}

type connectRuqest struct {
	Password string `json:"password"`
}

func (this Web) PostConnect(c *gin.Context) {
	// TODO this should check if there is database connection
	var conn connectRuqest
	c.BindJSON(&conn)
	c.JSON(http.StatusOK, gin.H{"connected": 1})
}
