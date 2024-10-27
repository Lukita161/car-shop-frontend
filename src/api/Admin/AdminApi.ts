import { isAxiosError } from "axios";
import { axiosInstance } from "../../lib/axios";
import { AdminInfoSchema, AdminsInfoSchema, CreateAdminSchema } from "../../schema";
import { AdminCredentialsFormType, ChangeAdminCredentialsType, CreateAdminFormType } from "../../types";

export const createAdmin = async(formData: CreateAdminFormType)=> {
    try {
        const result = CreateAdminSchema.safeParse(formData)
        if(result.error) {
            throw new Error('Ha ocurrido un error al crear el vehiculo, intentalo nuevamente')
        }
        const { data } = await axiosInstance.post<string>('/admin/register', result.data )
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        } 
        throw new Error('Un error inesperado ha ocurrido')
    }
}

export const getAdminInfo = async()=> {
    try {
        const token = localStorage.getItem('sessionKey')
        const { data } = await axiosInstance.get('/admin',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const result = AdminInfoSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error con el inicio de sesion')
        }
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getAdminCredentials = async()=> {
    try {
        const token = localStorage.getItem('sessionKey')
        const { data } = await axiosInstance.get('/admin',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const result = AdminInfoSchema.safeParse(data)
        if(result.error) {
            throw new Error('Ha ocurrido un error con el inicio de sesion')
        }
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const getAllAdmins = async()=> {
    try {
        const { data } = await axiosInstance.get(`/admin/get-admins`)
        const result = AdminsInfoSchema.safeParse(data)
        if(result.error) {
            throw new Error('No es posible ejecutar esto')
        }
        return result.data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }   
    }
}

type changeAdminCredentialsType = {
    id: ChangeAdminCredentialsType['id'], formData: AdminCredentialsFormType
}

export const changeAdminCredentials = async({id, formData} : changeAdminCredentialsType)=> {
    try {
        const { data } = await axiosInstance.put<string>(`/admin/change-credentials/${id}`, formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}

export const deleteAdmin = async(id: changeAdminCredentialsType['id'])=> {
    try {
        const { data } = await axiosInstance.delete<string>(`/admin/${id}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.message) {
            throw new Error('Algo ha ocurrido')
        }
    }
}