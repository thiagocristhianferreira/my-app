import React, { useContext, useEffect, useState } from 'react';

import favoriteOff from '../../Images/favorite-off.png';
import favoriteOn from '../../Images/favorite-on.png';
import ContextMarvel from '../../Context/ContextMarvel';

const FavoriteComicsButton = (props) => {

  const { 
    favoritePage,
  } = useContext(ContextMarvel);

  const [favoriteOnOff, setFavoriteOnOff] = useState(false);

  useEffect(() => {
    if (favoritePage) return setFavoriteOnOff(false);
  }, [favoritePage]);


  const {
    id, title, description, thumbnail: { extension, path }
  } = props.favorite;

  const desc = description ? description : 'nenhuma descrição até o momento'

  const data = {
    id, title, desc, thumbnail: { extension, path }
  }

  useEffect(() => {
    const fetchFavoritesComics = async () => {
      const token = await JSON.parse(localStorage.getItem('token')).token;
  
      const response = await fetch(`${process.env.REACT_APP_FETCH}favoritescomics`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
      const result = await response.json();

      localStorage.setItem('favoritesComics', JSON.stringify(result));
      
      const favorited = await result.map((res) => res.id);
      const verifFavorites = await favorited.includes(props.favorite.id);
      if (verifFavorites) return setFavoriteOnOff(true);
      return result.favoritesComics;
    }
    fetchFavoritesComics();
  }, [props.favorite.id]);

  const favoriting = () => {
    const fav = JSON.parse(localStorage.getItem('favoritesComics'));
    if (fav) {
      if (fav.find(item => item.id === id)) {
        const favoritesFiltered = fav
          .filter((item) => item.id !== id);
        localStorage.setItem('favoritesComics', JSON.stringify(favoritesFiltered));
        postFavoritesComics(favoritesFiltered);
        return setFavoriteOnOff(false);
      } else {
        localStorage.setItem('favoritesComics', JSON.stringify([...fav, data]));
        postFavoritesComics([...fav, data]);
        return setFavoriteOnOff(true);
      }
    } else {
      localStorage.setItem('favoritesComics', JSON.stringify([data]));
      postFavoritesComics([data]);
      return setFavoriteOnOff(true);
    }
  }

  const postFavoritesComics = async (array) => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const headers = new fetch.Headers({
      'Content-Type': 'application/json',
      'Authorization': token,
    });

    const body = JSON.stringify(array);

    const response = await fetch(`${process.env.REACT_APP_FETCH}favoritescomics`, {
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

export default FavoriteComicsButton;
