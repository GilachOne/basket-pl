import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
    delay: number;
};

export const LoaderWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const loading = keyframes`
0%{
    transform: translateY(0px);
    background-color: #74D14C;
}
50%{
    transform: translateY(50px);
    background-color: #008060;
}
100%{
    transform: translateY(0px);
    background-color: #74D14C;
}
`;
export const Circle = styled.span<Props>`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #74d14c;
    border-radius: 50%;
    animation: ${loading} 1.5s cubic-bezier(0.8, 0.5, 0.2, 1.4) infinite;
    transform-origin: bottom center;
    position: relative;
    animation-delay: ${props => props.delay}s;
`;
