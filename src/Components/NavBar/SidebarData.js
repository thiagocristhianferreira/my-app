import React from 'react';
import * as IoIcons from 'react-icons/io';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaAddressCard } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Marvel Characters',
    path: '/marvelcharacters',
    icon: <BiMessageAltDetail />,
    cName: 'nav-text'
  },
  {
    title: 'Marvel Comics',
    path: '/marvelcomics',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaAddressCard />,
    cName: 'nav-text'
  },
  {
    title: 'Sair',
    path: '/',
    icon: <RiLogoutBoxFill />,
    cName: 'nav-text'
  }
];
