import React, {FC,ReactNode} from 'react';
import {NetworkMode} from "@tanstack/react-query";

type NetworkProviderProps = {
    children: ReactNode
}

const NetworkProvider: FC<NetworkProviderProps> = (props) => {
    const {children} = props
    return (
        <>
            {children}
        </>
    );
};

export default NetworkProvider;
