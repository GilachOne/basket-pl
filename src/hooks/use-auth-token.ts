import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../utils/token';
import { URLs } from '../__data__/urls';

export const useAuthToken = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!getToken()) {
            navigate(URLs.signIn.url);
        }
    }, [navigate]);
};
