import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Statement from '../pages/Statement/Statement';

function renderWithRouter(element) {
    render(
        <BrowserRouter>
            { element }
        </BrowserRouter>
    );
}

describe('Test usage of main page', () => {
    // This suit is not running the Statement page is not rendering
    // because the mock api response is not correct

    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve([{}])
        }))
    })

    it('Test render Statement Page', async () => {
        // Statement is not rendering, can't get de API result format
        renderWithRouter(<Statement />)

        const invalidEmail = screen.getByTestId('beginning-date');

        expect(invalidEmail).toBeInTheDocument();
    })
})