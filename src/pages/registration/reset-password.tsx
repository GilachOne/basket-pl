import React from 'react';
import styled from '@emotion/styled';
import { logo } from '../../public';
import { Link } from 'react-router-dom';
import { URLs } from '../../__data__/urls';

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 428px;
    margin: 0 auto 0px auto;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

const Tabs = styled.div`
    display: flex;
    list-style: none;
    align-items: center;
    border-bottom: 0.1rem solid #d2d8e0;
    margin-bottom: 32px;
`;

const Tab3 = styled.div`
    padding: 2rem 3.5rem;
    text-decoration: none;
    color: #778ca3;
    cursor: pointer;
    color: #a68fe5;
`;

const Tab4 = styled.div`
    padding: 0rem 3.5rem;
    padding-right: 12rem;
    color: #778ca3;
    cursor: pointer;
    color: #a68fe5;
`;
const SwLink = styled(Link)`
    color: inherit;
    background-color: initial;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

// const NoLink = styled.a `
//     color: #2C107A;
//     background-color: initial;
//     text-decoration: none;
//     cursor: auto;
//     border-bottom: 0.3rem solid #2C107A;
//     position: absolute;
//     font-family: 'Roboto', sans-serif;
//     font-style: normal;
//     font-weight: 700;
//     font-size: 24px;
// `

const Input = styled.input`
    width: 100%;
    height: 52px;
    margin: 0 0 12px 0;
    border-radius: 3px;
    border: none;
    background: #f6eaff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 10px;
`;

const LogoImg = styled.img`
    width: 188px;
    height: 188px;
    left: 120px;
    top: 49px;
`;

const TitleH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #2c107a;
`;

const RegButton = styled.button`
    background-color: #2c107a;
    border-radius: 3px;
    color: white;
    padding: 16px 20px;
    margin: 32px 32px;
    border: none;
    cursor: pointer;
    width: 80%;
    opacity: 0.9;
    font-family: 'Roboto', sans-serif;
`;

import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
    const { t } = useTranslation();
    return (
        <Form>
            <LogoImg src={logo} />
            <TitleH1>{t('basket.reset.password.title.h1')}</TitleH1>
            {URLs.signUp.isEnabled &&  <Tabs>
                <Tab3>
                    <SwLink to={URLs.signIn.url}>
                        {t('basket.sign.in.no.link')}
                    </SwLink>
                </Tab3>
                <Tab4>
                    <SwLink to={URLs.signUp.url}>
                        {t('basket.sign.in.sw.link')}
                    </SwLink>
                </Tab4>
            </Tabs>}
            <Input
                type="text"
                placeholder={t('basket.reset.password.input.email.placeholder')}
                name="email"
                required
            />
            <Input
                type="text"
                placeholder={t('basket.reset.password.input.code.placeholder')}
                name="code"
                required
            />
            <Input
                type="password"
                id="password-input"
                placeholder={t(
                    'basket.reset.password.input.password.placeholder'
                )}
                name="password"
                required
            />
            <RegButton type="submit">
                {t('basket.reset.password.reg.button')}
            </RegButton>
        </Form>
    );
};

export default ResetPassword;
