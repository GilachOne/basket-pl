import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import MainLandingComponent from '../../main_landing/landing';
import { theme } from '../../../theme';

describe('testing Landing render', () => {
    it('Landing render', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainLandingComponent />
                </BrowserRouter>
            </ThemeProvider>
        );
        expect(container).toMatchSnapshot();
    });

    it('Test Landing clicks SectionMainLanding ', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainLandingComponent />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.click(screen.getByTitle('Попробывать бесплатно'));
        expect(container).toMatchSnapshot();
        fireEvent.change(
            screen.getByPlaceholderText('Введите Ваш email адрес'),
            { target: { value: 'email@test.ru' } }
        );
        fireEvent.click(screen.getByTitle('Попробывать бесплатно'));
        expect(container).toMatchSnapshot();
    });

    it('Test Landing clicks SectionTeam', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainLandingComponent />
                </BrowserRouter>
            </ThemeProvider>
        );
        fireEvent.click(screen.getByTitle('Продолжить'));
        expect(container).toMatchSnapshot();
    });

    it('Test Landing clicks SectionHelp', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainLandingComponent />
                </BrowserRouter>
            </ThemeProvider>
        );
        fireEvent.click(screen.getByTestId('1'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('1'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('2'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('2'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('3'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('3'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('4'));
        expect(container).toMatchSnapshot();
        fireEvent.click(screen.getByTestId('4'));
        expect(container).toMatchSnapshot();
    });
});
