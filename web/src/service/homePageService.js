import * as db from "../db/db.js"

export function getServerUrl() {
	return db.get(db.SERVER_URL)
}

export function getPassword() {
	return db.get(db.PASSWORD)
}
