import { useMutation } from "@tanstack/react-query"
import { brand } from "../../data/Brands"
import { createCar } from "../../api/Admin/CarsManagementApi"
import { UploadImage } from "../../components/Admin/Catalog/UploadImage"
import { useState } from "react"
import { ImageUrlArray } from "../../types"
import { toast } from "react-toastify"
import { GoBackArrow } from "../../components/UI/GoBackArrow"
import { useNavigate } from "react-router-dom"

const CreateNewCarPage = ()=> {
    const navigate = useNavigate()
    const [imageUrl, setImageUrl] = useState<ImageUrlArray>([])
    const [isUploading, setIsUploading] = useState(false)
    const disabledInput = imageUrl.length < 1
    const {mutate} = useMutation({
        mutationFn: createCar,
        onError: (error)=> {
            toast.error(error.message)
        },
        onSuccess: ()=> {
            toast.success('Producto creado correctamente')
            navigate('/private/admin/catalog', {replace: true})
        }
    })
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        if(imageUrl.length === 0 && isUploading) return 
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formObject = Object.fromEntries(formData)
        const data = {
            carName: formObject.carName,
            description: formObject.description,
            brand: formObject.brand,
            price: formObject.price,
            image: imageUrl
        }
        mutate(data)
    }
    return (
        <section className="p-6">
            <GoBackArrow />
            <h1 className="text-3xl font-black text-gray-900">Crea un nuevo vehiculo</h1>
            <p className="text-lg text-gray-700">Rellena todos los campos que se piden a continuación</p>
            <form onSubmit={handleSubmit} className="p-4 pt-0 flex flex-col gap-4 text-center items-center">
                <div className="flex flex-col">
                <label htmlFor="carName">Nombre del vehiculo: </label>
                <input name="carName" className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3" type="text" placeholder="Ingresa el nombre" />
                </div>
                <div className="flex flex-col">
                <label htmlFor="description">Descripcion del vehiculo: </label>
                <textarea name="description" wrap="false" className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3" placeholder="Ingresa la descripcion" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="brand">Marca del auto</label>
                    <select className="w-80 capitalize border  outline-none rounded-md border-gray-300 shadow-md p-3" name="brand" id="brand">
                        <option>--Marca--</option>
                        {brand.map((brand)=> (
                            <option className="capitalize " key={brand} value={brand.toLowerCase()}>{brand}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                <label htmlFor="price">Precio del vehiculo: </label>
                <input name="price" className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3" type="text" placeholder="Ingresa el precio del vehiculo" />
                </div>
                <UploadImage setImageUrl={setImageUrl} setIsUploading={setIsUploading} />
                
                <div className="flex gap-3">
                    {imageUrl ? (
                        imageUrl.map(image => (
                            <img key={image} className="w-24 h-24" src={image} alt="Imagen de auto" />
                        ))
                    ) : <p>No hay imagenes aun</p>}
                </div>
                <div className="flex flex-col">
                    <input disabled={disabledInput} className="disabled:opacity-60 w-80 font-black uppercase bg-primary p-4 rounded-md shadow-lg hover:bg-[#617c68] transition-colors duration-200 cursor-pointer" type="submit" value="Crear vehiculo" />
                </div>
            </form>
        </section>
        
    )
}
export default CreateNewCarPage