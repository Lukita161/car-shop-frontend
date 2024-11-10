import { useEffect, useRef } from "react"

type UploadImageProps = {
    setImageUrl:React.Dispatch<React.SetStateAction<string[]>>
    setIsUploading: React.Dispatch<React.SetStateAction<boolean>>
}

export const UploadImage = ({setImageUrl, setIsUploading}:UploadImageProps)=> {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(()=> {
        // @ts-expect-error sabe
        cloudinaryRef.current = window.cloudinary
         // @ts-expect-error sabe
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
            uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        }, function (error, result){
            if(result.event==='success') {
                    setImageUrl((prevImgUrl)=> [...prevImgUrl, result.info.url])
                    setIsUploading(true)
            }
        })
    },[setImageUrl, setIsUploading])
    const handleClick = ()=> {
         // @ts-expect-error sabe
        widgetRef.current.open()
    }
    return (
        <>
        <input type="button" className="p-2 border border-gray-400 shadow-lg hover:opacity-80 transition-opacity hover:cursor-pointer rounded-lg" onClick={handleClick} value={'Agregar imagen'} />
        <p className="m-0 text-xs">La primer imagen que agregues será la <span className="font-bold">imagen de portada</span></p>
        
        </>
    )
}