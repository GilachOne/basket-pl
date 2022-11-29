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
import addCategoriesError from '../../../../stubs/json/list/categories/add/error.json';

const serverAddCategoryError = setupServer(
    rest.get('/api/categories', (req, res, ctx) => {
        return res(ctx.json(currentCategories));
    }),
    rest.post('/api/categories', (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(addCategoriesError));
    })
);

describe('testing CategorySelect add category error', () => {
    beforeAll(() => {
        serverAddCategoryError.listen();
    });
    afterAll(() => {
        serverAddCategoryError.close();
    });

    it('test render CategorySelect add category error', async () => {
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
        
		fireEvent.click(screen.getByTitle('Кнопка для добавления категорий'));
		await waitFor(() => screen.getByText('Добавить категорию'));
		fireEvent.change(
            screen.getByPlaceholderText('Введите название категории'),
            { target: { value: 'Фрукты' } }
        );
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: '#08AE0F' },
        });
        fireEvent.click(screen.getByTitle('Добавить категорию'));

        await waitFor(() => screen.getByText('Категория не добавлена...'));
        expect(container).toMatchSnapshot();
    });
});
