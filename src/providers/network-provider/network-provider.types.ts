import {ReactNode} from "react";

type NetworkProviderProps = {
    children: ReactNode
}

type NetworkDrawerProps = {
    onlineStatus: boolean
    closeModal(): void
}

export type {NetworkDrawerProps, NetworkProviderProps}
