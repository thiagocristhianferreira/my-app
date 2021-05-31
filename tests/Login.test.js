import React from 'react';
import { screen } from '@testing-library/react';
import RenderWithRouter from './renderWithRouter';
import Login from '../src/Pages/Login/Login';

describe('Testando o componente <Login.js />', () => {
  it('Testando se a página contém um heading h1 com o texto "Login"', () => {
    RenderWithRouter(<Login />);

    
  });

  it('Testando se a página contém o campo de e-mail', () => {
    RenderWithRouter(<Login />);
    
  });

  it('Testando se a página contém o campo de senha', () => {
    RenderWithRouter(<Login />);
    
  });
});
