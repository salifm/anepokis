export const Get = (url, done, fail) => {
	return $.ajax({
		url: url,
		type: 'GET',
		crossDomain: true,
		dataType: 'json'
	}).done(done).fail(fail);
}

export const Post = (url, data, done, fail) => {
	return $.ajax({
		url: url,
		data: data,
		type: 'POST',
		crossDomain: true,
		dataType: 'json'
	}).done(done).fail(fail);
}

