import styled from '@emotion/styled';

interface SnackBarProps {
    error?: boolean;
}

export const SnackBar = styled.div<SnackBarProps>`
    min-width: 250px;
    transform: translate(-50%, -50%);
    background-color: ${props =>
        props.error
            ? props.theme.colors.bg.main
            : props.theme.colors.accent.dark};
    color: ${props => props.theme.colors.text.main};
    text-align: center;
    border-radius: 5px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 50px;
    font-weight: 500;
    font-size: 18px;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 3.5s;
    animation: fadein 0.5s, fadeout 0.5s 3.5s;

    @-webkit-keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 50px;
            opacity: 1;
        }
    }

    @keyframes fadein {
        from {
            bottom: 0;
            opacity: 0;
        }
        to {
            bottom: 50px;
            opacity: 1;
        }
    }

    @-webkit-keyframes fadeout {
        from {
            bottom: 50px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }

    @keyframes fadeout {
        from {
            bottom: 50px;
            opacity: 1;
        }
        to {
            bottom: 0;
            opacity: 0;
        }
    }
`;
