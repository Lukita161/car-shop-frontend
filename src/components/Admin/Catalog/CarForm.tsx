import { useState } from "react";
import { CarInfoType, ImageUrlArray } from "../../../types";
import { brand } from "../../../data/Brands";
import { UploadImage } from "./UploadImage";
import { useMutation } from "@tanstack/react-query";
import { updateCar } from "../../../api/Admin/CarsManagementApi";
import { toast } from "react-toastify";
import { GoBackArrow } from "../../UI/GoBackArrow";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

type CarFormProps = {
    carInfo: CarInfoType
}

export const CarForm = ({carInfo}:CarFormProps) => {
  const navigate = useNavigate()
    const [imageUrl, setImageUrl] = useState<ImageUrlArray>(carInfo.image)
    const {mutate} = useMutation({
        mutationFn: updateCar,
        onError:(error)=> {
            toast.error(error.message)
        },
        onSuccess:()=> {
            toast.success('Actualizado correctamente')
            navigate('/private/admin/catalog', {replace: true})
        }
    })
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
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
        mutate({carId: carInfo._id, formData: data})
    }
    const deleteImage = (img: string)=> {
      const filteredImages = imageUrl.filter(imageUrl => img !== imageUrl)
      setImageUrl(filteredImages)
    }
  return (
    <>
      <GoBackArrow />
      <h1 className="text-3xl font-black text-gray-900">Editar: {carInfo.carName}</h1>
      <p className="text-lg text-gray-700">
        Cambia todos los campos que desees
      </p>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 text-start items-center"
      >
        <div className="flex flex-col">
          <label htmlFor="carName">Nombre del vehiculo: </label>
          <input
            name="carName"
            className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3"
            type="text"
            placeholder="Ingresa el nombre"
            defaultValue={carInfo.carName}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Descripcion del vehiculo: </label>
          <textarea
            name="description"
            wrap="false"
            className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3"
            placeholder="Ingresa la descripcion"
            defaultValue={carInfo.description}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand">Marca del auto</label>
          <select
            className="w-80 capitalize border  outline-none rounded-md border-gray-300 shadow-md p-3"
            name="brand"
            id="brand"
            defaultValue={carInfo.brand}
          >
            {brand.map((brand) => (
              <option
                className="capitalize "
                key={brand}
                value={brand.toLowerCase()}
              >
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Precio del vehiculo: </label>
          <input
            name="price"
            className="w-80 border  outline-none rounded-md border-gray-300 shadow-md p-3"
            type="text"
            placeholder="Ingresa el precio del vehiculo"
            defaultValue={carInfo.price}
          />
        </div>
        <UploadImage setImageUrl={setImageUrl} imageUrl={imageUrl} />

        <div className="flex gap-3">
          {imageUrl ? (
            imageUrl.map((image) => (

              <div className="w-32 h-32 relative">
<img
                onClick={()=>deleteImage(image)}
                key={image}
                className="w-32 h-32 hover:opacity-30 transition-opacity duration-200 rounded-md"
                src={image}
                alt="Imagen de auto"
              />
              <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 -z-50">
                <TrashIcon className="mx-auto w-16 h-16"/>
              </div>
              </div>
              
            ))
          ) : (
            <p>No hay imagenes aun</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="w-80 font-black uppercase bg-primary p-4 rounded-md shadow-lg hover:bg-[#617c68] transition-colors duration-200 cursor-pointer"
            type="submit"
            value="Crear vehiculo"
          />
        </div>
      </form>
    </>
  );
};
