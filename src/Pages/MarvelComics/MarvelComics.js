import React, { useContext, useEffect, useState } from 'react';
import { Card, Form, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getComics } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';
import FavoriteComicsButton from '../../Components/FavoriteComicsButton/FavoriteComicsButton';

const MarvelCharacters = () => {
  const { 
    comics, setComics,
    loading, setLoading,
    setTitlePage,
    limitResultsApi, setLimitResultsApi,
  } = useContext(ContextMarvel);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTitlePage('Marvel Comics');
    const fetchComics = async () => {
      const result = await getComics(limitResultsApi);
      setComics(result);
      setLoading(false);
    }
    fetchComics();
    verifyToken();
  }, [limitResultsApi, setComics, setLoading, setTitlePage]);

  const verifyToken = async () => {
    const token = await JSON.parse(localStorage.getItem('token')).token;

    const response = await fetch(`${process.env.REACT_APP_FETCH}verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    
    return await response.json();
  }

  const fetchLimitCharacters = async () => {
    if (!searchTerm) {
      return false;
    }
    const result = await getComics(limitResultsApi);
    setComics(result);
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
              placeholder="Search Comics"
              onChange={ (e) => setSearchTerm(e.target.value) }
            />
          </Form.Group>
        </Form.Row>
        { comics.map((comic) => {
          const { title, description, id } = comic;
          const { extension, path } = comic.thumbnail;
          const dataFavorites = {
            title, description, id, thumbnail: { extension, path }
          }
          const creators = comic.creators.items;

          const Details = () => {
            const [show, setShow] = useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <div>
                <Button variant="primary" onClick={handleShow}>Details</Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header>
                    <Modal.Title>{title}</Modal.Title>
                    <Button variant="secondary" onClick={handleClose}>X</Button>
                  </Modal.Header>
                    <Modal.Body>{`Characters Avaliable: ${comic.characters.available}`}</Modal.Body>
                    <Modal.Body>{`Creators Avaliable: ${comic.creators.available}`}</Modal.Body>
                    <Modal.Body>{`Events Avaliable: ${comic.events.available}`}</Modal.Body>
                    <Modal.Body>{`Modified: ${comic.modified}`}</Modal.Body>
                    <Modal.Body>{`Prices: ${comic.prices[0].price}`}</Modal.Body>
                    <Modal.Body>{`Series Name: ${comic.series.name}`}</Modal.Body>
                    <Modal.Body>{`Stories Avaliable: ${comic.stories.available}`}</Modal.Body>
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
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="d-flex justify-content-around">
                  <Details />
                  <FavoriteComicsButton favorite={ dataFavorites } />
                </Card.Subtitle>
                <Card.Text>
                  { description }
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>CRIADORES</ListGroupItem>
                { creators.map((creator, index) => (
                  <ListGroupItem key={ index }>{ creator.name }</ListGroupItem>
                )) }
              </ListGroup>
            </Card>
          )
        }) }
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
        comics
        .filter(comic => (comic.title).toLowerCase().startsWith(searchTerm))
        .map((comic) => {
        const { title, description, id } = comic;
        const { extension, path } = comic.thumbnail;
        const creators = comic.creators.items;
        const dataFavorites = {
          title, description, id, thumbnail: { extension, path }
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
                  <Modal.Title>{title}</Modal.Title>
                  <Button variant="secondary" onClick={handleClose}>X</Button>
                </Modal.Header>
                  <Modal.Body>{`Characters Avaliable: ${comic.characters.available}`}</Modal.Body>
                  <Modal.Body>{`Creators Avaliable: ${comic.creators.available}`}</Modal.Body>
                  <Modal.Body>{`Events Avaliable: ${comic.events.available}`}</Modal.Body>
                  <Modal.Body>{`Modified: ${comic.modified}`}</Modal.Body>
                  <Modal.Body>{`Prices: ${comic.prices[0].price}`}</Modal.Body>
                  <Modal.Body>{`Series Name: ${comic.series.name}`}</Modal.Body>
                  <Modal.Body>{`Stories Avaliable: ${comic.stories.available}`}</Modal.Body>
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
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="d-flex justify-content-around">
                <Details />
                <FavoriteComicsButton favorite={ dataFavorites } />
              </Card.Subtitle>
              <Card.Text>
                { description }
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>CRIADORES</ListGroupItem>
              { creators.map((creator, index) => (
                <ListGroupItem key={ index }>{ creator.name }</ListGroupItem>
              )) }
            </ListGroup>
          </Card>
        )})
      }
    </section>
  );
  
};

export default MarvelCharacters;