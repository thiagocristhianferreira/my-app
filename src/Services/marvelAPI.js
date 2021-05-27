const md5 = require("md5");
const fetch = require("node-fetch");
const timestamp = Math.floor(Date.now() / 1000);
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const hash = md5(timestamp + privateKey + publicKey);
const baseURLcharacters = "https://gateway.marvel.com:443/v1/public/characters?ts=";
const baseURLcomics = "https://gateway.marvel.com:443/v1/public/comics?ts=";

export const getCharacters = () => {
  const result = fetch(
    `${baseURLcharacters}${timestamp}&apikey=${publicKey}&hash=${hash}`,
  )
    .then((response) => response.json())
    .then((result) => (result.data.results));
  return result;
};

export const getComics = () => {
  const result = fetch(
    `${baseURLcomics}${timestamp}&apikey=${publicKey}&hash=${hash}`,
  )
    .then((response) => response.json())
    .then((result) => (result.data.results));
  return result;
};
