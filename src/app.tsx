import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { favicon } from './public';
import { Routing } from './routing';
import { theme } from './theme';
import { store } from './__data__/store';
import './style';
import ErrorBoundary from './components/error-boundary/error-boundary';

const App = () => {
    const { t } = useTranslation();

    return (
        <ErrorBoundary>
            <Helmet>
                <link rel="icon" href={favicon}/>
                <title>{t('basket.dashboard.header.title')}</title>
            </Helmet>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routing />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
