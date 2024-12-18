
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

export const PublicLayout = ()=> {
    const {pathname} = useLocation()
    useEffect(()=> {
        scrollToTop()
    },[pathname])
    return (
        <div className="h-screen flex flex-col">
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

            <main className="min-w-full min-h-full">
                <Outlet />
                
            </main>
            
        </div>
    )
}