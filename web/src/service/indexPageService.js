import * as ajax from "../service/ajax.js"
import * as db from "../db/db.js"
import * as url from "./url.js"

export function PostConnect(serverUrl, pass, done, fail) {
	ajax.ajax({
		url: url.append(serverUrl, "connect"),
		method: ajax.POST,
		data: { "password": pass },
		done: function (res) {
			if (res["connected"] === 1) {
				db.set(db.SERVER_URL, serverUrl.toString())
				db.set(db.PASSWORD, pass)
				done("#/home")
			} else {
				fail("Not connected!")
			}
		},
		fail: function (err) {
			fail("Can not connect! Message: " + err.toString())
		}
	})
}
