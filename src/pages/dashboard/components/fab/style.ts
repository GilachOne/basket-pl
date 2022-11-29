import styled from '@emotion/styled';

export const FabButton = styled.button`
    width: 64px;
    height: 64px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.theme.colors.accent.main};
    color: ${props => props.theme.colors.text.main};
    font-size: 28px;
    position: fixed;
    right: 64px;
    bottom: 64px;
    border: 0px;
    :focus {
        outline: none;
    }
`;
