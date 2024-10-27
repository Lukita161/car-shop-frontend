import z from 'zod'
import { CarInfoSchema, LoginFormSchema } from "../schema";

export type AdminType = {
    email: string
}

export type ChangeAdminCredentialsType = {
    email: string,
    password: string,
    id: string,
    userName: string
}

export type AdminCredentialsFormType = {
    email: FormDataEntryValue,
    password?: FormDataEntryValue,
    userName: FormDataEntryValue
}

export type CreateAdminFormType = {
    email: FormDataEntryValue,
    password: FormDataEntryValue,
    userName: FormDataEntryValue
}

export type LoginFormType = z.infer<typeof LoginFormSchema>

export type CarInfoType = z.infer<typeof CarInfoSchema>

export type CreateCarFormType = {
    carName: FormDataEntryValue,
    brand: FormDataEntryValue,
    price: FormDataEntryValue,
    description: FormDataEntryValue,
    image: string[]
}

export type ImageUrlArray = string[]