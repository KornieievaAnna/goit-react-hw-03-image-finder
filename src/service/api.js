import axios from 'axios';

const API_KEY = '32996864-5f1a960915a219f7f2c6f1a79';

axios.defaults.baseURL = 'https://pixabay.com/api/';

axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

export async function getImages(name, page) {
  const { data } = await axios.get(`?q=${name}&page=${page}`);
  console.log(data.hits);
  return data.hits;
}
