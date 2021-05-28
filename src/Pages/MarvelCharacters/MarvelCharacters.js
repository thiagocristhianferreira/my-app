import React, { useContext, useEffect, useState } from 'react';
import { Card, Form  } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getCharacters } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';
// import favoriteOff from '../../Images/favorite-off.png';
// import favoriteOn from '../../Images/favorite-on.png';
import './style.css';

const MarvelCharacters = () => {
  const { 
    loading, setLoading,
    characters, setCharacters,
    setTitlePage,
    limitResultsApi, setLimitResultsApi,
    favoriteImg, setFavoriteImg,
    favoritesCharacters, setFavoritesCharacters,
  } = useContext(ContextMarvel);

  // const favoritesCharactersFiltered.filter(item => item.id !== id)
  // Favoriting(id, name, description, extension, path);
  // if (favoritesCharacters.characters.find(item => item.id === id)) {
  //   e.target.currentSrc = favoriteOn;
  // }
  const Favoriting = (e, id, name, description, extension, path) => {
    if (favoritesCharacters) {
      console.log(characters.find(item => item.id === id))
      console.log('entrou')
      if (characters.find(item => item.id === id)) {
        return e.target.currentSrc = favoriteOn;
      }
      return 
      
    }
    return console.log('não entrou');
  }

  console.log(favoritesCharacters);

  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setLoading(false);
    setTitlePage('Marvel Characters');
    const fetchCharacters = async () => {
      const result = await getCharacters(limitResultsApi);
      setCharacters(result);
      console.log(result)
    }
    fetchCharacters();
  }, [limitResultsApi, setCharacters, setLoading, setTitlePage]);

  const fetchLimitCharacters = async () => {
    if (!searchTerm) {
      return false;
    }
    const result = await getCharacters(limitResultsApi);
    setCharacters(result);
  }

  if (loading) {
    return (
      <div className="img-loading">
        <img
          src={ loadingGif }
          alt="Gif de Loading"
        />
      </div>
    )
  }

  const favoriteOn = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBsF0GUiFFlLSvzUPgUfnCVnc7uDdtfuZzVp9gMkj4Cyn-nGu6wLl70m_U-wSsNaWKbo&usqp=CAU';
  const favoriteOff = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpo5DwAcV_dfdjlHL3y6DRslNifKLgqR0dKFQt2Qdax61ssv6IeUPcZtpSAOp9VAgr-Q&usqp=CAU';

  if (!searchTerm) {
    return (
      <section className="w-100 bg-dark d-flex flex-wrap">
        <Navbar />
        <Form.Row className="w-100 mx-auto d-flex">
          <Form.Group className="w-25 p-1">
            <Form.Control
              type="number"
              className="w-100"
              placeholder="1-100"
              max="100"
              min="1"
              onChange={ (e) => {
                e.target.value ? setLimitResultsApi(e.target.value) : setLimitResultsApi(25);
                fetchLimitCharacters(Number(e.target.value));
              } }
            />
          </Form.Group>
          <Form.Group className="w-100 p-1">
            <Form.Control
              type="text"
              className="w-100"
              placeholder="Search Characters"
              onChange={ (e) => setSearchTerm(e.target.value) }
            />
          </Form.Group>
        </Form.Row>
        { 
          characters
            .map((character) => {
              const { name, description, id } = character;
              const { extension, path } = character.thumbnail;
              return (
                <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${path}.${extension}`} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-end">
                      <button key={id}
                        onClick={ (e) => {
                          console.log(id);
                          console.log(e.target.currentSrc);
                          // const favoritesCharactersFiltered.filter(item => item.id !== id)
                          // Favoriting(id, name, description, extension, path);
                          if (favoritesCharacters.characters.find(item => item.id === id)) {
                            e.target.currentSrc = favoriteOn;
                          }
                        } }
                      >
                        <img
                          src={ favoriteImg }
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
    );
  }

  return (
    <section className="w-100 bg-dark d-flex flex-wrap">
      <Navbar />
      <Form.Row className="w-100 mx-auto d-flex">
        <Form.Group className="w-25 p-1">
          <Form.Control
            type="number"
            className="w-100"
            placeholder="1-100"
            max="100"
            min="1"
            onChange={ (e) => {
              setLimitResultsApi(e.target.value);
              fetchLimitCharacters(Number(e.target.value));
            } }
          />
        </Form.Group>
        <Form.Group className="w-100 p-1">
          <Form.Control
            type="text"
            className="w-100"
            placeholder="Search Characters"
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </Form.Group>
      </Form.Row>
      { 
        characters
          .filter(character => (character.name).toLowerCase().startsWith(searchTerm))
          .map((character) => {
            const { name, description, id } = character;
            const { extension, path } = character.thumbnail;
            return (
              <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${path}.${extension}`} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <button
                    onClick={ (id, name, description, extension, path) => {
                      console.log(id);
                      Favoriting(id, name, description, extension, path);
                    } }
                  >
                    <img
                      // src={ favoriteImg ? favoriteOn : favoriteOff }
                      alt="Favorite"
                      style={ { width: "30px" } }
                    />
                  </button>
                  <Card.Text>{ description }</Card.Text>
                </Card.Body>
              </Card>
            )
          })
      }
    </section>
  );
};

export default MarvelCharacters;