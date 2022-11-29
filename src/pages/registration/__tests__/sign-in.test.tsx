import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import 'whatwg-fetch';
import { Provider } from 'react-redux';


import SignIn from '../sign-in';
import { theme } from '../../../theme';
import { store } from '../../../__data__/store';


describe('testing SignIn render', () => {
    it('SignIn render', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <SignIn />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('Test clicks SignIn tab ', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <SignIn />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        fireEvent.click(screen.getByRole('link', {
            name: /регистрация/i
          }));
        expect(container).toMatchSnapshot();
          fireEvent.change(
            screen.getByPlaceholderText('Почта'),
            { target: { value: 'email@test.ru' } }
        );
        fireEvent.change(
            screen.getByPlaceholderText('Пароль'),
            { target: { value: '12345"Dd' } }
        );
        fireEvent.click(screen.getByRole('button', {
            name: /войти/i
          }));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByRole('link', {
            name: /сбросить пароль/i
          }));
        expect(container).toMatchSnapshot();
    });
    
});
