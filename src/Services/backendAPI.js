import axios from 'axios';

export const apiCreate = axios.create({
  baseURL: 'https://marvelapp-dev-back.herokuapp.com/',
});

export const getAPI = () => {
  const result = fetch('https://marvelapp-dev-back.herokuapp.com/')
    .then((response) => response.json())
    .then((result) => result.message);
  return result;
};
