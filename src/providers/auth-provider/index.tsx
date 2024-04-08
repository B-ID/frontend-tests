'use client'

import React, {FC, ReactNode, useEffect} from 'react';
import {axios} from '@/utils/axios-config'


type AuthProviderProps = {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = (props) => {
    const {children} = props


        const interceptor = axios.interceptors.response.use(
            response => response,
            async error => {
                if (error.response && error.response.status === 401) {
                    try {
                        // Perform token refresh or re-authentication
                        // Example:
                        // const refreshedToken = await refreshToken();
                        // Save refreshed token to localStorage or cookies
                        // axios.defaults.headers.common['Authorization'] = `Bearer ${refreshedToken}`;
                        // Retry the original request
                        return axios.request(error.config);
                    } catch (refreshError) {
                        // Handle refresh error or redirect to login page
                        // Example:
                        // redirectToLogin();
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );




    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;
