import * as url from "./url.js"

export const saveServerUrl = (serverUrl) => {
	sessionStorage.setItem("serverUrl", serverUrl.toString())
}

export const getServerUrl = () => {
	return new url.Url(sessionStorage.getItem("serverUrl"))
}