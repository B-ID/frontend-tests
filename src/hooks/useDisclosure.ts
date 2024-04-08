import { useCallback, useState} from "react";

export const useDisclosure  = (defaultState: boolean) => {
    const [isOpen, setIsOpen] = useState(defaultState);

    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])
    const toggle= useCallback(() => setIsOpen((state) => !state), [])

    return {isOpen, open, close, toggle}

}
