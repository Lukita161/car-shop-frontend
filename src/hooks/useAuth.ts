import { useQuery } from "@tanstack/react-query"
import { getAdminInfo } from "../api/Admin/AdminApi"

export const useAuth = ()=> {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: getAdminInfo,
        retry: 1,
        refetchOnWindowFocus: false
    })
    return { data, isError, isLoading }
}