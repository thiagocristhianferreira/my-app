import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import RenderWithRouter from './renderWithRouter';
import NotFound from '../Pages/NotFound/NotFound';

describe('Testando o componente <NotFound.js />', () => {
  it('Testando se a página contém um heading h1 com o texto "Error"', async () => {
    RenderWithRouter(<NotFound />);

    await waitFor(() => {
      const textTitle = /error/i;
      const heading = screen.getByRole('heading', {
        level: 1,
        name: textTitle,
      });
      expect(heading).toBeInTheDocument();
    })
  });
});
