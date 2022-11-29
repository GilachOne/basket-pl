import React from 'react';
import Lottie from 'lottie-react';
import styled from '@emotion/styled';
import i18next from 'i18next';

import { animations } from '../../__data__';

const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const AniWrapper = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
`;

type ErrorBoundaryState = {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<unknown, ErrorBoundaryState> {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_error) {
      return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <TopWrapper>
                    <h1>{i18next.t('basket.errorpage.title')}</h1>
                        <AniWrapper>
                            <Lottie animationData={animations.error} />
                        </AniWrapper>
                    </TopWrapper>
                </>
            );
        }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;
