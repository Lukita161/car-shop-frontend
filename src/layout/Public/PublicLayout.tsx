
import { Link, Outlet, useLocation } from "react-router-dom";

export const PublicLayout = ()=> {
    const {pathname} = useLocation()

    return (
        <div className="w-screen h-screen overflow-x-hidden flex flex-col">
            <header className="w-full flex top-0 shadow  justify-around items-center bg-primary h-12 z-40 p-2">
                <div>
                <Link className="text-xl font-serif"  to={'/'}>
                    NovaCar
                </Link>
                </div>
                <div className="flex gap-5">
                <Link className={`${pathname==='/catalog' && 'border-b-2 border-cream'} p-1`} to={'/catalog'} >Catalogo</Link>
                <Link to={'/contact'} className={`${pathname==='/contact' && 'border-b-2 border-cream'} p-1`} >Contacto</Link>
                </div>
            </header>

            <main className="min-w-full h-full">
                <Outlet />
            </main>

        </div>
    )
}