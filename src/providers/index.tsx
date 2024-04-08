import {buildProvidersTree} from "@/utils/build-providers-tree";
import TanStackProvider from "@/providers/tanstack-provider";
import ErrorBoundaryProvider from "@/providers/error-boundary-provider";
import NetworkProvider from "@/providers/network-provider";

const ProvidersTree = buildProvidersTree([
    [ErrorBoundaryProvider],
    [NetworkProvider],
    [TanStackProvider],
])

export default ProvidersTree

