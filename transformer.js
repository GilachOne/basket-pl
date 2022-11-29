/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = require('babel-jest').default.createTransformer({
    env: {
        test: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
        },
    },
});
