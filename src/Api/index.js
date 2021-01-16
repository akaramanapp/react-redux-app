import axios from 'axios';
import { POST_URL } from '../Config/path'

export const fetch_post = () => {
	return axios.get(POST_URL);
};