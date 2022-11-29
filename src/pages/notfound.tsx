import React from 'react';
import Lottie from 'lottie-react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { animations } from '../__data__';

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const AniWrapper = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
`;

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <TopWrapper>
                <h1>{t('basket.notfoundpage.title')}</h1>
                <AniWrapper>
                    <Lottie animationData={animations.oopss} />
                </AniWrapper>
            </TopWrapper>
        </>
    );
};
