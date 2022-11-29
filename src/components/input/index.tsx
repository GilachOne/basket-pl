import React from 'react';
import styled from '@emotion/styled';

import { ErrorSpan } from '../../components/error/span';

const StyledInput = styled.input`
    width: 100%;
    height: 52px;
    margin: 0 0 12px 0;
    border-radius: 3px;
    border: none;
    background: ${props => props.theme.colors.accent.light5};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 10px;

    :disabled {
        background-color: #ccc;
    }
`;

export const Input = ({ error, ...inputProps }) => (
    <>
        <StyledInput {...inputProps} />
        {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
);
