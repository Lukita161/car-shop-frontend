import { useQuery } from "@tanstack/react-query"
import { getAllAdmins } from "../../api/Admin/AdminApi"
import { Navigate, useNavigate } from "react-router-dom"
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useAuth } from "../../hooks/useAuth"
import { lazy, Suspense } from "react"

const CreateAdminModal = lazy(()=> import('../../components/Admin/Profile/CreateAdminModal'))
const DeleteAdminModal = lazy(()=> import('../../components/Admin/Profile/DeleteAdminModal'))


const ManageAdminsPage = ()=> {
    const {data: SessionAdminData} = useAuth()
    const navigate = useNavigate()
    const {data, isError, isLoading} = useQuery({
        queryKey: ['admins'],
        queryFn: getAllAdmins,
        retry: false
    })
    if(isError) return <Navigate to={'/private/admin/profile'} />
    if(isLoading) return 'Cargando...'
    if(data) return (
        <>
        <section className="w-full text-center">
            <div className="w-full h-full flex flex-col items-center">
                <h1 className="text-2xl font-black text-gray-800">Lista de administradores:</h1>
                <button onClick={()=> navigate('/private/admin/manage-admins/?createAdmin=true')} className="p-3 bg-primary rounded-md font-bold mt-3">Agregar administrador</button>
                <div className="mt-4 shadow-lg p-6 px-6 space-y-2 flex flex-col min-w-[35%]">
                    {data.map((profile)=> (
                        <div className="flex flex-row rounded-md border shadow-sm justify-between text-start p-2 hover:shadow-md transition-shadow" key={profile._id}>
                            <div className="flex flex-col">
                            <h1 className="text-sm"><span className="font-bold">Usuario:</span> {profile.userName}</h1>
                            <p className="text-sm"><span className="font-bold">Contacto:</span> {profile.email}</p>
                            </div>
                            <div className="flex items-center">
                            <p className="text-sm text-center mr-4 cursor-pointer">{profile.isTheOwner ? 'Owner' : 'Worker'}</p>
                            {SessionAdminData?.email!==profile.email && <XCircleIcon onClick={()=> navigate(`/private/admin/manage-admins/?deleteAdmin=${profile._id}`)} className="w-7 h-7 text-red-600 hover:text-red-800 transition-colors cursor-pointer" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Suspense fallback={'Cargando...'}>
        <CreateAdminModal />
        </Suspense>
        <DeleteAdminModal />
        </>
    )
}
export default ManageAdminsPage