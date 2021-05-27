import { useContext, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

import ContextMarvel from '../../Context/ContextMarvel';
import './style.css';

function Header() {
  const {
    title, setTitle,
  } = useContext(ContextMarvel);

  useEffect(() => {
    setTitle('LOGIN');
  }, [setTitle]);

  return (
    <div className="fixedHeader">
      <Navbar
        className=""
      >
        <h2 className="m-0">{ title }</h2>
      </Navbar>
    </div>
  );
}

export default Header;
