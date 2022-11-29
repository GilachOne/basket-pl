import React from 'react';

import { LoaderWrap, Circle } from './style';

export const Loader = () => {
    return (
        <LoaderWrap>
            <Circle delay={0.1} />

            <Circle delay={0.2} />

            <Circle delay={0.3} />

            <Circle delay={0.4} />

            <Circle delay={0.5} />

            <Circle delay={0.6} />

            <Circle delay={0.7} />

            <Circle delay={0.8} />
        </LoaderWrap>
    );
};
