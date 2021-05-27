import React, { useContext, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getComics } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';

const MarvelCharacters = () => {
  const { 
    comics, setComics,
    loading, setLoading,
    setTitlePage,
   } = useContext(ContextMarvel);

  useEffect(() => {
    const fetchComics = async () => {
      const result = await getComics();
      setComics(result);
      setLoading(false);
    }
    setTitlePage('Marvel Comics');
    fetchComics();
  }, [setComics, setLoading, setTitlePage]);

  if (loading) {
    return (
      <img
        src={ loadingGif }
        alt="Gif de Loading"
      />
    )
  }
  return (
    <section className="w-100 bg-dark d-flex flex-wrap">
      <Navbar />
      { comics.map(comic => {
        const { title, description } = comic;
        const { extension, path } = comic.thumbnail;
        const creators = comic.creators.items;
        return (
          <Card className="m-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${path}.${extension}`} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                { description }
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>CRIADORES</ListGroupItem>
              { creators.map(creator => (
                <ListGroupItem>{ creator.name }</ListGroupItem>
              )) }
            </ListGroup>
          </Card>
        )
      }) }
    </section>
  );
};

export default MarvelCharacters;