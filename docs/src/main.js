import * as dom from "./dom.js"
import * as handler from './handler.js'

$(document).ready(() => {
	$(dom.containers.connect.connectButton).click(handler.connect)
	$(dom.containers.database.disconnectButton).click(handler.disconnect)
	$(dom.containers.database.enterDatabaseButton).click(handler.enterDatabase)
	$(dom.containers.database.createDatabaseButton).click(handler.createDatabase)
})
