const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const dataFromServer = async () => {
	const response = await fetch(`${BASE_URL}/posts`);
	return await response.json();
}