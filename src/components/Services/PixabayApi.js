import axios from 'axios';

const API_KEY = '38060997-efaa6414bf9eafc84e286c70f';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const perPage = 12;

const fetchPixabay = async (query, page) => {
  const { data } = await axios(
    `?key=${API_KEY}&q=${query}&pimage_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`
  );
  return data;
};
export default fetchPixabay;
