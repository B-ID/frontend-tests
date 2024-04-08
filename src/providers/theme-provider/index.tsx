import {FC} from 'react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { type ThemeProviderProps} from 'next-themes/dist/types'

type NextThemeProviderProps = ThemeProviderProps


const ThemeProvider: FC<NextThemeProviderProps> = (props) => {
    const {children, ...rest} = props
    return (
        <NextThemesProvider {...rest}>
            {children}
        </NextThemesProvider>
    );
};

export {ThemeProvider};
