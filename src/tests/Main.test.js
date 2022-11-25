import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';

function renderWithRouter(element) {
    render(
        <BrowserRouter>
            { element }
        </BrowserRouter>
    );
}

describe('Test usage of main page', () => {

})