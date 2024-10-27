import { Navigate, Outlet } from "react-router-dom"

const PrivateGuard = ()=> {
    const token = localStorage.getItem('sessionKey')
    return token ? <Outlet /> : <Navigate to='/login' replace/>
}

export default PrivateGuard