import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//import { LoginPage } from "./pages/Login/LoginPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { lazy, Suspense } from "react";


const LoginPage = lazy(()=> import('./pages/Login/LoginPage'))
const PrivateRouter = lazy(()=> import('./Router/PrivateRouter'))
const PrivateGuard = lazy(()=> import('./guard/PrivateGuard'))

export const Router = ()=> {
    return (
        <BrowserRouter>
        <Routes key={'Login'}>
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
            <Suspense fallback={<p>Cargando...</p>}>
        <Routes key={'adminRoutes'}>
           <Route element={<PrivateGuard />}>
            <Route path="/private/*" element={<PrivateRouter />} />
           </Route>
        </Routes>
            </Suspense>
        <ToastContainer position="bottom-right" pauseOnHover={false} />
        </BrowserRouter>
    )
}