import React, {FC, ReactNode} from 'react';


type AuthProviderProps = {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = (props) => {
    const {children} = props
    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;
