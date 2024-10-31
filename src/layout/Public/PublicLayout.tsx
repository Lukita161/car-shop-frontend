import { Link, Outlet } from "react-router-dom"

export const PublicLayout = ()=> {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <header className="w-full top-0 border-b flex items-center bg-gray-50 border-gray-300 h-12 z-40 p-2">
                <Link to={'/'}>Drive&Co</Link>
            </header>

            <main className="min-w-full h-full">
                <Outlet />
            </main>
        </div>
    )
}