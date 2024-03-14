import axios from 'axios';
const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

// export const fetchArticlesWithTopic = async topic => {
//   const response = axios.get(`/search?query=${topic}`);
//   return response.data.hits;
// };

async function fetchArticlesWithTopic(topic) {
  const response = await axios.get(`search?query=${topic}`);
  console.log(response.data.photos);
  return response.data.photos;
}

export default fetchArticlesWithTopic;
