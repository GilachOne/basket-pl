import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../theme';
import { NotFoundPage } from '../notfound';

// eslint-disable-next-line react/display-name
jest.mock('lottie-react', () => () => <h1>Страница не найдена</h1>);

describe('Not Found Page', () => {

    it('Not Found Test', () => {
        const { container } = render(
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <NotFoundPage />
                    </BrowserRouter>
                </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});