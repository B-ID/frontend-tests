import {buildProvidersTree} from "@/utils/build-providers-tree";
import TanStackProvider from "@/providers/tanstack-provider";
import ErrorBoundaryProvider from "@/providers/error-boundary-provider";
import NetworkProvider from "@/providers/network-provider";
import AuthProvider from "@/providers/auth-provider";
import {ThemeProvider} from "@/providers/theme-provider";

const ProvidersTree = buildProvidersTree([
    [ThemeProvider],
    [AuthProvider],
    [ErrorBoundaryProvider],
    [NetworkProvider],
    [TanStackProvider],
])

export default ProvidersTree

