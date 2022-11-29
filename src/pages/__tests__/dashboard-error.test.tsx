import React from 'react';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../theme';
import { store } from '../../__data__/store';
import DashboardPage from '../dashboard/dashboard';
import error from '../../../stubs/json/dashboard/list/error.json';

const server = setupServer(
    rest.get('/api/dashboard/list', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(error));
    })
);

describe('Dashboard Page', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('Dashboard Error Test', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText(/Создай/i));
        expect(container).toMatchSnapshot();
    });
});
