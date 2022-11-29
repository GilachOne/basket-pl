import React from 'react';
import styled from '@emotion/styled';

import { ErrorSpan } from '../../../components/error/span';

const StyledTextarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.2rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${props => props.theme.colors.text.light};
    border: transparent;
    padding: 0.5rem;
    box-shadow: 0px 0.2rem 0.2rem 0px rgba(2, 2, 2, 0.25);
    :disabled {
        background-color: ${props => props.theme.colors.accent.light6};
    }
`;

export const Textarea = ({ error, ...textareaProps }) => (
    <>
        <StyledTextarea {...textareaProps} />
        {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
);
