'use client'

import React, {FC,ReactNode} from 'react';
import {ErrorBoundary, useErrorBoundary} from 'react-error-boundary'


type ErrorBoundaryProviderProps = {
    children: ReactNode
}

const ErrorBoundaryProvider: FC<ErrorBoundaryProviderProps> = (props) => {
    const {children} = props
    // const {resetBoundary} = useErrorBoundary()
    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>} onError={() => console.error('something went wrong')} onReset={() => console.log('Error boundary reset')}>
            {children}
        </ErrorBoundary>
    );
};

export default ErrorBoundaryProvider;
