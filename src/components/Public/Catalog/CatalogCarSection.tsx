import { useQuery } from "@tanstack/react-query"
import { getAllCars } from "../../api/Admin/CarsManagementApi"

export const CatalogCarSection = ()=> {
    const {data} = useQuery({
        queryKey: ['cars'],
        queryFn: getAllCars,
        retry: 1
      })
    
    return (
        <>
          <div>
          <h1 className="text-3xl m-3 font-black">Conoce todos nuestros modelos</h1>
          {data?.map(car=> (
            <h1>{car.carName}</h1>
          ))}
        </div></>
    )
}