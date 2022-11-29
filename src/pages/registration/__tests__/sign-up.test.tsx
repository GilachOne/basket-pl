import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import 'whatwg-fetch';
import { Provider } from 'react-redux';

import SignUp from '../sign-up';
import { theme } from '../../../theme';
import { store } from '../../../__data__/store';

describe('testing SignUp render', () => {
    it('SignUp render', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <SignUp />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it ('Test clicks SignUp ', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <SignUp />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        fireEvent.click(screen.getByRole('link', {
            name: /вход/i
          }));
        expect(container).toMatchSnapshot();
          fireEvent.change(
            screen.getByPlaceholderText('Почта'),
            { target: { value: 'emailtest.ru' } }
        );
        fireEvent.click(screen.getByRole('button', {
            name: /регистрация/i
          }));
        expect(container).toMatchSnapshot();
        fireEvent.change(
          screen.getByPlaceholderText('Почта'),
          { target: { value: 'email@test.ru' } }
      );
        fireEvent.change(
            screen.getByPlaceholderText('Логин'),
            { target: { value: 'TestName' } }
        );
        fireEvent.change(
            screen.getByPlaceholderText('Пароль'),
            { target: { value: '12345"Dd' } }
        );
      
        expect(container).toMatchSnapshot();
       
    });
    
});
