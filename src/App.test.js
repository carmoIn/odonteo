import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login'
import Main from './pages/Main/Main';
import Statement from './pages/Statement/Statement';

function renderWithRouter(element) {
  render(
      <BrowserRouter>
          { element }
      </BrowserRouter>
  );
}

describe('renders learn react link', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([{}])
        }));
    });

    it('Test render Login Page', async () => {
        renderWithRouter(<Login />)

        const invalidEmail = screen.getByText(/entrar/i);

        expect(invalidEmail).toBeInTheDocument();
    })

    it('Test render Main Page', async () => {
        renderWithRouter(<Main />)

        const invalidEmail = screen.getByText(/ver extrato/i);

        expect(invalidEmail).toBeInTheDocument();
    })

    it('Test render Statement Page', async () => {
        // Statement is not rendering, can't get de API result format
        renderWithRouter(<Statement />)

        const invalidEmail = screen.getByText(/consultar faturamento/i);

        expect(invalidEmail).toBeInTheDocument();
    })
});
