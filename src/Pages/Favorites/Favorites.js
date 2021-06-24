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
    verifyToken();
  }, [setLoading, setTitlePage]);

  const verifyToken = async () => {
    const token = JSON.parse(localStorage.getItem('token')).token;

    const response = await fetch('https://marvelapp-dev-back.herokuapp.com/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    const res = await response.json();
    return res;
  }

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
