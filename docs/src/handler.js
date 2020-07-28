import * as dom from "./dom.js"
import * as page from "./page.js"
import * as ajax from "./ajax.js"
import * as url from "./url.js"
import * as service from "./service.js"

const showError = (text) => {
	alert(text)
}

export const connect = () => {
	const serverUrlInput = $(dom.containers.connect.serverInput).val()
	if (serverUrlInput.trim().length === 0) {
		showError("invalid url")
		return
	}
	const serverUrl = new url.Url(serverUrlInput)
	ajax.Get(serverUrl.append("connect"), (result) => {
		service.saveServerUrl(serverUrl)
		page.hide(dom.containers.connect.container)
		page.setValue(dom.containers.database.createDatabaseInput, "")
		page.setValue(dom.containers.database.enterDatabaseInput, "")
		page.show(dom.containers.database.container)
	}, (err) => {
		showError("Error: " + err.statusText)
	})

}

export const disconnect = () => {
	page.hide(dom.containers.database.container)
	page.show(dom.containers.connect.container)
}

export const enterDatabase = () => {
	const databaseName = $(dom.containers.database.enterDatabaseInput).val()
	if (databaseName.trim().length === 0) {
		showError("invalid database name")
		return
	}
	const serverUrl = service.getServerUrl()
	ajax.Get(serverUrl.append("database", databaseName), (result) => {
		console.log(result)
	}, (err) => {
		showError("Error: " + err.statusText)
	})
}

export const createDatabase = () => {
	const databaseName = $(dom.containers.database.createDatabaseInput).val()
	if (databaseName.trim().length === 0) {
		showError("invalid database name")
		return
	}
	const serverUrl = service.getServerUrl()
	ajax.Post(serverUrl.append("database"), {"databaseName": databaseName}, (result) => {
		console.log(result)
	}, (err) => {
		showError("Error: " + err.statusText)
	})
}