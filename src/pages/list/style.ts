import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    width: min-content;
`;
export const Btn = styled.button`
    background: none;
    border: none;
    width: min-content;
`;
export const ArrowLeftWrap = styled.div`
    display: inline-block;
`;
export const RotateWrap = styled.div`
    display: inline-block;
    padding-left: 1.8rem;
`;
export const ShareWrap = styled.div`
    display: inline-block;
    right: 1.2rem;
    position: absolute;
`;
export const Container = styled.div`
    padding: 1.2rem;
    position: relative;
`;
export const Header = styled.div`
    background-color: ${props => props.theme.colors.background.main};
`;
export const ListHeadName = styled.h2`
	margin-bottom: 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${props => props.theme.colors.text.light2};
	margin-right: 4px;
`;
export const Category = styled.button`
    display: flex;
	border: none;
    flex-direction: row;
    height: 48px;
    border-radius: 0.2rem;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
    background-color: ${props => props.color};
	cursor: pointer;
	font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    align-items: center;
    color: ${props => props.theme.colors.text.light2};
	padding-left: 0px;
`;
export const CategoryColor = styled.div`
    width: 1rem;
    height: inherit;
    background-color: ${props => props.color};
    border-bottom-left-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
	margin-right: 4px;
`;
export const Comment = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: left;
    align-items: center;
    color: ${props => props.theme.colors.accent.main};
    margin-top: 0px;
	margin-bottom: 8px;
`;
export const InputName = styled.div`
    width: 100%;
    position: relative;
    display: block;
    margin-bottom: 0.5rem;
`;

export const AddCategory = styled.button`
    width: 100%;
    height: 52px;
    background-color: ${props => props.theme.colors.accent.light};
    border-radius: 0.2rem;
    border: transparent;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
    margin-bottom: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    :disabled {
        background-color: ${props => props.theme.colors.accent.light6};
    }
`;
export const InputTextWrap = styled.div`
    position: relative;
    width: 100%;
    display: block;
    margin-bottom: 0.5rem;
`;
export const BtnAdd = styled.button`
    width: 100%;
    height: 52px;
    background-color: ${props => props.theme.colors.brand.main};
    border-radius: 0.2rem;
    border: transparent;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
	margin-top: 0px;
    margin-bottom: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    :disabled {
        background-color: ${props => props.theme.colors.accent.light6};
    }
`;
export const Mail = styled.div`
    font-size: 0.9rem;
    color: ${props => props.theme.colors.accent.main};
    position: absolute;
    right: 1rem;
    top: 2em;
    background-color: white;
    border: 1px solid ${props => props.theme.colors.accent.main};
    border-radius: 0.5rem;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
    padding: 5px;
    transition: 0.5s;
`;
export const DivError = styled.div`
    font-size: 0.9rem;
    color: ${props => props.theme.colors.accent.main};
    position: absolute;
    left: 1rem;
    top: 2em;
`;
export const ButtonCirclePlus = styled.button`
	width: 32px;
	height: 32px;
	cursor: pointer;
	border-radius: 50%;
	border: none;
	background: ${props => props.theme.colors.background.main};
    color: ${props => props.theme.colors.text.main};
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 300;
	font-size: 32px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-top: 0.75rem;
	padding-top: 0px;
    padding-bottom: 0px;
`;
export const Ul = styled.ul`
	display: flex;
	margin: 0;
	padding-left: 0;
    flex-wrap: wrap;
	align-items: center;
`;
export const Li = styled.li`
	list-style: none;
`;