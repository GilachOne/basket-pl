import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, jest, beforeAll, afterAll } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import 'whatwg-fetch';

import { theme } from '../../../theme';
import { store } from '../../../__data__/store';
import List from '../list';
import shoppingList from '../../../../stubs/json/list/shoppingList/success.json';
import listItem from '../../../../stubs/json/list/item/success.json';
import { hexToRGB } from '../components/item/style';

const server = setupServer(
    rest.get('/api/shoppingList/:id', (req, res, ctx) => {
        return res(ctx.json(shoppingList));
    }),

    rest.post('/shoppingList/item/:id', (req, res, ctx) => {
        return res(ctx.json(listItem));
    }),

    rest.put('/shoppingList/item/:id', (req, res, ctx) => {
        return res(ctx.json(listItem));
    }),

    rest.patch('/shoppingList/item/:id', (req, res, ctx) => {
        return res(ctx.json(listItem));
    }),

    rest.delete('/shoppingList/item/:id', (req, res, ctx) => {
        return res(ctx.json({}));
    })
);

describe('<List />', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('ShoppingList render', () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <List />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it('ShoppingList add button', () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <List />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        fireEvent.click(screen.getByTitle('???????????????? ??????????????'));
    });

    it('ShoppingList click header buttons', async () => {
        const { container } = render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <List />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        );

        fireEvent.click(screen.getByTitle('????????????????'));
        await waitFor(() => screen.getByTitle('???????????????? ??????????????'));
        fireEvent.click(screen.getByTitle('??????????'));
        expect(container).toMatchSnapshot();
    });
});

it('ShoppingList click share button', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );

    const share = screen.getByTitle('????????????????????');
    expect(
        screen.queryByText('???????????? ?????????????????????? ?? ?????????? ????????????')
    ).toBeNull();
    fireEvent.click(share);
    expect(
        screen.queryByText('???????????? ?????????????????????? ?? ?????????? ????????????')
    ).toBeDefined();
    expect(container).toMatchSnapshot();
});

it('ShoppingList item render', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
    await waitFor(() => screen.getByText('????????'));
    expect(container).toMatchSnapshot();
});

it('ShoppingList item count increment click', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
    await waitFor(() => screen.getByText('????????'));
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getAllByTitle('?????????????????? ????????????????????')[0]);
    expect(container).toMatchSnapshot();
});

it('ShoppingList item count decrement click', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
    await waitFor(() => screen.getByText('????????'));
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getAllByTitle('?????????????????? ????????????????????')[1]);
    expect(container).toMatchSnapshot();
});

it('ShoppingList item bought click', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
    await waitFor(() => screen.getByText('????????'));
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getAllByTitle('???????????????? ?? ??????????????')[1]);
    expect(hexToRGB).toBeCalled;
    expect(container).toMatchSnapshot();
});

it('ShoppingList item delete click', async () => {
    const { container } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <List />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
    await waitFor(() => screen.getByText('????????'));
    expect(container).toMatchSnapshot();
    fireEvent.click(screen.getAllByTitle('?????????????? ???? ??????????????')[3]);
    expect(container).toMatchSnapshot();
});
