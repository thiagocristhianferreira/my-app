import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as IoIcons from 'react-icons/io';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaAddressCard } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ContextMarvel from '../../Context/ContextMarvel';

function Navbar() {
  const history = useHistory();
  const { 
    titlePage,
    onOff,
  } = useContext(ContextMarvel);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="header-text">
            <h1>{ titlePage }</h1>
          </div>
          <div className={ onOff }>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              ON
            </p>
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className={'nav-text'}>
              <Link to={'/marvelcharacters'}>
                <BiMessageAltDetail />
                <span>{'Marvel Characters'}</span>
              </Link>
            </li>
            <li className={'nav-text'}>
              <Link to={'/marvelcomics'}>
                <IoIcons.IoMdPeople />
                <span>{'Marvel Comics'}</span>
              </Link>
            </li>
            <li className={'nav-text'}>
              <Link to={'/favorites'}>
                <FaAddressCard />
                <span>{'Favoritos'}</span>
              </Link>
            </li>
            <li className={'nav-text'}>
              <Link to={'/perfil'}>
                <FaAddressCard />
                <span>{'Perfil'}</span>
              </Link>
            </li>
            <li
              className={'nav-text'}
              onClick={ (e) => {
                e.preventDefault();
                history.push('/');
                alert('Até logo :)');
              } }
            >
              <Link to={'/'}>
                <RiLogoutBoxFill />
                <span>Sair</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
