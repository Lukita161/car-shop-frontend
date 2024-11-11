import { isAxiosError } from 'axios'
import { axiosPrivateInstance } from '../lib/axios'
import { LoginFormSchema } from '../schema'
import { LoginFormType } from "../types"

export const LoginAdmin = async(loginFormData: LoginFormType)=> {
    try {
        const result = LoginFormSchema.safeParse(loginFormData)
        if(result.error) {
            return {
                errors: result.error.issues
            }
        }
        const { data } = await axiosPrivateInstance.post<string>('/admin/login', result.data)
        console.log(data)
        localStorage.setItem('sessionKey', data)
        return data
    } catch (error) {
         if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data)
         }
    }
}