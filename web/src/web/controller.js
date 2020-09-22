import { hash } from "../service/crypto.js"
import * as url from "../service/url.js"
import * as indexPageService from "../service/indexPageService.js"
import * as homePageService from "../service/homePageService.js"

function TP(n) {
	return "templates/" + n + ".hbs"
}

function Err(n) {
	return "#/{\"error\": \"" + n + "\"}"
}

export function GetIndex(c) {
	const err = c.params.err
	if (err.length > 0) {
		c.err = window.JSON.parse(err).error
	}
	c.partial(TP("index"))
}

export function PostConnect(c) {
	const inputServer = c.params.url
	const inputPassword = c.params.password
	if (inputServer.trim().length === 0) {
		c.redirect(Err("Invalid url!"))
		return
	}
	if (inputPassword.length < 8) {
		c.redirect(Err("Password is too short!"))
		return
	}

	hash(inputPassword, function(pass) {
		const serverUrl = url.from(inputServer)
		indexPageService.PostConnect(serverUrl, pass, function(res) {
			c.redirect(res)
		}, function(res) {
			c.redirect(Err(res))
		})
		
	}, function(err) {
		c.redirect(Err(err.toString()))
	})
}

export function GetHome(c) {
	c.url = homePageService.getServerUrl()
	c.password = homePageService.getPassword()
	c.partial(TP("home"))
}
