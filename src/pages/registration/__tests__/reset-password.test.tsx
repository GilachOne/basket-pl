import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import 'whatwg-fetch';
import { Provider } from 'react-redux';

import ResetPassword from '../reset-password';
import { theme } from '../../../theme';
import { store } from '../../../__data__/store';

describe('testing ResetPassword render', () => {
    it('ResetPassword render', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <ResetPassword />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('Test clicks ResetPassword ', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <ResetPassword />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        fireEvent.click(screen.getByRole('link', {
            name: /вход/i
          }));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByRole('link', {
            name: /регистрация/i
          }));
        expect(container).toMatchSnapshot();
          fireEvent.change(
            screen.getByPlaceholderText('Введите логин или почту'),
            { target: { value: 'email@test.ru' } }
        );
        fireEvent.change(
            screen.getByPlaceholderText('Введите проверочный код'),
            { target: { value: '12345"Dd' } }
        );
        fireEvent.change(
            screen.getByPlaceholderText('Введите новый пароль'),
            { target: { value: '12345"Dd' } }
            
        );
        fireEvent.click(screen.getByRole('button', {
            name: /сбросить/i
          }));
        expect(container).toMatchSnapshot();
     });
    
});
