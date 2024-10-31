import { Link, Outlet, useLocation } from "react-router-dom";

export const AdminLayout = () => {
  const {pathname} = useLocation()
  return (
    <div className="flex flex-grow flex-col lg:flex-row">
      <aside className="w-screen lg:min-h-[100dvh] lg:w-36 text-white flex bg-black">
        <nav className="flex flex-grow h-16 lg:min-h-screen lg:h-full lg:flex-col gap-10 lg:gap-4 w-full justify-center items-center text-cream">
          <Link to={"/private/admin"} replace className={`${pathname==='/private/admin'&&'border-b-2 border-b-cream'}  lg:sticky lg:top-72 lg:bottom-72 text-lg lg:text-xl font-medium`}>Inicio</Link>
          <Link to={"/private/admin/catalog"} replace className={`${pathname==='/private/admin/catalog'&&'border-b-2 border-b-cream'} lg:transform lg:bottom-60 lg:top-[21rem] lg:sticky text-lg lg:text-xl font-medium`}>Catalogo</Link>
          <Link to={"/private/admin/profile"} replace className={`${pathname==='/private/admin/profile'&&'border-b-2 border-b-cream'} lg:transform  lg:sticky lg:bottom-48 lg:top-96  text-lg lg:text-xl font-medium`}>Perfil</Link>
        </nav>
      </aside>
      <main className="lg:w-full max-h-full ">
        <Outlet />
      </main>
    </div>
  );
};
