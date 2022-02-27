import axios from 'axios';
import { getUrl, getTimeout } from '../../config/configHelper';
const LIMIT = 25;
const HOST_NAME = "giphy";
const SEARCH_API = "search";
const TREANDING_API = "trending";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const URL = getUrl(HOST_NAME);


export const getSearchedGifs = (query, offset) => {
    return axios.get(`${URL}/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}&offset=${offset}&rating=g&lang=en`,
        {
            timeout: getTimeout(HOST_NAME, SEARCH_API),
        }
    )
};

export const getTrendingGifs = (offset) => {
    console.log(URL, API_KEY, getTimeout(HOST_NAME, TREANDING_API));
    return axios.get(`${URL}/trending?api_key=${API_KEY}&limit=${LIMIT}&rating=g&offset=${offset}`,
        {
            timeout: getTimeout(HOST_NAME, TREANDING_API),
        }
    )
};