import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getCarById } from "../../api/Public/CarsApi";
import { formatCurrency } from "../../utils/formatCurrency";
//import emailLogo from "../../assets/emailLogo.svg";
//import wppLogo from "../../assets/whatsapp-svgrepo-com.svg";
import { ImageSlider } from "../../components/Public/ImageSlider";

const DetailCarPage = () => {
  const params = useParams();
  const { carId } = params!;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["carDetail"],
    queryFn: () => getCarById(carId!),
  });

  if (isError) return <Navigate to={"/"} />;
  if (isLoading) return "Cargando...";
  if (data)
    return (
      <section className="lg:mt-8 lg:mx-32 sm:w-screen lg:w-[80vw] border rounded-lg border-gray-300 min-h-[90%] shadow-xl flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[95%] w-[85%] sm:w-screen min-h-[90%] mt-2 flex flex-col lg:flex-row rounded-md border border-gray-200 shadow">
          <ImageSlider images={data.image} />
          <div className="m-6 w-[40%] min-h-full">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">{data.carName}</h1>
              <p className="text-3xl">{formatCurrency(data.price)}</p>
            </div>
            <div className="min-h-[75%] w-full flex flex-col justify-between">
              <div className="mt-8 space-y-5">
                <h1 className="text-lg">{data.description}</h1>
              </div>
              <div className="flex flex-col w-full items-start justify-start ">
                <div className="mx-auto mb-3 mt-6">
                  <p className="text-center text-xl font-bold">
                    Agenda tu visita{" "}
                  </p>
                </div>

                <div className="flex w-full h-full flex-col items-start lg:items-center justify-start space-y-1">
                  <p className="flex items-start lg:items-center gap-3 cursor-pointer">
                    <img className="w-7 h-7" src={'../../assets/emailLogo.svg'} alt="" />{" "}
                    <span className="">car.auto@gmail.com</span>{" "}
                  </p>
                  <p className="flex items-start lg:items-center gap-2 cursor-pointer">
                    <img className="w-8 h-8" src={'../../assets/whatsapp-svgrepo-com.svg'} alt="" />{" "}
                    <span className="">+111 54 964 645</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default DetailCarPage
