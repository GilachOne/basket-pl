import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { kebab } from '../../../../public';

export const CustomSelect = css`
    .react-dropdown-select-dropdown {
        overflow-y: auto;
        overflow-x: auto;
        width: auto;
        margin-left: -120px;
    }
    .react-dropdown-select-content {
        display: none;
    }
`;

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.accent.light};
`;

export const ListBox = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    background: ${props => props.theme.colors.text.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ListLeftDiv = styled.div`
    margin-left: 20px;
    margin-right: 10px;
    align-items: center;
    justify-content: start;
    word-break: break-all;
    flex-grow: 1;
    flex-shrink: 1;
    cursor: pointer;
`;

export const ListRightDiv = styled.div`
    margin-right: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;

    & .${CustomSelect} {
        width: 24px;
        height: 24px;
        min-height: 24px;
        min-width: 24px;
        cursor: pointer;
        border-radius: 50%;
        border: 0;
        background-image: url(${kebab});
        font-size: 16px;
        font-weight: 500;
        :focus-within {
            outline: 0;
            box-shadow: none;
        }
    }
`;

export const ListText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.bg.main};
`;

export const ListCounts = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.background.main};
    margin-right: 10px;
`;

export const Logo = styled.img`
    margin-top: 64px;
    margin-bottom: 30px;
`;

export const UnderLogoText = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    color: ${props => props.theme.colors.text.light};
    margin: 0px;
    word-break: break-all;
`;
