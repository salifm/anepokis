export function from(url) {
	return new window.URL(url).href
}

export function append(url, ...a) {
	return url + a.join("/")
}
