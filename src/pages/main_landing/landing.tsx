import React, { useCallback, useEffect, useState } from 'react';

import {
    logo_small_title,
    image_main,
    logo_elbrus,
    logo_yandex_maps,
    logo_innopolis,
    logo_redcoder,
    logo_telegram,
    logo_vkontakte,
    button_minus,
    button_plus,
} from '../../public';

import {
    MainLanding,
    SectionMainLanding,
    LogoMiniName,
    HeadingFirstText,
    HeadingSecondText,
    FormInputButton,
    SectionFeature,
    BlockFeature,
    InputEmail,
    ButtonStart,
    ButtonContinue,
    RemarkText,
    ImageMain,
    ImageFeature,
    TitleFeature,
    TextFeature,
    SectionLogoSponsor,
    SectionTeamMessage,
    TitleTeamMessage,
    TextTeamMessage,
    SectionHelp,
    TextTitleHelp,
    UlLogoSponsor,
    LiLogoSponsor,
    ImgLogoSponsor,
    UlBlockSetHelp,
    LiBlockHelp,
    DivSetHelp,
    TextBlockHelp,
    ButtonBlockHelp,
    DivBlockHelp,
    ImgButtonHelp,
} from './style';

import { useTranslation } from 'react-i18next';

import DataLanding from '../../../stubs/json/landing/success.json';

import { useNavigate } from 'react-router-dom';

import { URLs } from '../../__data__/urls';
import { getToken } from '../../utils/token';

const MainLandingComponent = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState({});
    const toggleShow = useCallback(
        event => {
            const itemId = event.target.dataset.itemId;
            setShow({
                ...show,
                [itemId]: !show[itemId],
            });
        },
        [show]
    );

    const [email, setEmail] = useState('');
    const inputEmail = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const navigate = useNavigate();

    useEffect(() => {
        !getToken() ? undefined : navigate(URLs.dashboard.url);
    }, [navigate]);

    const submitNavigateSign = event => {
        event.preventDefault();

        if (URLs.signUp.isEnabled) {
            return navigate(URLs.signUp.getUrlWidthEmail(email));
        }
        return navigate(URLs.signIn.getUrlWidthEmail(email));
    };

    return (
        <MainLanding>
            <SectionMainLanding>
                <LogoMiniName src={logo_small_title} alt="logo-mini-name" />

                <HeadingFirstText>
                    {t('basket.landing.heading.first.text')}
                </HeadingFirstText>
                <HeadingSecondText>
                    {t('basket.landing.heading.second.text')}
                </HeadingSecondText>
                <FormInputButton onSubmit={submitNavigateSign}>
                    <InputEmail
                        type="email"
                        placeholder={t('basket.landing.input.email.text')}
                        onChange={inputEmail}
                    />
                    <ButtonStart
                        title={t('basket.landing.button.start.text')}
                        type="submit"
                    >
                        {t('basket.landing.button.start.text')}
                    </ButtonStart>
                </FormInputButton>
                <RemarkText>
                    {t('basket.landing.remark.text1')}
                    <br />
                    {t('basket.landing.remark.text2')}
                </RemarkText>

                <ImageMain src={image_main} alt="image-main" />
            </SectionMainLanding>

            <SectionFeature>
                {DataLanding.data.map(itemData => {
                    return itemData.features.map(itemFeatures => {
                        return (
                            <BlockFeature key={itemFeatures.id}>
                                <ImageFeature
                                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                                    src={`${__webpack_public_path__}/remote-assets/${itemFeatures.nameImg}`}
                                    alt={itemFeatures.altImg}
                                />
                                <TitleFeature>
                                    {itemFeatures.title}
                                </TitleFeature>
                                <TextFeature>{itemFeatures.text}</TextFeature>
                            </BlockFeature>
                        );
                    });
                })}
            </SectionFeature>

            <SectionLogoSponsor>
                <UlLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor src={logo_elbrus} alt="logo-elbrus" />
                    </LiLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor
                            src={logo_yandex_maps}
                            alt="logo-yandex-maps"
                        />
                    </LiLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor
                            src={logo_innopolis}
                            alt="logo-innopolis"
                        />
                    </LiLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor
                            src={logo_redcoder}
                            alt="logo-redcoder"
                        />
                    </LiLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor
                            src={logo_telegram}
                            alt="logo-telegram"
                        />
                    </LiLogoSponsor>
                    <LiLogoSponsor>
                        <ImgLogoSponsor
                            src={logo_vkontakte}
                            alt="logo-vkontakte"
                        />
                    </LiLogoSponsor>
                </UlLogoSponsor>
            </SectionLogoSponsor>

            <SectionTeamMessage>
                <TextTeamMessage>
                    {t('basket.landing.team.message.text1')}
                </TextTeamMessage>
                <TitleTeamMessage>
                    {t('basket.landing.team.message.text2')}
                </TitleTeamMessage>
                <ButtonContinue
                    type="button"
                    onClick={submitNavigateSign}
                    title={t('basket.landing.button.continue.text')}
                >
                    {t('basket.landing.button.continue.text')}
                </ButtonContinue>
            </SectionTeamMessage>

            <SectionHelp>
                <TextTitleHelp>
                    {t('basket.landing.title.help.text')}
                </TextTitleHelp>
                <DivSetHelp>
                    <UlBlockSetHelp>
                        {DataLanding.data.map(itemData =>
                            itemData.helps.map(itemHelps => (
                                <LiBlockHelp key={itemHelps.id}>
                                    <ButtonBlockHelp
                                        type="button"
                                        onClick={toggleShow}
                                        data-item-id={itemHelps.id}
                                        data-testid={itemHelps.id}
                                    >
                                        {itemHelps.title}
                                        {show[itemHelps.id] ? (
                                            <ImgButtonHelp
                                                src={button_minus}
                                                alt="minus"
                                            />
                                        ) : (
                                            <ImgButtonHelp
                                                src={button_plus}
                                                alt="plus"
                                            />
                                        )}
                                    </ButtonBlockHelp>
                                    {show[itemHelps.id] && (
                                        <DivBlockHelp>
                                            <TextBlockHelp>
                                                {itemHelps.text}
                                            </TextBlockHelp>
                                        </DivBlockHelp>
                                    )}
                                </LiBlockHelp>
                            ))
                        )}
                    </UlBlockSetHelp>
                </DivSetHelp>
            </SectionHelp>
        </MainLanding>
    );
};

export default MainLandingComponent;
