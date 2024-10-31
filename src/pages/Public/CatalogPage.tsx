import { useQuery } from "@tanstack/react-query"
import { getAllCars } from "../../api/Public/CarsApi"
import { Link, Navigate } from "react-router-dom"
import { SkeletonLoader } from "../../components/UI/SkeletonLoader"
import { useState } from "react"
import { formatCurrency } from "../../utils/formatCurrency"

export const CatalogPage = ()=> {
    const [hover, setHover] = useState('')
    const {data, isLoading, isError} = useQuery({
        queryKey: ['cars'],
        queryFn: getAllCars,
        retry: 1,
        refetchOnWindowFocus: false
    })
    if(isError) return <Navigate to={'/'} replace />
    if(isLoading) return <SkeletonLoader />
     return (
        <>
        <div className="m-4">
        <h1 className="font-black text-3xl">Nuestros vehiculos:</h1>
        <p className="text-sm">Hora de encontrar tu auto ideal</p>
        </div>
        <main className="mx-16 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-7 pb-8">
            {data?.map(cars => (
                <Link to={`/${cars.carName}/${cars.brand}/view/car/${cars._id}`} key={cars._id} onMouseEnter={()=> setHover(cars._id)} onMouseLeave={()=> setHover('')} className="flex w-[226px] flex-col border border-gray-400 cursor-pointer shadow">
                    <div className="m-0 w-full h-[186px] relative flex items-top justify-center">
                        <img className="absolute object-fill h-[100%] w-full object-center shadow-md" src={cars.image[0]} alt={`Imagen de ${cars.carName}`} />
                    </div>
                    <div className="border-t p-2 border-gray-300">
                    <h1 className={`${hover === cars._id ? 'text-cyan-600': ''} text-sm transition-colors duration-100`}>{cars.carName}</h1>
                    <h3 className="font-bold text-xl">{formatCurrency(cars.price)}</h3>
                    </div>
            
                </Link>
            ))}
        </main>
        </>
        
     )
}