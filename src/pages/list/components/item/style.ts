import styled from '@emotion/styled';

type BgProps = {
    color: string;
};
type Bue = {
    color: string;
    bought: boolean;
};
type Bought = {
    bought: boolean;
};
export const ListItem = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr 3rem;
    height: 6.25rem;
    box-shadow: 0px 0.5rem 0.5rem 0px rgba(2, 2, 2, 0.25);
    border-radius: 0.5rem;
    margin-bottom: 0.6rem;
`;
export const ErrorBlock = styled.div`
    font-size: 0.5rem;
    color: ${props => props.theme.colors.accent.main};
    position: absolute;
    right: 50%;
    bottom: 2em;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.accent.main};
    border-radius: 0.5rem;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
    padding: 5px;
    transition: 0.5s;
`;
export const ListItemBlock1 = styled.div<Bue>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    background-color: ${(props: Bue) =>
        props.bought ? hexToRGB(props.color, 0.1) : props.color};
    background-size: contain;
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
`;
export const ListItemBlock2 = styled.div`
    padding: 0.4rem;
    position: relative;
`;
export const ItemText = styled.p<Bought>`
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 0.9rem;
    color: #42474c;
    ${props =>
        props.bought
            ? `
        text-decoration: line-through;
    `
            : ''}
`;
export const ListItemBlock3 = styled.div<BgProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => hexToRGB(props.color, 0.1)};
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;
export const BsktArrWrap = styled.div<Bought>`
    margin-left: 0.3rem;
    ${props =>
        props.bought
            ? `
       transform: rotate(180deg); 
    `
            : ''}
`;
export const Btn = styled.button`
    background: none;
    border: none;
    width: min-content;
`;
export const DelBtn = styled.button`
    background: none;
    border: none;
    width: min-content;
    position: absolute;
    left: 0;
    bottom: 0;
`;

export function hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}
