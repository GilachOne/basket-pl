import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, jest, beforeAll, afterAll } from '@jest/globals';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import { ThemeProvider } from '@emotion/react';

import CategorySelect from '../category_select';
import { theme } from '../../../theme';
import { store } from '../../../__data__/store';
import currentCategories from '../../../../stubs/json/list/categories/current/success.json';
import addItemError from '../../../../stubs/json/list/shoppingList/error.json';

const serverAddItemError = setupServer(
    rest.get('/api/categories', (req, res, ctx) => {
        return res(ctx.json(currentCategories));
    }),
    rest.post('/api/categories', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(addItemError));
    })
);

describe('testing CategorySelect add Item error', () => {
    beforeAll(() => {
        serverAddItemError.listen();
    });
    afterAll(() => {
        serverAddItemError.close();
    });

	it('test render CategorySelect add Item error', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <CategorySelect />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        await waitFor(() => screen.getByText('Продукты'));
		fireEvent.click(screen.getByText('Бытовая химия'));
		fireEvent.change(screen.getByPlaceholderText('Введите текст'), {
            target: { value: 'Чистящее средство' },
        });
		fireEvent.click(screen.getByTitle('Добавить'));
        await waitFor(() => screen.getByText('Позиция не добавлена...'));
		expect(container).toMatchSnapshot();
    });
});