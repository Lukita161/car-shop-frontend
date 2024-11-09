import emailLogo from '../../../assets/emailLogo.svg';
import wppLogo from '../../../assets/whatsapp-svgrepo-com.svg';
import instagramLogo from '../../../assets/instagramLogo.svg';
import { Email, WhatsAppNumber, instragramAccount } from "../../../data/NovaCarSocialMedia"

export const Footer = () => {
    return (
        <footer className="w-full h-28 bg-primary flex items-center">
        <div className="flex flex-row-reverse items-center justify-between mx-6 my-4 w-full">
          <div className="flex flex-col items-center h-full justify-center lg:items-start gap-3">
            
        <p className="text-center text-sm text-black">{new Date().getFullYear()} NovaCar</p>
        <p className="text-center text-sm text-black">Todos los derechos reservados</p>
          </div>
        <div className="flex flex-col items-start lg:items-start gap-1 justify-center">
        <p className="flex items-start lg:items-center gap-3 cursor-pointer">
                    <img className="w-7 h-7" src={emailLogo} alt="Logo Email" />{" "}
                    <span className="text-sm">{Email}</span>{" "}
                  </p>
                  <p className="flex items-start lg:items-center gap-3 cursor-pointer">
                    <img className="w-7 h-7" src={wppLogo} alt="LogoWhatsApp" />{" "}
                    <span className="text-sm">{WhatsAppNumber}</span>{" "}
                  </p>
                  <p className="flex items-start lg:items-center gap-3 cursor-pointer">
                    <img className="w-6 h-6" src={instagramLogo} alt="Logo instagram" />{" "}
                    <span className="text-sm">{instragramAccount}</span>{" "}
                  </p>
        </div>
        
        </div>
      </footer>
    )
}