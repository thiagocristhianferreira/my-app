import React, { useState } from 'react';
import { screen, waitFor } from '@testing-library/react';
import RenderWithRouter from './renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando o componente <Login.js />', () => {
  it('Testando se a página contém um heading h1 com o texto "Login"', async () => {
    RenderWithRouter(<App />);

    await waitFor(() => {
      const textTitle = /login/i;
      const heading = screen.getByRole('heading', {
        level: 1,
        name: textTitle,
      });
      expect(heading).toBeInTheDocument();
    })
  });

  it('Testando se a página contém o campo de e-mail', async () => {
    RenderWithRouter(<App />);

    await waitFor(() => {
      const placeholderText = /exemplo@email.com/i
      const email = screen.getByPlaceholderText(placeholderText);
      expect(email).toBeInTheDocument();
    })
  });

  it('Testando se a página contém o campo de senha', async () => {
    RenderWithRouter(<App />);
    
    await waitFor(() => {
      const placeholderText = /ex. 123456789/i
      const password = screen.getByPlaceholderText(placeholderText);
      expect(password).toBeInTheDocument();
    });
  });

  it('Testando se a página contém o botão de logar', async () => {
    RenderWithRouter(<App />);
    
    await waitFor(() => {
      const buttonText = /logar/i;
      const button = screen.getByRole('button', {
        name: buttonText,
      });
      expect(button).toBeInTheDocument();
    });
  });

  it('Testando se a página contém o botão de que leva à página de cadastro', async () => {
    RenderWithRouter(<App />);

    await waitFor(() => {
      const buttonText = /cadastre-se/i;
      const button = screen.getByText(buttonText);
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('href', '/join');
      expect(screen.getByRole('link')).toHaveAttribute('href', '/join');
    });
  });

  it('Testando a validação de e-mail e senha', async () => {
    RenderWithRouter(<App />);

    await waitFor(() => {
      const button = screen.getByText(/logar/i);
      const emailInput = screen.getByTestId(/email-input/);
      const passwordInput = screen.getByTestId(/password-input/);

      userEvent.type(emailInput, 'teste1@teste@com');
      userEvent.type(passwordInput, '123');
      expect(button).toBeDisabled();

      userEvent.type(emailInput, 'teste1@teste');
      userEvent.type(passwordInput, '1234');
      expect(button).toBeDisabled();

      userEvent.type(emailInput, 'teste.com');
      userEvent.type(passwordInput, '12345');
      expect(button).toBeDisabled();

      userEvent.type(emailInput, '@teste1@teste.com');
      userEvent.type(passwordInput, '123456');
      expect(button).toBeDisabled();
    });
  });
});
