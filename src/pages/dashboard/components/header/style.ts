import styled from '@emotion/styled';

export const Header = styled.header`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background.main};
`;

export const HeaderText = styled.p`
    font-family: 'Roboto';
    font-style: bold;
    font-size: 28px;
    color: ${props => props.theme.colors.text.main};
`;

export const Login = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 14px;
    color: ${props => props.theme.colors.accent.light};
`;

export const LogOut = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    right: 24px;
    position: absolute;
`;
