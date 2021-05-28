import { useState } from 'react';
import ContextMarvel from './ContextMarvel';

function ProviderMarvel({ children }) {
  const [titlePage, setTitlePage] = useState('');
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onOff, setOnOff] = useState('');
  const [limitResultsApi, setLimitResultsApi] = useState(25);
  const [favoritesCharacters, setFavoritesCharacters] = useState([]);
  const [favoriteImg, setFavoriteImg] = useState(false);
  const [dataFavorites, setDataFavorites] = useState([]);

  return (
    <ContextMarvel.Provider
      value={
        {
          titlePage, setTitlePage,
          loading, setLoading,
          characters, setCharacters,
          comics, setComics,
          onOff, setOnOff,
          limitResultsApi, setLimitResultsApi,
          favoritesCharacters, setFavoritesCharacters,
          favoriteImg, setFavoriteImg,
          dataFavorites, setDataFavorites,
        }
      }
    >
      {children}
    </ContextMarvel.Provider>
  );
}

export default ProviderMarvel;