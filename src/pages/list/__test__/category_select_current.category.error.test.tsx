import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import { ThemeProvider } from '@emotion/react';

import CategorySelect from '../../list/category_select';
import { theme } from '../../../theme';
import { store } from '../../../__data__/store';
import currentCategoriesError from '../../../../stubs/json/list/categories/current/error.json';

const serverCurrentCategoriesError = setupServer(
    rest.get('/api/categories', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(currentCategoriesError));
    })
);

describe('testing CategorySelect current categories error', () => {
    beforeAll(() => {
        serverCurrentCategoriesError.listen();
    });
    afterAll(() => {
        serverCurrentCategoriesError.close();
    });

    it('test render CategorySelect current categories error', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <CategorySelect />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        await waitFor(() =>
            screen.getByText('Текущий список не загрузился...')
        );
        expect(container).toMatchSnapshot();
    });
});