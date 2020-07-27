package web

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (this *Web) SetupRouter() {

	this.r.GET("/connect", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"connected": 1})
	})

}
