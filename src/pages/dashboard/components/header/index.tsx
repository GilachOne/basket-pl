import React from 'react';
import { Header, HeaderText } from './style';
import { useTranslation } from 'react-i18next';

import { logout } from '../../../../public';
import { removeToken } from '../../../../utils/token';
import { URLs } from '../../../../__data__/urls';

import { Wrapper, LogOut } from './style';

export const HeaderComponent = () => {
    const { t } = useTranslation();

    const logOut = () => {
        removeToken();
        location.href = URLs.signIn.url;
    };

    return (
        <Header>
            <HeaderText>{t('basket.dashboard.header.title')}</HeaderText>
            <Wrapper>
                {/*TODO: вывести логин юзера <Login>{getToken()}</Login> */}
                <LogOut
                    onClick={logOut}
                    data-testid={t('basket.dashboard.header.logout')}
                >
                    <img
                        src={logout}
                        title={t('basket.dashboard.header.logout')}
                    />
                </LogOut>
            </Wrapper>
        </Header>
    );
};
