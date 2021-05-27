import { useState } from 'react';
import ContextMarvel from './ContextMarvel';

function ProviderMarvel({ children }) {
  const [titlePage, setTitlePage] = useState('');
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onOff, setOnOff] = useState('');

  return (
    <ContextMarvel.Provider
      value={
        {
          titlePage, setTitlePage,
          loading, setLoading,
          characters, setCharacters,
          comics, setComics,
          onOff, setOnOff,
        }
      }
    >
      {children}
    </ContextMarvel.Provider>
  );
}

export default ProviderMarvel;