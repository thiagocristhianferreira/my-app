import React, { useContext, useEffect } from 'react';
import { Card  } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import loadingGif from '../../Images/loading-buffering.gif';
import { getCharacters } from '../../Services/marvelAPI';
import Navbar from '../../Components/NavBar/NavBar';

const MarvelCharacters = () => {
  const { 
    loading, setLoading,
    characters, setCharacters,
    setTitlePage,
   } = useContext(ContextMarvel);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await getCharacters();
      setCharacters(result);
      setLoading(false);
      setTitlePage('Marvel Characters');
    }
    fetchCharacters();
  }, [setCharacters, setLoading, setTitlePage]);

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
      { characters.map(comic => {
        const { name, description } = comic;
        const { extension, path } = comic.thumbnail;
        return (
          <Card className="m-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${path}.${extension}`} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                { description }
              </Card.Text>
            </Card.Body>
          </Card>
        )
      }) }
    </section>
  );
};

export default MarvelCharacters;