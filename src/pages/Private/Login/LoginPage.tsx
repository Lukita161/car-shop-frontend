import { Outlet } from "react-router-dom"
import { LoginForm } from "../../../components/Private/Login/LoginForm"
const LoginPage = ()=> {
    return (
        <>
            <main className="w-screen h-screen bg-gray-200 flex items-center justify-center">
                <section className="w-2/6 h-3/4 bg-primary rounded-lg shadow-lg flex flex-col justify-around items-center">
                    <div className="w-full space-y-2 text-center">
                        <h1 className="font-black text-4xl">Inicia sesion</h1>
                        <h3 className="font-medium text-black/80">Pon tus datos en los siguientes campos</h3>
                    </div>
                    <div className="w-full mb-12">
                    <LoginForm />
                    </div>
                </section>
            </main>
        <Outlet/>
        </>
    )
}

export default LoginPage