// eslint-disable-next-line @typescript-eslint/no-var-requires
const locales = require('../locales/ru.json');

const t = key => locales[key];

module.exports = {
    t,
    useTranslation: () => ({
        t,
    }),
};
