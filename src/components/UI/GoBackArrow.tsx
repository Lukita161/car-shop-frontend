import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

export const GoBackArrow = ()=> {
    const navigate = useNavigate()
    return (
        <ArrowUturnLeftIcon onClick={()=> navigate('/private/admin/catalog')} className="w-6 text-left mb-4 cursor-pointer hover:opacity-85" />
    )
}