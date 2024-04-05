import {FC, ReactNode} from 'react'
type ComponentWithProps = [FC<any>, Record<string, any>?];


export const buildProvidersTree = (componentsWithProps: ComponentWithProps[]) => {
    const initialComponent: FC<{children: ReactNode}> = ({children}) => <>{children}</>

    return componentsWithProps.reduce(
        (AccumulatedComponents, [Provider, props ={}]) => {
            return ({children}) => {
                return (
                    <AccumulatedComponents>
                        <Provider {...props}>{children}</Provider>
                    </AccumulatedComponents>
                )
            }
        }, initialComponent
    )
}
