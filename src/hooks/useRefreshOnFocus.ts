import {useEffect, useCallback, useRef} from 'react'


type RefreshFocusProps = {
    refetch: () => void
}


const useRefreshOnFocus = ({refetch}: RefreshFocusProps) => {
    const enabledRef = useRef(false)
    useEffect(
        useCallback(() => {
            if (enabledRef.current) {
                refetch()
            } else {
                enabledRef.current = true
            }
        }, [refetch]),
    )

}

export {useRefreshOnFocus}
