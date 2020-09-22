export function hash(input, done, fail) {
	window.crypto.subtle.digest(
		'SHA-256', new TextEncoder().encode(input)
	).then(function(res) {
		done(Array
				.from(new Uint8Array(res))
				.map(b => b.toString(16)
				.padStart(2, '0'))
				.join(''))
	}).catch(fail)
}
