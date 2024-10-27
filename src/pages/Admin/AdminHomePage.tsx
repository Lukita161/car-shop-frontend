import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminHomePage = () => {
  const { data, isLoading } = useAuth();
  if (isLoading) return "Cargando...";

  if (data)
    return (
      <>
        <section className="w-full h-full">
          <div className="flex h-[85vh] lg:h-full items-center justify-center">
            <div className="flex flex-col shadow-2xl w-[70%] lg:w-2/4 h-2/3 lg:h-3/4 bg-gray-100 p-4 rounded-md">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="text-center space-y-2">
                  <h1 className="text-xl lg:text-2xl mb-3 font-bold text-gray-900 text-center">
                    ¡Bienvenido {data.userName}!
                  </h1>
                  <h3 className="text-gray-700 font-medium">
                    Este es el panel de control de la empresa
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Aquí vas a poder manejar toda la lógica del negocio
                  </p>
                  <p className="text-gray-600 font-medium">
                    En caso de tener alguna duda. Dirigete al{" "}
                    <span className="font-bold cursor-pointer uppercase text-sm">
                      soporte
                    </span>
                  </p>
                </div>
                <div className="flex justify-around w-full">
                  <Link
                    to={"/private/admin/catalog"}
                    className="text-xl px-4 text-center font-medium shadow-lg bg-primary p-2 rounded-md hover:bg-[#5e7a65] transition-colors duration-300 ease-in"
                  >
                    Ver catalogo
                  </Link>
                  <Link to={'/private/admin/profile'} className="p-2 px-4 border text-lg border-gray-400 shadow-lg hover:opacity-80 transition-opacity hover:cursor-pointer rounded-lg">Perfil</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AdminHomePage