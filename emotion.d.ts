import '@emotion/react';

import { theme } from './src/theme';

declare module '@emotion/react' {
    export interface Theme {
        colors: typeof theme.colors;
    }
}
