import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import { MyListsComponent } from '../myLists';
import { theme } from '../../../../theme';
import list from '../../../../../stubs/json/dashboard/list/test.json';

describe('MyListsComponent', () => {
    it('MyListsComponent Empty', () => {
        const onAdd = jest.fn();
        const onRemove = jest.fn();
        const onRename = jest.fn();
        const onCopy = jest.fn();
        const onShare = jest.fn();

        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MyListsComponent
                        lists={null}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onRename={onRename}
                        onCopy={onCopy}
                        onShare={onShare}
                    />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTestId('addButton'));

        expect(onAdd).toBeCalled();
        expect(document.body).toMatchSnapshot();
    });

    it('MyListsComponent With list', () => {
        const onAdd = jest.fn();
        const onRemove = jest.fn();
        const onRename = jest.fn();
        const onCopy = jest.fn();
        const onShare = jest.fn();

        render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MyListsComponent
                        lists={list}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onRename={onRename}
                        onCopy={onCopy}
                        onShare={onShare}
                    />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTestId('uuid1'));
        fireEvent.click(screen.getByTestId('addButton'));

        expect(onAdd).toBeCalled();
        expect(document.body).toMatchSnapshot();
    });
});
