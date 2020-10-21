export const SERVER_URL = "SERVER_URL"
export const PASSWORD = "PASSWORD"

export function get(key) {
	return window.sessionStorage.getItem(key)
}

export function set(key, value) {
	return window.sessionStorage.setItem(key, value)
}
