import React, { useContext, useEffect, useState } from 'react';
import { Card, Form  } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getCharacters } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';
import './style.css';
import FavoriteCharactersButton from '../../Components/FavoriteCharactersButton/FavoriteCharactersButton';
import { AuthContext } from '../../auth/Authcontext';

const MarvelCharacters = () => {
  const { 
    loading, setLoading,
    characters, setCharacters,
    setTitlePage,
    limitResultsApi, setLimitResultsApi,
    setOnOff,
  } = useContext(ContextMarvel);

  const { setUser } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setTitlePage('Marvel Characters');
    const fetchCharacters = async () => {
      const result = await getCharacters(limitResultsApi);
      setCharacters(result);
      setLoading(false);
    }
    fetchCharacters();
    verifyToken();
  }, [limitResultsApi, setCharacters, setLoading, setTitlePage]);

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
  
  const fetchLimitCharacters = async () => {
    if (!searchTerm) {
      return false;
    }
    const result = await getCharacters(limitResultsApi);
    setCharacters(result);
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

  if (!searchTerm) {
    return (
      <section className="w-100 bg-dark d-flex flex-wrap">
        <Navbar />
        <Form.Row className="w-100 mx-auto d-flex">
          <Form.Group className="w-25 p-1">
            <Form.Control
              type="number"
              className="w-100"
              placeholder="1-100 Cards Amount"
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
              const dataFavorites = {
                name, description, id, thumbnail: { extension, path }
              }
              return (
                <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${path}.${extension}`} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-end">
                      <FavoriteCharactersButton favorite={ dataFavorites } />
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
            placeholder="1-100 Cards Amount"
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
            const dataFavorites = {
              name, description, id, thumbnail: { extension, path }
            }
            return (
              <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${path}.${extension}`} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <FavoriteCharactersButton favorite={ dataFavorites } />
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