import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from '../header';
import { theme } from '../../../../theme';

describe('Dashboard Header', () => {
    it('Header', () => {
        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <HeaderComponent />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTestId('Выход'));

        expect(document.body).toMatchSnapshot();
    });
});
