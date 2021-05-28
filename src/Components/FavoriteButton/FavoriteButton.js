import React, { useState } from 'react';

import favoriteOff from '../../Images/favorite-off.png';
import favoriteOn from '../../Images/favorite-on.png';

const FavoriteButton = (props) => {
  const [favoriteOnOff, setFavoriteOnOff] = useState(false);

  const Favoriting = () => {
    console.log(props.favorite)
  const {
    id, name, description, thumbnail: { extension, path }
  } = props.favorite;

  const data={
    id, name, description, thumbnail: { extension, path }
  }

  const fav = JSON.parse(localStorage.getItem('favoritesCharacters'));

  if (fav) {
    console.log(fav.find(item => item.id === id));
    if (fav.find(item => item.id === id)) {
      const favoritesCharactersFiltered = fav
        .filter((item) => item.id !== id);
      localStorage.setItem(
        'favoritesCharacters',
        JSON.stringify(favoritesCharactersFiltered),
      );
      return setFavoriteOnOff(false);
    } else {
      localStorage.setItem(
        'favoritesCharacters',
        JSON.stringify([...fav, data]),
      );
      return setFavoriteOnOff(true);
    }
  } else {
    localStorage.setItem(
      'favoritesCharacters',
      JSON.stringify([data]),
    );
    return setFavoriteOnOff(true);
  }
}

  return (
    <div>
      <button
        onClick={ () => {
          Favoriting();
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

export default FavoriteButton;
