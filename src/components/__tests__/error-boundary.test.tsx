import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../theme';
import { store } from '../../__data__/store';
import ErrorBoundary from '../error-boundary/error-boundary';

// eslint-disable-next-line react/display-name
jest.mock('lottie-react', () => () => <h1>Что-то пошло не так :(</h1>);

describe('ErrorBoundary Component', () => {

    it('ErrorBoundary Test', () => {
        const ThrowError = () => {
            throw new Error('Test');
          };
        const { container } = render(
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <ErrorBoundary>
                            <ThrowError />
                        </ErrorBoundary>
                    </BrowserRouter>
                </ThemeProvider>
        );

        expect(container).toMatchSnapshot();
    });
});