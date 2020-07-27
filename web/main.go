package web

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Web struct {
	r *gin.Engine
}

func NewWeb() *Web {
	r := gin.Default()
	r.Use(cors.Default())
	w := Web{r: r}
	w.SetupRouter()
	return &w
}

func (this *Web) Run(port string) {
	this.r.Run(port)
}
