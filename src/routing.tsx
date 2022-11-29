import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { URLs } from './__data__/urls';
import { NotFoundPage } from './pages/notfound';
const MainLandingComponent = lazy(() => import('./pages/main_landing/landing'));

const DashboardPage = lazy(() => import('./pages/dashboard/dashboard'));

const SignIn = lazy(() => import('./pages/registration/sign-in'));

const SignUp = lazy(() => import('./pages/registration/sign-up'));

const ResetPassword = lazy(() => import('./pages/registration/reset-password'));

const List = lazy(() => import('./pages/list/list'));

const CategorySelect = lazy(() => import('./pages/list/category_select'));

import { Loader } from './components/loader';

export const Routing = () => (
    <Routes>
        {URLs.landing.isEnabled && (
            <Route
                path={URLs.landing.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <MainLandingComponent />
                    </Suspense>
                }
            />
        )}
        {URLs.signIn.url && (
            <Route
                path={URLs.signIn.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <SignIn />
                    </Suspense>
                }
            />
        )}
        {URLs.signUp.url && (
            <Route
                path={URLs.signUp.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <SignUp />
                    </Suspense>
                }
            />
        )}
        {URLs.resetPassword.url && (
            <Route
                path={URLs.resetPassword.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <ResetPassword />
                    </Suspense>
                }
            />
        )}
        {URLs.dashboard.url && (
            <Route
                path={URLs.dashboard.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <DashboardPage />
                    </Suspense>
                }
            />
        )}
        {URLs.list.url && (
            <Route
                path={URLs.list.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <List />
                    </Suspense>
                }
            />
        )}
        {URLs.add.url && (
            <Route
                path={URLs.add.url}
                element={
                    <Suspense fallback={<Loader />}>
                        <CategorySelect />
                    </Suspense>
                }
            />
        )}
        <Route
            path="*"
            element={
                <Suspense fallback={<Loader />}>
                    <NotFoundPage />
                </Suspense>
            }
        />
    </Routes>
);
