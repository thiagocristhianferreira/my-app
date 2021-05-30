import React, { useContext, useState } from 'react';

import favoriteOff from '../../Images/favorite-off.png';
import favoriteOn from '../../Images/favorite-on.png';
import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/Authcontext';

const FavoriteComicsButton = (props) => {
  const { user } = useContext(AuthContext);

  const [favoriteOnOff, setFavoriteOnOff] = useState(false);

  const {
    id, title, description, thumbnail: { extension, path }
  } = props.favorite;

  const desc = description ? description : 'nenhuma descrição até o momento'

  const data = {
    id, title, desc, thumbnail: { extension, path }
  }
  
  const favoriting = () => {
    const fav = JSON.parse(localStorage.getItem('favoritesComics'));
    if (fav) {
      if (fav.find(item => item.id === id)) {
        const favoritesFiltered = fav
          .filter((item) => item.id !== id);
        localStorage.setItem(
          'favoritesComics',
          JSON.stringify(favoritesFiltered),
        );
        authConfig.firestore().collection('favorites')
          .doc(user.uid).set({ favoritesComics: (favoritesFiltered) });
        return setFavoriteOnOff(false);
      } else {
        localStorage.setItem(
          'favoritesComics',
          JSON.stringify([...fav, data]),
        );
        console.log([...fav, data])
        authConfig.firestore().collection('favorites')
          .doc(user.uid).set({ favoritesComics: ([...fav, data]) });
        console.log([...fav, data])
        return setFavoriteOnOff(true);
      }
    } else {
      localStorage.setItem(
        'favoritesComics',
        JSON.stringify([data]),
      );
      authConfig.firestore().collection('favorites')
          .doc(user.uid).set({ favoritesComics: ([data]) });
      return setFavoriteOnOff(true);
    }
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
