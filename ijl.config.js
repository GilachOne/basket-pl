const pkg = require('./package');

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${
                process.env.VERSION || pkg.version
            }/`,
        },
    },
    navigations: {
        'basket.main': '/basket',
        'basket.sign.in': '/sign-in',
        'basket.sign.up': '/sign-up',
        'basket.dashboard': '/dashboard',
        'basket.list': '/list/:id',
        'basket.add': '/list/:id/add',
      'basket.reset.password': '/reset/password',
    },
    features: {
        basket: {
            'dashboard.copylist': {
                on: true,
                value: '',
                key: 'dashboard.copylist',
            },
        },
    },
    config: {
        'basket.api.base.url': '/api',
        // 'basket.api.base.url': 'https://b1.inno-js.ru/multystub/basket',
        // 'basket.api.base.url': 'http://localhost:8043/basket'
    },
};
