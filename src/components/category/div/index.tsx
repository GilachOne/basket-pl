import React from 'react';
import styled from '@emotion/styled';

import { ErrorSpan } from '../../../components/error/span';

const StyledDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    margin-bottom: 12px;
`;

export const Categories = ({ error, ...divProps }) => (
    <>
        <StyledDiv {...divProps} />
        {error && <ErrorSpan>{error}</ErrorSpan>}
    </>
);
