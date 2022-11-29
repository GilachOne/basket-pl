import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Form as FinalForm, Field } from 'react-final-form';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { logo } from '../../public';
import { URLs } from '../../__data__/urls';
import { Input } from '../../components/input';

import { useSignInMutation } from '../../__data__/api/auth'; //
import { setToken } from '../../utils/token';

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

const NoLink = styled.a`
    color: #2c107a;
    background-color: initial;
    text-decoration: none;
    cursor: auto;
    border-bottom: 0.3rem solid #2c107a;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
`;

const ResetLink = styled(Link)`
    cursor: pointer;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
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

    :disabled {
        background-color: grey;
    }
`;

const SignIn = () => {
    const { t } = useTranslation();
    const [signIn, { isLoading, data, isSuccess, isError, error }] =
        useSignInMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess && data?.data.token) {
            setToken(data.data.token);
            navigate(URLs.dashboard.url);
        }
    }, [data, isSuccess, navigate]);
    const [searchParams] = useSearchParams();
    const requiredEmail = value =>
        value ? undefined : t('basket.sign.up.input.required.email');
    const requiredPassword = value =>
        value ? undefined : t('basket.sign.up.input.required.password');
    const checkEmail = value =>
        /[a-z0-9-_]{2,12}@[a-z0-9-_]{2,8}.[a-z]{2}/i.test(value)
            ? undefined
            : t('basket.sign.up.input.check.email');

    const composeValidators =
        (...validators) =>
        value =>
            validators.reduce(
                (error, validator) => error || validator(value),
                undefined
            );

    const onSubmit = data => {
        signIn(data);
    };

    return (
        <FinalForm
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <LogoImg src={logo} />
                    <TitleH1>{t('basket.sign.in.title.h1')}</TitleH1>
                  {URLs.signUp.isEnabled &&  <Tabs>
                        <Tab3>
                            <NoLink>{t('basket.sign.in.no.link')}</NoLink>
                        </Tab3>
                        <Tab4>
                            <SwLink to={URLs.signUp.url}>
                                {t('basket.sign.in.sw.link')}
                            </SwLink>
                        </Tab4>
                    </Tabs> }
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
                        name="password"
                        validate={composeValidators(requiredPassword)}
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
                        {t('basket.sign.in.reg.button')}
                    </RegButton>
                   {URLs.resetPassword.isEnabled && <ResetLink to={URLs.resetPassword.url}>
                        {t('basket.reset.password.title.h1')}
                    </ResetLink> }
                </Form>
            )}
        />
    );
};

export default SignIn;
