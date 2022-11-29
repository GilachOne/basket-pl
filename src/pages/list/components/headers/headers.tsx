import copy from 'copy-to-clipboard';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useGetShoppingListQuery } from '../../../../__data__/api/main';
import { arrow_left, rotate, share } from '../../../../public';
import { URLs } from '../../../../__data__/urls';
import {
    Container,
    Header,
    RotateWrap,
    ShareWrap,
    ArrowLeftWrap,
    Btn,
    NavLink,
    Mail,
} from '../../style';

export const Header1 = () => {
    const { t } = useTranslation();
    const param = useParams();
    const { refetch } = useGetShoppingListQuery(param.id);

    const [isCopied, setCopied] = useState(false);
    const timerId = useRef(null);
    const shareData = {
        url: window.location.href,
    };

    function handleClick() {
        if (navigator.share) {
            navigator.share(shareData);
        } else {
            copy(window.location.href);
            setCopied(true);
            timerId.current = setTimeout(() => {
                setCopied(false);
            }, 3000);
        }
    }
    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    return (
        <Header>
            <Container>
                <ArrowLeftWrap>
                    <NavLink
                        to={URLs.dashboard.url}
                        title={t('basket.list.header.back')}
                    >
                        <img src={arrow_left} alt="" />
                    </NavLink>
                </ArrowLeftWrap>
                <RotateWrap>
                    <Btn
                        onClick={refetch}
                        title={t('basket.list.header.update')}
                    >
                        <img src={rotate} alt="" />
                    </Btn>
                </RotateWrap>
                <ShareWrap>
                    <Btn
                        onClick={handleClick}
                        title={t('basket.list.header.share')}
                    >
                        <img src={share} alt="" />
                        {isCopied && (
                            <Mail>{t('basket.header.share.text')}</Mail>
                        )}
                    </Btn>
                </ShareWrap>
            </Container>
        </Header>
    );
};

export const Header2 = () => {
    const { t } = useTranslation();
    const param = useParams();
    return (
        <Header>
            <Container>
                <NavLink
                    to={URLs.list.getUrl(param.id)}
                    title={t('basket.add.list.back')}
                >
                    <img src={arrow_left} alt="back" />
                </NavLink>
            </Container>
        </Header>
    );
};
