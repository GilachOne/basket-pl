import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { CreateListComponent, DeleteListComponent } from '../forms/index';
import { theme } from '../../../../theme';

describe('Create, Rename and Delete Forms', () => {
    it('Create List', () => {
        const onCancel = jest.fn();
        const onOk = jest.fn();

        render(
            <ThemeProvider theme={theme}>
                <CreateListComponent onCancel={onCancel} onOk={onOk} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTitle('Отмена'));
        fireEvent.click(screen.getByTitle('Создать'));
        fireEvent.change(screen.getByPlaceholderText('Новый список'), {
            target: { value: '23' },
        });

        expect(onCancel).toBeCalledTimes(1);
        expect(onOk).toBeCalled();
        expect(document.body).toMatchSnapshot();
    });

    it('Rename List', () => {
        const onCancel = jest.fn();
        const onOk = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <CreateListComponent
                    listName="Первый список"
                    onCancel={onCancel}
                    onOk={onOk}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTitle('Отмена'));
        fireEvent.click(screen.getByTitle('OK'));

        expect(onCancel).toBeCalledTimes(1);
        expect(onOk).toBeCalled();
        expect(document.body).toMatchSnapshot();
    });

    it('Delete List', () => {
        const onCancel = jest.fn();
        const onOk = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <DeleteListComponent onCancel={onCancel} onOk={onOk} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTitle('Отмена'));
        fireEvent.click(screen.getByTitle('OK'));

        expect(onCancel).toBeCalledTimes(1);
        expect(onOk).toBeCalled();
        expect(document.body).toMatchSnapshot();
    });
});
