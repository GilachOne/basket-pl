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
import currentCategories from '../../../../stubs/json/list/categories/current/success.json';
import addCategories from '../../../../stubs/json/list/categories/add/success.json';

const server = setupServer(
    rest.get('/api/categories', (req, res, ctx) => {
        return res(ctx.json(currentCategories));
    }),
    rest.post('/api/categories', (req, res, ctx) => {
        return res(ctx.json(addCategories));
    })
);

describe('testing CategorySelect', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('test render CategorySelect Loading', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <CategorySelect />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('test render CategorySelect current categories', async () => {
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
        expect(container).toMatchSnapshot();
    });

    it('test render CategorySelect add categories', async () => {
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
		fireEvent.click(screen.getByTitle('Добавить категорию'));
        expect(container).toMatchSnapshot();

        fireEvent.change(
            screen.getByPlaceholderText('Введите название категории'),
            { target: { value: '%овощи' } }
        );
        fireEvent.click(screen.getByTitle('Добавить категорию'));
        expect(container).toMatchSnapshot();

		fireEvent.change(
            screen.getByPlaceholderText('Введите название категории'),
            { target: { value: 'Фрукты' } }
        );
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: '#FCF20E' },
        });
        fireEvent.click(screen.getByTitle('Добавить категорию'));
        expect(container).toMatchSnapshot();

        fireEvent.change(
            screen.getByPlaceholderText('Введите название категории'),
            { target: { value: 'Овощи' } }
        );
        fireEvent.change(screen.getByTestId('select'), {
            target: { value: '#B11F1F' },
        });
        fireEvent.click(screen.getByTitle('Добавить категорию'));
		await waitFor(() => screen.getByTitle('Кнопка для добавления категорий'));
        expect(container).toMatchSnapshot();
    });

    it('test render CategorySelect add Item', async () => {
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
		fireEvent.change(screen.getByPlaceholderText('Введите текст'), {
            target: { value: 'Кефир' },
        });
		fireEvent.click(screen.getByTitle('Добавить'));
        expect(container).toMatchSnapshot();
        
        fireEvent.change(screen.getByPlaceholderText('Введите текст'), {
            target: { value: 'Молоко' },
        });
        fireEvent.click(screen.getByText('Продукты'));
		fireEvent.click(screen.getByTitle('Добавить'));
        expect(container).toMatchSnapshot();

		fireEvent.change(screen.getByPlaceholderText('Введите текст'), {
            target: { value: 'Хлеб_' },
        });
        fireEvent.click(screen.getByText('Продукты'));
		fireEvent.click(screen.getByTitle('Добавить'));
        expect(container).toMatchSnapshot();
    });

	it('test render CategorySelect add Item span error', async () => {
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
		screen.getByPlaceholderText('Введите текст').focus();
        fireEvent.click(screen.getByTitle('Добавить'));
		await waitFor(() => screen.getByText('Необходимо выбрать категорию покупки'));
        expect(container).toMatchSnapshot();
	});

    it('test render CategorySelect click button back', async () => {
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

        fireEvent.click(screen.getByTitle('Назад'));
        expect(container).toMatchSnapshot();
    });
});