import axios from 'axios';


const url = '';


const get = (path) => {
  return axios.get(`${url}/${path}`);
}

const post = (path, data) => {
  return axios.post(`${url}/${path}`, {...data});
}

const update = (path, data) => {
  return axios.put(`${url}/${path}`, {...data});
}

const remove = (path, id) => {
  return axios.delete(`${url}/${path}`, {id: id});
}

export default { url, get, post, update, remove };
