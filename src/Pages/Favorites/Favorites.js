import React, { useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Navbar from '../../Components/NavBar/NavBar';

import ContextMarvel from '../../Context/ContextMarvel';

const Favorites = () => {
  const { 
    favoritesCharacters, setFavoritesCharacters,
    loading, setLoading,
    setTitlePage,
  } = useContext(ContextMarvel);

  useEffect(() => {
    setTitlePage('Favoritos');
  }, []);

  return (
    <section>
    <Navbar />
    <Card key={ 'id' } className="m-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${'path'}.${'extension'}`} />
      <Card.Body>
        <Card.Title>{'name'}</Card.Title>
        <Card.Text>{ 'description' }</Card.Text>
      </Card.Body>
    </Card>
    </section>
  )
}

export default Favorites;
