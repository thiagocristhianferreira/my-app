import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { authConfig } from '../../auth/config';
import { AuthContext } from '../../auth/Authcontext';
import favoriteOn from '../../Images/favorite-on.png';

const FavoriteCharacterComponent = () => {
  const { 
    loading, setLoading,
    setTitlePage,
  } = useContext(ContextMarvel);

  const { user } = useContext(AuthContext);

  const [favoritesCharacters, setFavoritesCharacters] = useState([]);

  useEffect(() => {
    // authConfig.firestore().collection('favoritesCharacters').doc(user.uid)
    //   .onSnapshot((doc) => setFavoritesCharacters(doc.data().favoritesCharacters));
    setTitlePage('Favoritos');
    setLoading(false);
  }, [setLoading, setTitlePage, user.uid]);

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

  if (!favoritesCharacters) {
    return (
      <div>
        <h1>Favavorites Characters</h1>
        <h4>Nenhum Personagem Favoritado até o momento</h4>
      </div>
    );
  }

  return (
    <div>
      <h1>Favavorites Characters</h1>
      <section className="w-100 bg-dark d-flex flex-wrap">
        { 
          favoritesCharacters
            .map((character) => {
              const { name, description, id } = character;
              const { extension, path } = character.thumbnail;
              return (
                <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${path}.${extension}`} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-end">
                    <button
                      onClick={ () => {
                        const favoritesFiltered = favoritesCharacters
                          .filter((item) => item.id !== id);
                        return authConfig.firestore().collection('favoritesCharacters')
                          .doc(user.uid).set({ favoritesCharacters: favoritesFiltered, });
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
        }
      </section>
    </div>
  );
  
}

export default FavoriteCharacterComponent;
