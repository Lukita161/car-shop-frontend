import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const OwnerGuard = ()=> {
    const { data, isError } = useAuth()
    if (isError) return <Navigate to={'/login'} replace />
    return data?.isTheOwner ? <Outlet /> : <Navigate to={'/private/admin/profile'} replace />
}