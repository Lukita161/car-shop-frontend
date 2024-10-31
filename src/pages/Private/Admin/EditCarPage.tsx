import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getCarById } from "../../../api/Admin/CarsManagementApi"
import { CarForm } from "../../../components/Admin/Catalog/CarForm"

const EditCarPage = ()=> {
    const params = useParams()
    const id = params.id!
    const {data, isError, isLoading} = useQuery({
        queryKey: ['car'],
        queryFn: ()=>getCarById(id),
        refetchOnWindowFocus:false,
        retry:1
    })
    if(isError) return <Navigate to={'/admin'}/>
    if(isLoading) return 'Cargando...'
    
    if (data) return (
        <section className="p-6">
            <CarForm carInfo={data} />
        </section>
    )
}

export default EditCarPage