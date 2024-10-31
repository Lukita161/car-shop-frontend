import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProfileLayout = () => {
  const { data, isError, isLoading } = useAuth();
	const {pathname} = useLocation()
  if (isError) return <Navigate to={"/admin"} />;
  if (isLoading) return "Cargando...";
  return (
    <section className="w-full h-full text-center ">
      <div className="w-full p-6 gap-4 flex justify-center">
        <Link to={"/private/admin/profile"} className={`${pathname==='/private/admin/profile' && 'border-b-2 border-blue-500'} text-lg font-bold text-gray-800`}>
          Mi perfil
        </Link>
        {data?.isTheOwner && (
          <Link
            to={"/private/admin/manage-admins"}
            className={`${pathname==='/private/admin/manage-admins' && 'border-b-2 border-blue-500'} text-lg font-bold text-gray-800`}
          >
            Administrar operadores
          </Link>
        )}
      </div>
      <Outlet />
    </section>
  );
};

export default ProfileLayout
