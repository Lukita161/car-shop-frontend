import { isAxiosError } from "axios"
import { axiosPublicInstance } from "../../lib/axios"
import { CarInfoSchema, CarsInforSchema } from "../../schema"
import { CarInfoType } from "../../types"

export const getTopCars = async()=> {
    try {
        const { data } = await axiosPublicInstance.get('/api/public/cars/topCars')
        const result = CarsInforSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        console.log(data)
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getCarsByPage = async(page: number)=> {
    try {
        const { data } = await axiosPublicInstance.get(`/api/public/cars/car/pages/${page}`)
        const result = CarsInforSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        return result.data
    } catch (error) {
        console.log(error)
    }
}


export const getAllCars = async()=> {
    try {
        const { data } = await axiosPublicInstance('/api/public/cars')
        const result = CarsInforSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getCarById = async(carId: CarInfoType['_id'])=> {
    try {
        const { data } = await axiosPublicInstance(`/api/public/cars/car/${carId}`)
        const result = CarInfoSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error')
        }
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getCarByBrand = async(brand: CarInfoType['brand'])=> {
    try {
        const { data } = await axiosPublicInstance.get<string>(`/api/public/cars/car/filters/${brand}`)
        const result = CarsInforSchema.safeParse(data)
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error('No hay vehiculos de esta marca')
        }
}}

export const countRegisters = async()=> {
    try {
        const { data } = await axiosPublicInstance.get<number>('/api/public/cars/car')
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}