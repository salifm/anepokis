export const GET = "GET"
export const POST = "POST"

export function ajax({url, method, data, done, fail}) {
	window.fetch(url, {
		method: method,
		headers: {
			"Content-Type": "application/json"
		},
		credentials: "omit",
		cache: "no-cache",
		body: window.JSON.stringify(data)})
	.then(res => res.json())
	.then(res => {
		done(res)
	})
	.catch(err => {
		fail(err)
	});
}
