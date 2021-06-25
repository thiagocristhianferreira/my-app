import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { AuthContext } from '../../auth/Authcontext';
import favoriteOn from '../../Images/favorite-on.png';

const FavoriteCharacterComponent = () => {
  const { 
    loading, setLoading,
    setTitlePage,
  } = useContext(ContextMarvel);

  const { user } = useContext(AuthContext);

  const [favoritesComics, setFavoritesComics] = useState([]);

  useEffect(() => {
    fetchFavoritesComics();
    setTitlePage('Favoritos');
    setLoading(false);
  }, [setLoading, setTitlePage, user.uid]);

  const fetchFavoritesComics = async () => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const response = await fetch('https://marvelapp-dev-back.herokuapp.com/favoritescomics', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    
    const result = await response.json();

    console.log(result.favoritesComics);

    return setFavoritesComics(result.favoritesComics);
  }

  const postFavoritesComics = async (array) => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const headers = new fetch.Headers({
      'Content-Type': 'application/json',
      'Authorization': token,
    });

    const body = JSON.stringify(array);

    const response = await fetch('https://marvelapp-dev-back.herokuapp.com/favoritescomics', {
      method: 'POST',
      headers,
      body,
    });
    return await response.json()
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
    <div>
      <h1>Favavorites Comics</h1>
      <section className="w-100 bg-dark d-flex flex-wrap">
        {
          !favoritesComics ? <h4>Nenhum Personagem Favoritado até o momento</h4> : (
            favoritesComics
            .map((character) => {
              const { title, description, id } = character;
              const { extension, path } = character.thumbnail;
              return (
                <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${path}.${extension}`} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-end">
                    <button
                      onClick={ () => {
                        const favoritesFiltered = favoritesComics
                          .filter((item) => item.id !== id);
                        setFavoritesComics(favoritesFiltered);
                        return postFavoritesComics(favoritesFiltered);
                      } }
                    >
                      <img
                        src={ favoriteOn }
                        alt="Favorite"
                        style={ { width: "30px" } }
                      />
                    </button>
                    </Card.Subtitle>
                    <Card.Text>{ description }</Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          )
        }
      </section>
    </div>
  );
  
}

export default FavoriteCharacterComponent;
