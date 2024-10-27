import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import "./LoginForm.css"
import { LoginAdmin } from "../../logic/LoginFetch"
import { LoginFormSchema } from "../../schema"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const LoginForm = ()=> {
    const navigate = useNavigate()
    const { mutate } = useMutation({
        mutationFn: LoginAdmin,
        onError: (error)=> {
            toast.error(error.message)
        },
        onSuccess: ()=> {
            toast.success('Iniciando sesión...')
            navigate('/private/admin')
        }
    })
    const [hover, setHover] = useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formObject = Object.fromEntries(formData)
        const data = {
            email: formObject.email,
            password: formObject.password
        }
        const result = LoginFormSchema.safeParse(data)
        if(result.error) {
            console.log(result.error.issues)
            return
        }
        mutate(result.data)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center space-y-3">
            <div className="flex flex-col w-4/5 space-y-1">
                <label className="text-gray-900" htmlFor="email">Email: </label>
                <input name="email" className="w-full p-3 rounded-md outline-none" type="text" placeholder="Email..." />
            </div>
            <div className="flex flex-col w-4/5 space-y-1">
                <label className="text-gray-900" htmlFor="email">Contraseña: </label>
                <input name="password" className="w-full p-3 rounded-md outline-none" type="text" placeholder="Contraseña..." />
            </div>
            <div className="flex mt-2 flex-col">
                <label htmlFor="submit" onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
                <button type="submit" className={`flex flex-row items-center justify-center text-center mt-4 p-2 text-sm font-bold py-3 w-64 text-white rounded uppercase bg-black cursor-pointer hover:bg-[#232323] transition-all duration-500 ease-in`}>
                    <span className={`${hover ? 'moveText': ''} transition-all duration-500 ease-in `}>Iniciar sesion</span>
                {<ArrowRightCircleIcon className={`${hover?'arrowVisible':'arrowNoVisible'} ml-6 w-5 h-5`}/>}
                </button>
                </label>
            </div>
        </form>
    )
}