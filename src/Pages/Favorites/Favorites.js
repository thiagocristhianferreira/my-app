import React, { useContext, useEffect } from 'react';

import Navbar from '../../Components/NavBar/NavBar';
import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import FavoriteCharacterComponent from '../../Components/FavoriteCharactersComponent/FavoriteCharacterComponent';
import FavoriteComicComponent from '../../Components/FavoriteComicComponent/FavoriteComicComponent';

const Favorites = () => {
  const { 
    loading, setLoading,
    // favoritePage, setFavoritePage,
    setTitlePage,
  } = useContext(ContextMarvel);

  useEffect(() => {
    setTitlePage('Favoritos');
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <img
        style={{
          display: "block",
          marginTop: "15%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "20%"
        }}
        src={ loadingGif }
        alt="Gif de Loading"
      />
    )
  }
  return (
    <section className="w-100 bg-dark d-flex flex-wrap">
      <Navbar />
      <FavoriteCharacterComponent />
      <FavoriteComicComponent />
    </section>
  );
  
}

export default Favorites;
