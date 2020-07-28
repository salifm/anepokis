package web

import (
	"salifm.com/go/bgcf"
)

type F func(host string, url string) ([]string, error)

func (this *Web) SetupF() {
	this.addHF(bgcf.Hosts, bgcf.Comments)
}

func (this *Web) addMHF(newFs map[string]F) {
	for k, v := range newFs {
		this.f[k] = v
	}
}

func (this *Web) addHF(hosts []string, f F) {
	for _, k := range hosts {
		this.f[k] = f
	}
}
