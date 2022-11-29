import { getNavigationsValue } from '@ijl/cli';

const baseURL = getNavigationsValue('basket.main');

export const URLs = {
    landing: {
        url: `${baseURL}`,
        isEnabled: getNavigationsValue('basket.main'),
    },
    dashboard: {
        url: `${baseURL}${getNavigationsValue('basket.dashboard')}`,
        isEnabled: getNavigationsValue('basket.dashboard'),
    },
    signIn: {
        url: `${baseURL}${getNavigationsValue('basket.sign.in')}`,
        getUrlWidthEmail: email => {
            if (email) {
                return `${baseURL}${getNavigationsValue(
                    'basket.sign.in'
                )}?email=${email}`;
            }
            return `${baseURL}${getNavigationsValue('basket.sign.in')}`;
        },
        isEnabled: getNavigationsValue('basket.sign.in'),
    },
    signUp: {
        url: `${baseURL}${getNavigationsValue('basket.sign.up')}`,
        getUrlWidthEmail: email => {
            if (email) {
                return `${baseURL}${getNavigationsValue(
                    'basket.sign.up'
                )}?email=${email}`;
            }
            return `${baseURL}${getNavigationsValue('basket.sign.up')}`;
        },
        isEnabled: getNavigationsValue('basket.sign.up'),
    },
    list: {
        url: `${baseURL}${getNavigationsValue('basket.list')}`,
        getUrl: listId =>
            `${baseURL}${getNavigationsValue('basket.list')}`.replace(
                ':id',
                listId
            ),
        isEnabled: getNavigationsValue('basket.list'),
    },
    add: {
        url: `${baseURL}${getNavigationsValue('basket.add')}`,
        getUrl: listId =>
            `${baseURL}${getNavigationsValue('basket.add')}`.replace(
                ':id',
                listId
            ),
        isEnabled: getNavigationsValue('basket.add'),
    },
    resetPassword: {
        url: `${baseURL}${getNavigationsValue('basket.reset.password')}`,
        isEnabled: getNavigationsValue('basket.reset.password'),
    },
};
