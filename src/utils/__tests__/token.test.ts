import { describe, it, expect } from '@jest/globals';
import {
    getToken,
    setToken,
    removeToken,
    localStorageTokenKey,
} from '../token';

describe('token utils', () => {
    it('set token', () => {
        expect(localStorage.getItem(localStorageTokenKey)).toBe(null);
        setToken('111');
        expect(localStorage.getItem(localStorageTokenKey)).toBe('111');
    });
    it('get token', () => {
        expect(getToken()).toBe('111');
    });
    it('remove token', () => {
        removeToken();
        expect(localStorage.getItem(localStorageTokenKey)).toBe(null);
    });
});
