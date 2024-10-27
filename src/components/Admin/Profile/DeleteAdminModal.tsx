import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { deleteAdmin } from '../../../api/Admin/AdminApi'
import { toast } from 'react-toastify'

const DeleteAdminModal = ()=> {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const adminId = queryParams.get('deleteAdmin')!
    const openModal = adminId ? true : false
    const navigate = useNavigate()
    const queryClient = useQueryClient()
   
    const { mutate } = useMutation({
        mutationFn: deleteAdmin,
        onError: (error)=> {
            toast.error(error.message)
        },
        onSuccess:(data)=> {
            queryClient.invalidateQueries({queryKey: ['admins']})
            handleClose()
            toast.success(data)
        }
    })
    const handleClose = ()=> {
        navigate('/private/admin/manage-admins')
    }
    return (
        <>
        <Dialog onClose={handleClose} open={openModal} className="relative z-50">
          <div className="fixed inset-0 flex w-screen h-screen items-center justify-center p-4 bg-black/55">
            <DialogPanel className="max-w-lg text-center space-y-4 border bg-white p-12 rounded-lg">
              <DialogTitle className="font-bold text-center text-xl text-gray-800">¿Seguro que quieres borrar este perfil?</DialogTitle>
              <Description className="text-center text-gray-800 font-medium">Esta acción no se puede deshacer</Description>
              <div className="flex gap-4 items-center justify-center">
                <button onClick={()=>mutate(adminId)} className='text-center p-3 px-8 uppercase text-cream shadow bg-red-500 font-bold rounded-md hover:opacity-85 transition-opacity duration-300'>Eliminar</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </>
    )
}
export default DeleteAdminModal