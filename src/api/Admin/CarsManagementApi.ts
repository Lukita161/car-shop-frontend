import { isAxiosError } from "axios"
import { axiosInstance } from "../../lib/axios"
import { CarInfoSchema, CarsInforSchema, CreateCarSchema } from "../../schema"
import { CarInfoType, CreateCarFormType } from "../../types"


export const createCar = async(formData: CreateCarFormType)=> {
    try {
        if(formData.image.length === 0) throw new Error()
        const result = CreateCarSchema.safeParse(formData)
        if(result.error) {
            throw new Error('Ha ocurrido un error al crear el vehiculo, intentalo nuevamente')
        }
        const { data } = await axiosInstance.post<string>('/api/cars', result.data )
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getCars = async(page: number)=> {
    try {
        const { data } = await axiosInstance.get(`/api/cars/car/pages/${page}`)
        const result = CarsInforSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export const getCarById = async(carId: CarInfoType['_id'])=> {
    try {
        const { data } = await axiosInstance.get<string>(`/api/cars/car/${carId}`)
        const result = CarInfoSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        if (result.success) return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getCarByBrand = async(brand: CarInfoType['brand'])=> {
    try {
        const { data } = await axiosInstance.get<string>(`/api/cars/car/filters/${brand}`)
        const result = CarsInforSchema.safeParse(data)
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error('No hay vehiculos de esta marca')
        }
}}

type UpdateCarProps = {
    carId: CarInfoType['_id'],
    formData: CreateCarFormType
}

export const updateCar = async({carId, formData}: UpdateCarProps)=> {
    try {
        const result = CreateCarSchema.safeParse(formData)
        if(result.error) {
            throw new Error('Ha ocurrido un error al crear el vehiculo, intentalo nuevamente')
        }
        const { data } = await axiosInstance.put(`api/cars/car/${carId}`, result.data)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const deleteCar = async(carId: CarInfoType['_id'])=> {
    try {
        const { data } = await axiosInstance.delete<string>(`/api/cars/car/${carId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            return {
                error: error.message
            }
        }
    }
}

export const countCarsRegisters = async()=> {
    try {
        const { data } = await axiosInstance.get<number>('/api/cars/car')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}