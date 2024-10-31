import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"
import { getCarById } from "../../api/Public/CarsApi"
import { formatCurrency } from "../../utils/formatCurrency"

export const DetailCarPage = ()=> {
    const params = useParams()
    const { carId } = params!
    const {data, isLoading, isError} = useQuery({
        queryKey: ['carDetail'],
        queryFn: ()=>getCarById(carId!),
    })
    if(isError) return <Navigate to={'/'} />
    if(isLoading) return 'Cargando...'
    if(data) return (
        <section className="mt-8 mx-32 border rounded-lg border-gray-300 h-[82%] shadow-xl flex items-center justify-center">
            <div className="w-[95%] h-[90%] flex rounded-md border border-gray-200 shadow">
            <div className="w-[60%]">
                <div className="w-full h-[90%] relative">
                    <img className="object-fill rounded-tl-md h-[100%] w-full object-center shadow-md" src={data.image[0]} alt="Imagen de auto" />
                </div>
            </div>
            <div className="m-6">
                <div className="space-y-4">
                <h1 className="text-3xl font-bold">{data.carName}</h1>
                <p className="text-3xl">{formatCurrency(data.price)}</p>

                </div>
                <div>
                <h1 >{data.description}</h1>
                <button>Contactanos </button>
                </div>
            </div>

            </div>
            
        </section>
    )
}