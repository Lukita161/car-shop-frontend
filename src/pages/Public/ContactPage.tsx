import emailLogo from "../../assets/emailLogo.svg";
import wppLogo from "../../assets/whatsapp-svgrepo-com.svg";

export const ContactPage = ()=> {
    return (
        <section className="w-full h-[75%] overflow-y-hidden flex items-center mt-14 justify-center">
            <div className="flex flex-col h-full lg:w-[40%] w-[80%] lg:h-[80%] justify-between rounded-md bg-gray-100 shadow-lg p-6">
                <div className="flex items-center gap-6 flex-col">
                    <div className="flex">
                    <h1 className="text-3xl font-bold text-center mt-3">Nuestro contacto</h1>
                    </div>
                    <div className="text-start flex flex-col">
                    <p className="flex items-start lg:items-center gap-3 cursor-pointer">
                    <img className="w-7 h-7" src={emailLogo} alt="" />{" "}
                    <span className="">car.auto@gmail.com</span>{" "}
                  </p>
                  <p className="flex items-start lg:items-center gap-2 cursor-pointer">
                    <img className="w-8 h-8" src={wppLogo} alt="" />{" "}
                    <span className="">+111 54 964 645</span>{" "}
                  </p>
                    </div>
                </div>
                <div className="flex w-full h-[60%] items-end ml-4">
                    <h2 className="text-sm mx-8 text-pretty">
                        Al enviar un correo o mensaje, se le asignara un dia para que venga a visitarnos
                        y poder conocer su proximo vehiculo soñado.
                    </h2>
                </div>
            </div>
        </section>
    )
}