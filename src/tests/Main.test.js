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
    it('Should test change register value', () => {
        renderWithRouter(<Main />)

        const amount = screen.getByTestId('amount');
        
        expect(amount).toBeInTheDocument();

        fireEvent.change(amount, { target: {
            value: '3500.50'
        }});

        const installments = screen.getByTestId('installments');
        
        expect(installments).toBeInTheDocument();

        fireEvent.change(installments, { target: {
            value: '2'
        }});


        const billingDay = screen.getByTestId('billing-day');
        
        expect(billingDay).toBeInTheDocument();

        fireEvent.change(billingDay, { target: {
            value: '15'
        }});


        const firstInstallmentDate = screen.getByTestId('first-installment-date');
        
        expect(firstInstallmentDate).toBeInTheDocument();

        fireEvent.change(firstInstallmentDate, { target: {
            value: '24-11-2022'
        }});

        const registerButton = screen.getByTestId('register-button')

        expect(registerButton).toBeInTheDocument()
    })
})