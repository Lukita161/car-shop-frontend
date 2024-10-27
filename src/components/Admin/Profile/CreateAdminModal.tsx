import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createAdmin } from '../../../api/Admin/AdminApi'

const CreateAdminModal = ()=> {
  const queryClient = useQueryClient()
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search)
    const adminModal = queryParams.get('createAdmin')!
    const openModal = adminModal ? true : false
    const { mutate } = useMutation({
        mutationFn: createAdmin,
        onError:(error)=> {
            toast.error(error.message)
        },
        onSuccess:(data:string)=> {
          queryClient.invalidateQueries({queryKey: ['admins']})
          handleClose()
            toast.success(data)
        }
    })
    const handleClose = ()=> {
        navigate('/private/admin/manage-admins')
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formObject = Object.fromEntries(formData)
        const data = {
            userName: formObject.userName,
            email: formObject.email,
            password: formObject.password
        }
        mutate({email: data.email, userName: data.userName, password: data.password})
    }
    return (
        <>
        <Dialog onClose={handleClose} open={openModal} className="relative z-50">
          <div className="fixed inset-0 flex w-screen h-screen bg-black/55 items-center justify-center p-6">
            <DialogPanel className="max-w-lg text-center space-y-4 border rounded-md shadow bg-white p-14">
              <DialogTitle className="font-black text-gray-800 text-center text-3xl underline  uppercase">Crear administrador</DialogTitle>
              <div className="flex gap-4 items-center justify-center">
                <form onSubmit={handleSubmit} className='w-full h-full space-y-4'>
                    <div className='flex flex-col text-start'>
                    <label htmlFor="userName">Nombre de usuario: </label>
                    <input name='userName' className='w-[21rem] border  outline-none rounded-md border-gray-300 shadow-md p-3 focus:border focus:border-primary transition-colors duration-300"' id='userName' type="text" placeholder='Usuario...' />
                    </div>
                    <div className='flex flex-col text-start'>
                    <label htmlFor="email">Email: </label>
                    <input name='email' className='w-[21rem] border  outline-none rounded-md border-gray-300 shadow-md p-3 focus:border focus:border-primary transition-colors duration-300"' id='email' type="email" placeholder='Email...' />
                    </div>
                    <div className='flex flex-col text-start'>
                    <label htmlFor="password">Contraseña: </label>
                    <input name='password' className='w-[21rem] border  outline-none rounded-md border-gray-300 shadow-md p-3 focus:border focus:border-primary transition-colors duration-300"' id='password' type="password"  placeholder='Contraseña...'/>
                    </div>
                    <div className=''>
                    <button className='p-3 px-7 uppercase text-gray-900 shadow bg-primary font-black mt-3 rounded-md hover:opacity-85 transition-opacity duration-300'>Crear administrador</button>

                    </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    )
}
export default CreateAdminModal