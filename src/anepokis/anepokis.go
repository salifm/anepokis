// Copyright 2020 Salif Mehmed and contributors
// Licensed under the Anepokis License version 1.0

package anepokis

import (
	"plugin"

	"codeberg.org/salifm/anepokis/src/db"
	"codeberg.org/salifm/anepokis/src/service"
	"codeberg.org/salifm/anepokis/src/web"
)

type Anepokis struct {
	web     *web.Web
	db      *db.DB
	service *service.Service
	plugins []*plugin.Plugin
}

func New() *Anepokis {
	var w = web.New()
	var d = db.New()
	var s = service.New()
	return &Anepokis{web: w, db: d, service: s, plugins: make([]*plugin.Plugin, 0)}
}

func (this *Anepokis) Start(port string) {
	this.web.Run(port)
}
