import {buildProvidersTree} from "@/utils/build-providers-tree";
import TanStackProvider from "@/providers/tanstack-provider";

const ProvidersTree = buildProvidersTree([
    [TanStackProvider]
])

export default ProvidersTree

