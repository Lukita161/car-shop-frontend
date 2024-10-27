import { PencilSquareIcon } from "@heroicons/react/24/outline"
import {TrashIcon} from "@heroicons/react/24/outline"
import { CarInfoType } from "../../../types"
import { useMemo } from "react"
import { deleteCar } from "../../../api/Admin/CarsManagementApi"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

type CarCardProps = {
    car: CarInfoType
}
export const CarCard = ({car}: CarCardProps)=> {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteCar,
        onError: (error)=> {
            toast.error(error.message)
        },
        onSuccess:()=> {
            toast.success('Eliminado correctamente')
            queryClient.invalidateQueries({queryKey: ['cars']})
        }
    })
    const coverImage = car.image[0]
    const carName = useMemo(()=> car.carName.length<10,[car.carName])
    
    return (
        <div className="w-[200px] h-[175px] flex flex-col border border-gray-500 rounded shadow-lg hover:shadow-xl">
            <div className="w-full shadow-md contain-content">
            <img className="w-full hover:scale-110 hover:rotate-2 transition-all duration-200 ease-in"  src={coverImage} alt={`Imagen de ${car.carName}`}  />
            </div>
            <div className="flex h-full max-h-full items-center justify-between">
                <div>
                <h1 className={`${carName ? 'text-sm' : 'text-sm'} ml-3 font-semibold`}>{car.carName}</h1>
                </div>
                <div className="flex gap-3 mr-2">
                <PencilSquareIcon onClick={()=> navigate(`/private/admin/editCar/${car._id}`)} className="cursor-pointer" width={25} />
                <TrashIcon onClick={()=> mutate(car._id)} className="cursor-pointer" width={25} />
                </div>
            </div>
        </div>
    )
}