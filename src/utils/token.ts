export const localStorageTokenKey = 'bascet.token.key';

export const setToken = token =>
    localStorage.setItem(localStorageTokenKey, token);
export const getToken = () => localStorage.getItem(localStorageTokenKey);
export const removeToken = () => localStorage.removeItem(localStorageTokenKey);
