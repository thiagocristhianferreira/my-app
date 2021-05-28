import React, { useContext, useEffect, useState } from 'react';
import { Card, Form  } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getCharacters } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';
import favoriteImg from '../../Images/favorite-off.png';

const MarvelCharacters = () => {
  const { 
    loading, setLoading,
    characters, setCharacters,
    setTitlePage,
    limitResultsApi, setLimitResultsApi,
  } = useContext(ContextMarvel);

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
      <img
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
                    <Card.Subtitle>
                      <img
                        src={ favoriteImg }
                        alt="Favorite"
                        style={ { width: "30px" } }
                      />
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
                  <Card.Subtitle><img src={ favoriteImg } alt="Favorite" /></Card.Subtitle>
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