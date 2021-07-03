import React, { useContext, useEffect, useState } from 'react';
import { Card, Form, Modal, Button  } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getCharacters } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';
import './style.css';
import FavoriteCharactersButton from '../../Components/FavoriteCharactersButton/FavoriteCharactersButton';

const MarvelCharacters = (props) => {
  const { 
    loading, setLoading,
    characters, setCharacters,
    setTitlePage,
    limitResultsApi, setLimitResultsApi,
  } = useContext(ContextMarvel);

  const [searchTerm, setSearchTerm] = useState('');

  
  
  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getCharacters(limitResultsApi);
      setCharacters(result);
      setLoading(false);
      await verifyToken();
    }
    setTitlePage('Marvel Characters');
    fetchCharacters();
  }, [limitResultsApi, setCharacters, setLoading, setTitlePage]);

  const verifyToken = async () => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const response = await fetch(`${process.env.REACT_APP_FETCH}verify`, {
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
              const Details = () => {
                const [show, setShow] = useState(false);
                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
              
                return (
                  <div>
                    <Button variant="primary" onClick={handleShow}>Details</Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header>
                        <Modal.Title>{name}</Modal.Title>
                        <Button variant="secondary" onClick={handleClose}>X</Button>
                      </Modal.Header>
                        <Modal.Body>{`Comics Avaliable: ${character.comics.available}`}</Modal.Body>
                        <Modal.Body>{`Events Avaliable: ${character.events.available}`}</Modal.Body>
                        <Modal.Body>{`Modified: ${character.modified}`}</Modal.Body>
                        <Modal.Body>{`Series Avaliable: ${character.series.available}`}</Modal.Body>
                        <Modal.Body>{`Stories Avaliable: ${character.stories.available}`}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                );
              }

              return (
                <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${path}.${extension}`} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="d-flex justify-content-around">
                      <Details />
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

            const Details = () => {
              const [show, setShow] = useState(false);
              const handleClose = () => setShow(false);
              const handleShow = () => setShow(true);
            
              return (
                <div>
                  <Button variant="primary" onClick={handleShow}>Details</Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>{name}</Modal.Title>
                      <Button variant="secondary" onClick={handleClose}>X</Button>
                    </Modal.Header>
                      <Modal.Body>{`Comics Avaliable: ${character.comics.available}`}</Modal.Body>
                      <Modal.Body>{`Events Avaliable: ${character.events.available}`}</Modal.Body>
                      <Modal.Body>{`Modified: ${character.modified}`}</Modal.Body>
                      <Modal.Body>{`Series Avaliable: ${character.series.available}`}</Modal.Body>
                      <Modal.Body>{`Stories Avaliable: ${character.stories.available}`}</Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              );
            }

            return (
              <Card key={ id } className="m-4" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${path}.${extension}`} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Details />
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