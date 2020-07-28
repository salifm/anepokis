// Copyright 2020 Salif Mehmed
// Licensed under the EUPL

package web

import (
	"database/sql"
	"encoding/base64"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func (this *Web) SetupRouter() {

	this.r.POST("/internal/connect", func(c *gin.Context) {
		// TODO improve the security
		user := c.DefaultPostForm("user", "root")
		pass, err := base64.StdEncoding.DecodeString(c.DefaultPostForm("pass", ""))
		db := c.DefaultPostForm("db", "")
		host := c.DefaultPostForm("host", "127.0.0.1")
		port := c.DefaultPostForm("port", "3306")
		if err != nil {
			c.String(http.StatusBadRequest, err.Error())
			return
		}
		con, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", user, string(pass), host, port, db))
		defer con.Close()
		if err != nil {
			c.String(http.StatusBadRequest, err.Error())
			return
		}
		this.c = con
		err = con.Ping()
		if err != nil {
			c.String(http.StatusUnauthorized, err.Error())
			return
		}
		c.String(http.StatusOK, "ok")
	})

	this.r.GET("/connect", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"connected": 1})
	})

}
