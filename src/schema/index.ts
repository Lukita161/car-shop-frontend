import z from 'zod'
export const LoginFormSchema = z.object({
    email: z.string().min(1, {message: 'No puede estar vacio'}).email({message: 'Tiene que ser un email'}),
    password: z.string().min(8, {message: 'Minimo 8 caracteres'})
})

export const CreateAdminSchema = z.object({
    email: z.string(),
    userName: z.string(),
    password: z.string()
})

export const AdminInfoSchema = z.object({
    email: z.string(),
    _id: z.string(),
    userName: z.string(),
    password: z.string(),
    isTheOwner: z.boolean()
})

export const AdminsInfoSchema = z.array(AdminInfoSchema.omit({password: true}))

export const CarInfoSchema = z.object({
    availability: z.boolean(),
    brand: z.string(),
    carName: z.string(),
    description: z.string(),
    image: z.array(z.string()),
    price: z.number(),
    _id: z.string()
})

export const CreateCarSchema = z.object({
    carName: z.string(),
    description: z.string(),
    price: z.string(),
    brand: z.string(),
    image: z.array(z.string())
})

export const CarsInforSchema = z.array(CarInfoSchema)