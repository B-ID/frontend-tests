'use client'
import React, {FC, ReactNode, useEffect, useState, forwardRef, useRef} from 'react';
import {Button} from '@/components/ui/button'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import {NetworkDrawerProps, NetworkProviderProps} from "./network-provider.types"
import {useDisclosure} from "@/hooks/useDisclosure";


const NetworkDrawer: FC<NetworkDrawerProps> = ((props) => {
    const {onlineStatus, closeModal} = props

    return (
        <Drawer open={onlineStatus}>
            <DrawerTrigger></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Please Reconnect to a network?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose onClick={closeModal}>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
})

const NetworkProvider: FC<NetworkProviderProps> = (props) => {
    const {children} = props
    const {isOpen: isOnline,open,toggle} = useDisclosure(false)
    return (
        <>
            {isOnline && children}
            {!isOnline && (
                <>
                    <h1 className={'text-4xl text-red-500'}>No network</h1>
                    <NetworkDrawer onlineStatus={!isOnline} closeModal={open}  />
                </>
            )}
        </>
    );
};

export default NetworkProvider;
