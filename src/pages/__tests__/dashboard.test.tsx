import React from 'react';
import { describe, it, expect, jest, beforeAll, afterAll } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../theme';
import { store } from '../../__data__/store';
import DashboardPage from '../dashboard/dashboard';
import list from '../../../stubs/json/dashboard/list/success.json';
import listItem from '../../../stubs/json/dashboard/common/success.json';
import { setToken } from '../../utils/token';

const server = setupServer(
    rest.get('/api/dashboard/list', (req, res, ctx) => {
        return res(ctx.json(list));
    }),
    rest.post('/api/dashboard/list', (req, res, ctx) => {
        return res(ctx.json(listItem));
    }),
    rest.delete('/api/dashboard/list', (req, res, ctx) => {
        return res(ctx.json({}));
    }),
    rest.put('/api/dashboard/list', (req, res, ctx) => {
        return res(ctx.json(listItem));
    }),
    rest.post('/api/dashboard/list/duplicate', (req, res, ctx) => {
        return res(ctx.json(listItem));
    })
);

describe('Dashboard Page', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('Dashboard Add List Cancel', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getByTestId('addButton'));
        fireEvent.click(screen.getByTitle('Отмена'));
        fireEvent.click(screen.getByTestId('Выход'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Add List Create', async () => {
        setToken('111');

        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getByTestId('addButton'));
        fireEvent.change(screen.getByPlaceholderText('Новый список'), {
            target: { value: '23' },
        });
        fireEvent.click(screen.getByTitle('Создать'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Rename List Cancel', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getAllByLabelText('Dropdown select')[0]);
        fireEvent.click(screen.getByLabelText('Переименовать'));
        fireEvent.click(screen.getByTitle('Отмена'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Rename List OK', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getAllByLabelText('Dropdown select')[2]);
        fireEvent.click(screen.getByLabelText('Переименовать'));
        fireEvent.change(screen.getByDisplayValue('Первый список'), {
            target: { value: 'Первый список2' },
        });
        fireEvent.click(screen.getByTitle('OK'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Remove List Cancel', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getAllByLabelText('Dropdown select')[0]);
        fireEvent.click(screen.getByLabelText('Удалить'));
        fireEvent.click(screen.getByTitle('Отмена'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Remove List OK', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getAllByLabelText('Dropdown select')[0]);
        fireEvent.click(screen.getByLabelText('Удалить'));
        fireEvent.click(screen.getByTitle('OK'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Copy List', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <DashboardPage />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        await waitFor(() => screen.getByText('Первый список'));

        fireEvent.click(screen.getAllByLabelText('Dropdown select')[0]);
        fireEvent.click(screen.getByLabelText('Копировать'));

        expect(container).toMatchSnapshot();
    });

    it('Dashboard Share List', async () => {
        await act(async () => {
            Object.assign(window.navigator, {
                clipboard: {
                    writeText: jest.fn(() => Promise.resolve()),
                },
            });

            const { container } = render(
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <BrowserRouter>
                            <DashboardPage />
                        </BrowserRouter>
                    </ThemeProvider>
                </Provider>
            );

            await waitFor(() => screen.getByText('Первый список'));

            fireEvent.click(screen.getAllByLabelText('Dropdown select')[0]);
            fireEvent.click(screen.getByLabelText('Поделиться'));

            expect(container).toMatchSnapshot();
        });
    });
});
