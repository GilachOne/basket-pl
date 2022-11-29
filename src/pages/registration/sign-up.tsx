import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Form as FinalForm, Field } from 'react-final-form';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { logo } from '../../public';
import { URLs } from '../../__data__/urls';
import { Input } from '../../components/input';

import { useSignUpMutation } from '../../__data__/api/auth'; //

const Form = styled.form`
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
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
    border-bottom: 0.1rem solid ${props => props.theme.colors.accent.light4};
    margin-bottom: 32px;
`;

const Tab3 = styled.div`
    padding: 2rem 3.5rem;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.text.light3};
`;

const Tab4 = styled.div`
    padding: 0rem 3.5rem;
    padding-right: 12rem;
    cursor: pointer;
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

const NoLink = styled.a`
    color: ${props => props.theme.colors.accent.dark};
    background-color: initial;
    text-decoration: none;
    cursor: auto;
    border-bottom: 0.3rem solid ${props => props.theme.colors.accent.dark};
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
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
    color: ${props => props.theme.colors.accent.dark};
`;

const RegButton = styled.button`
    background-color: ${props => props.theme.colors.brand.light2};
    border-radius: 3px;
    color: ${props => props.theme.colors.text.main};
    padding: 16px 20px;
    margin: 32px 32px;
    border: none;
    cursor: pointer;
    width: 80%;
    opacity: 0.9;
    font-family: 'Roboto', sans-serif;

    :disabled {
        background-color: grey;
    }
`;

const SignUp = () => {
    const { t } = useTranslation();
    const [signUp, { isLoading, data, isSuccess, isError, error }] =
        useSignUpMutation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isSuccess) {
            navigate(URLs.signIn.getUrlWidthEmail(email));
        }
    }, [isSuccess, navigate, email]);
    const [searchParams] = useSearchParams();    
    const requiredEmail = value =>
        value ? undefined : t('basket.sign.up.input.required.email');
    const requiredLogin = value =>
        value ? undefined : t('basket.sign.up.input.required.login');
    const requiredPassword = value =>
        value ? undefined : t('basket.sign.up.input.required.password');
    const checkEmail = value =>
        /[a-z0-9-_]{2,12}@[a-z0-9-_]{2,8}.[a-z]{2}/i.test(value)
            ? undefined
            : t('basket.sign.up.input.check.email');
    const checkLogin = value =>
        /^(?=.{4,}$)(^[a-zA-z]{1})(?=.*[a-zA-Z0-9-_])/.test(value)
            ? undefined
            : t('basket.sign.up.input.check.login');
    const checkPassword = value =>
        /^(?=.{5,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(value)
            ? undefined
            : t('basket.sign.up.input.check.password');

    const composeValidators =
        (...validators) =>
        value =>
            validators.reduce(
                (error, validator) => error || validator(value),
                undefined
            );

    const onSubmit = data => {
        setEmail(data.email);
        signUp(data);
    };

    return (
        <FinalForm
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <LogoImg src={logo} />
                    <TitleH1>{t('basket.sign.in.title.h1')}</TitleH1>
                    <Tabs>
                        <Tab3>
                            <SwLink to={URLs.signIn.url}>
                                {t('basket.sign.in.no.link')}
                            </SwLink>
                        </Tab3>
                        <Tab4>
                            <NoLink>{t('basket.sign.in.sw.link')}</NoLink>
                        </Tab4>
                    </Tabs>
                    {isError && (
                        <span style={{ color: 'red' }}>
                            {error?.data?.error || 'Что-то пошло не так'}
                        </span>
                    )}
                    <Field
                        initialValue={searchParams.get('email')}
                        name="email"
                        validate={composeValidators(requiredEmail, checkEmail)}
                        render={({ input, meta }) => (
                            <Input
                                type="text"
                                {...input}
                                error={meta.touched && meta.error}
                                placeholder={t(
                                    'basket.sign.up.input.email.placeholder'
                                )}
                                disabled={isLoading}
                            />
                        )}
                    />
                    <Field
                        name="login"
                        validate={composeValidators(requiredLogin, checkLogin)}
                        render={({ input, meta }) => (
                            <Input
                                type="text"
                                {...input}
                                error={meta.touched && meta.error}
                                placeholder={t(
                                    'basket.sign.up.input.login.placeholder'
                                )}
                                disabled={isLoading}
                            />
                        )}
                    />
                    <Field
                        name="password"
                        validate={composeValidators(
                            requiredPassword,
                            checkPassword
                        )}
                        render={({ input, meta }) => (
                            <Input
                                type="password"
                                {...input}
                                error={meta.touched && meta.error}
                                placeholder={t(
                                    'basket.sign.up.input.password.placeholder'
                                )}
                                disabled={isLoading}
                            />
                        )}
                    />
                    <RegButton type="submit" disabled={isLoading}>
                        {t('basket.sign.in.sw.link')}
                    </RegButton>
                </Form>
            )}
        />
    );
};

export default SignUp;
