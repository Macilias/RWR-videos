import axios from 'axios';

const KEY = 'AIzaSyDZZRxjGwcBJ6JMAN0Ci8Pk7NGMoP2mU94';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});
