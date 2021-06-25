import React, { useState } from 'react';

import favoriteOff from '../../Images/favorite-off.png';
import favoriteOn from '../../Images/favorite-on.png';

const FavoriteCharactersButton = (props) => {
  const [favoriteOnOff, setFavoriteOnOff] = useState(false);

  const {
    id, name, description, thumbnail: { extension, path }
  } = props.favorite;
  const desc = description ? description : 'nenhuma descrição até o momento'
  const data = {
    id, name, desc, thumbnail: { extension, path }
  }

  const favoriting = () => {
    const fav = JSON.parse(localStorage.getItem('favoritesCharacters'));
    if (fav) {
      if (fav.find(item => item.id === id)) {
        const favoritesFiltered = fav
          .filter((item) => item.id !== id);
        localStorage.setItem('favoritesCharacters', JSON.stringify(favoritesFiltered));
        postFavoritesCharacters(favoritesFiltered);
        return setFavoriteOnOff(false);
      } else {
        localStorage.setItem('favoritesCharacters', JSON.stringify([...fav, data]));
        postFavoritesCharacters([...fav, data])
        return setFavoriteOnOff(true);
      }
    } else {
      localStorage.setItem('favoritesCharacters', JSON.stringify([data]));
      postFavoritesCharacters([data]);
      return setFavoriteOnOff(true);
    }
  }

  const postFavoritesCharacters = async (array) => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const headers = new fetch.Headers({
      'Content-Type': 'application/json',
      'Authorization': token,
    });

    const body = JSON.stringify(array);

    const response = await fetch('https://marvelapp-dev-back.herokuapp.com/favoritescharacters', {
      method: 'POST',
      headers,
      body,
    });
    return await response.json()
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <button
        onClick={ () => {
          favoriting();
          } }
      >
        <img
          src={ favoriteOnOff ? favoriteOn : favoriteOff }
          alt="Favorite"
          style={ { width: "30px" } }
        />
      </button>
    </div>
  );
}

export default FavoriteCharactersButton;
