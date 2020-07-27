export class Url {
	constructor(url) {
		this.url = new URL(url).href
	}
	append(...a) {
		return this.url + a.join("/")
	}
	toString() {
		return this.url
	}
}