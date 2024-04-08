import {useState} from "react";

const useRefreshByUser = (refetch: () => Promise<unknown>) => {
    const [isRefetchingByUser, setIsRefetchingByUser] = useState(false)

    async function refetchByUser() {
        setIsRefetchingByUser(true)

        try {
            await refetch()
        }  catch(error) {
            console.error(error)
        }
        finally {
            setIsRefetchingByUser(false)
        }
    }

    return {
        isRefetchingByUser,
        refetchByUser,
    }
}
