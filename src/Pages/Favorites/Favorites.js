import React, { useContext, useEffect } from 'react';

import Navbar from '../../Components/NavBar/NavBar';
import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import FavoriteCharacterComponent from '../../Components/FavoriteCharactersComponent/FavoriteCharacterComponent';
import FavoriteComicComponent from '../../Components/FavoriteComicComponent/FavoriteComicComponent';

const Favorites = () => {
  const { 
    loading, setLoading,
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
    <section className="w-100 bg-dark d-block">
      <Navbar />
      <FavoriteCharacterComponent className="d-block flex-wrap" />
      <FavoriteComicComponent className="d-block flex-wrap" />
    </section>
  );
  
}

export default Favorites;
