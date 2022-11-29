import styled from '@emotion/styled';
import { image_backgraund } from '../../public';

export const MainLanding = styled.main`
    overflow: hidden;
    display: flow-root;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 428px;
`;

export const SectionMainLanding = styled.section`
    background-image: url(${image_backgraund});
    background-repeat: no-repeat;
    background-position-x: center;
    position: relative;
    padding-top: 48px;
    padding-bottom: 0px;
    text-align: center;
`;

export const LogoMiniName = styled.img`
    display: block;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 32px;
    margin-left: auto;
`;

export const HeadingFirstText = styled.h1`
    margin: 0 auto 32px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: ${props => props.theme.colors.text.main};
`;

export const HeadingSecondText = styled.h2`
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 32px;
    margin-left: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${props => props.theme.colors.text.main};
`;

export const FormInputButton = styled.form`
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 16px;
    margin-left: auto;
`;

export const InputEmail = styled.input`
    display: block;
    margin: 0 auto 12px;
    width: 378px;
    height: 52px;
    padding-left: 12px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
    color: rgba(117, 117, 117, 0.59);
`;

export const ButtonStart = styled.button`
    display: block;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 12px;
    margin-left: auto;
    width: 378px;
    height: 52px;
    background: ${props => props.theme.colors.bg.main};
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme.colors.text.main};
    cursor: pointer;
    user-select: none;
`;

export const ButtonContinue = styled.button`
    display: block;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 12px;
    margin-left: auto;
    width: 164px;
    height: 52px;
    background: ${props => props.theme.colors.background.main};
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme.colors.text.main};
    cursor: pointer;
    user-select: none;
`;

export const RemarkText = styled.p`
    margin: 0 auto 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.colors.text.main};
`;

export const ImageMain = styled.img`
    display: block;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
`;

export const SectionFeature = styled.section`
    margin: 0;
    padding-top: 0px;
    padding-left: 24px;
    padding-bottom: 64px;
    padding-right: 24px;
`;

export const BlockFeature = styled.div`
    margin-bottom: 48px;
`;

export const ImageFeature = styled.img`
    display: block;
    margin-bottom: 16px;
`;

export const TitleFeature = styled.h3`
    margin-top: 0px;
    margin-bottom: 16px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme.colors.text.dark};
`;

export const TextFeature = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: ${props => props.theme.colors.text.light};
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const SectionLogoSponsor = styled.section`
    margin-top: 0px;
    margin-left: 24px;
    margin-bottom: 64px;
    margin-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 0px;
    padding-left: 0px;
    border-top: 1px solid ${props => props.theme.colors.accent.light2};
    border-bottom: 1px solid ${props => props.theme.colors.accent.light2};
`;
export const UlLogoSponsor = styled.ul`
    display: flex;
    padding-left: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;

export const LiLogoSponsor = styled.li`
    list-style: none;
    margin: 6px 8px 6px 8px;
`;

export const ImgLogoSponsor = styled.img`
    display: block;
`;

export const SectionTeamMessage = styled.section`
    padding-top: 64 px;
    padding-right: 24px;
    padding-bottom: 64px;
    padding-left: 24px;
    text-align: center;
`;

export const TextTeamMessage = styled.p`
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 24px;
    margin-left: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
`;

export const TitleTeamMessage = styled.h3`
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 24px;
    margin-left: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
`;
export const SectionHelp = styled.section`
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 64px;
    margin-right: 0px;
    padding-top: 64px;
    padding-right: 24px;
    padding-bottom: 64px;
    padding-left: 24px;
    background-color: ${props => props.theme.colors.accent.light3};
`;
export const DivSetHelp = styled.div`
    margin: 0;
    padding: 0;
`;

export const TextTitleHelp = styled.h2`
    margin-top: 0px;
    margin-bottom: 64px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: ${props => props.theme.colors.text.dark};
`;

export const ButtonBlockHelp = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    margin-bottom: 16px;
    background: none;
    border: none;
    border-radius: 0;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.theme.colors.text.dark};
`;

export const ImgButtonHelp = styled.img`
    display: block;
`;

export const TextBlockHelp = styled.p`
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: ${props => props.theme.colors.text.light};
`;

export const UlBlockSetHelp = styled.ul`
    margin: 0;
    padding: 0;
`;

export const LiBlockHelp = styled.li`
    margin-bottom: 16px;
    list-style: none;
    border-bottom: 1px solid ${props => props.theme.colors.accent.light2};
`;
export const DivBlockHelp = styled.div`
    margin: 0;
    padding-bottom: 16px;
`;
