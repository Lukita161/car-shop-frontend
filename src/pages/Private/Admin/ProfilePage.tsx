import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../../hooks/useAuth";
import { useMemo, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { changeAdminCredentials } from "../../../api/Admin/AdminApi";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [userAndEmailEditMode, setUserAndEmailEditMode] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const { data } = useAuth();
  const { mutate } = useMutation({
    mutationFn: changeAdminCredentials,
    onError:(error)=> {
        toast.error(error.message)
    },
    onSuccess:(data)=> {
        toast.success(data)
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formValue = Object.fromEntries(formData)
    const adminSubmitData = {
        userName: formValue.userName,
        email: formValue.email,
        password: formValue?.password    
    }
    mutate({id: data!._id, formData: adminSubmitData })
    setUserAndEmailEditMode(false)
    setPasswordEdit(false)
  }

  const submitButtonDisabled = useMemo(()=> {
    return userAndEmailEditMode===true || passwordEdit===true
  },[userAndEmailEditMode, passwordEdit])



  return (
    <section className="w-full text-center">
      <form
      onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-center gap-5"
        action=""
      >
        <div className="flex flex-col">
          <label className="text-start" htmlFor="userName">
            Nombre de usuario:{" "}
          </label>
          <div className="flex items-center gap-2">
            <input
              disabled={!userAndEmailEditMode}
              defaultValue={data?.userName}
              id="userName"
              className="disabled:opacity-80 w-80 border  outline-none rounded-md border-gray-300 shadow-md p-2 focus:border focus:border-primary transition-colors duration-300"
              type="text"
              name='userName'
            />
            <PencilSquareIcon
              onClick={() => setUserAndEmailEditMode(true)}
              className={`${userAndEmailEditMode ? "invisible" : ""} w-6 h-6 cursor-pointer`}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-start" htmlFor="email">
            Email:{" "}
          </label>
          <div className="flex items-center gap-2">
            <input
            name='email'
              disabled={!userAndEmailEditMode}
              defaultValue={data?.email}
              id="email"
              className="disabled:opacity-80 w-80 border  outline-none rounded-md border-gray-300 shadow-md p-2 focus:border focus:border-primary transition-colors duration-300"
              type="email"
            />
            <PencilSquareIcon
              onClick={() => setUserAndEmailEditMode(true)}
              className={`${userAndEmailEditMode ? "invisible" : ""} w-6 h-6 cursor-pointer`}
            />
          </div>
          
        </div>
        <div className="flex flex-col">
          <label className="text-start" htmlFor="password">
            Contraseña:{" "}
          </label>
          <div className="flex items-center gap-2">
            <input
              disabled={!passwordEdit}
                name='password'
              id="password"
              className="disabled:opacity-80 w-80 border  outline-none rounded-md border-gray-300 shadow-md p-2 focus:border focus:border-primary transition-colors duration-300"
              type="password"
            />
            <PencilSquareIcon
              onClick={() => setPasswordEdit(true)}
              className={`${passwordEdit ? "invisible" : ""} w-6 h-6 cursor-pointer`}
            />
          </div>
          
        </div>
        <div className="flex flex-col items-start">
            <div className="items-start">
            <input
                disabled={!submitButtonDisabled}
              className="disabled:opacity-60 mr-6 w-72 font-black uppercase bg-primary p-4 rounded-md shadow-lg hover:bg-primary/80 transition-colors"
              type="submit"
              value="Actualizar información"
            />  
            </div>
            
          </div>
      </form>
    </section>
  );
};

export default ProfilePage