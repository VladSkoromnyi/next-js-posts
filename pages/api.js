const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
	const response = await fetch(`${BASE_URL}/posts`);

	switch (true) {
		case response.status === 200:
			return await response.json();
		case response.status === 400:
		case response.status === 500:
			alert('Error');
			break;
		default:
			break;
	}
}

export const deleteRequest = async (postId) => {
	return await fetch(`${BASE_URL}/posts/${postId}`, {
		method: "DELETE"
	});
}

export const changeRequest = async (
	changingId,
	oldUserId,
	oldTitle,
	oldComment,
) => {
	return await fetch(`${BASE_URL}/posts/${changingId}`, {
		method: "PUT",
		body: JSON.stringify({
			userId: oldUserId,
			id: changingId,
			title: oldTitle,
			body: oldComment,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});
}