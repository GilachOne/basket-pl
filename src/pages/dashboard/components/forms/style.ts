import styled from '@emotion/styled';

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.accent.light};
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.text.main};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin: 10px;
`;

export const Form = styled.form``;

export const InputDiv = styled.p``;

export const CreateListLabel = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    color: ${props => props.theme.colors.background.main};
`;

export const Input = styled.input`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    display: flex;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.text.light};
    width: 100%;
    height: 52px;
    :focus {
        outline: none;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CancelButton = styled.button`
    cursor: pointer;
    padding: 15px;
    background: ${props => props.theme.colors.text.main};
    border: 1px solid ${props => props.theme.colors.background.main};
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    color: ${props => props.theme.colors.background.main};
    width: 164px;
    height: 52px;
    justify-content: center;
    margin-right: 10px;
`;

export const CreateButton = styled.button`
    cursor: pointer;
    padding: 15px;
    background: ${props => props.theme.colors.background.main};
    border-radius: 3px;
    border: 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    color: ${props => props.theme.colors.text.main};
    width: 164px;
    height: 52px;
    justify-content: center;
    margin-left: 10px;
`;
