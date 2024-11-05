import { useState } from "react";
import { Link } from "react-router-dom";
import { CarInfoType } from "../../../types";
import { formatCurrency } from "../../../utils/formatCurrency";

type CarCardProps = {
    cars: CarInfoType
}

export const CarCard = ({cars}: CarCardProps)=> {
    const [hover, setHover] = useState("");
    return (
        <Link
            to={`/${cars.carName}/${cars.brand}/view/car/${cars._id}`}
            key={cars._id}
            onMouseEnter={() => setHover(cars._id)}
            onMouseLeave={() => setHover("")}
            className="flex w-[226px] flex-col border border-gray-400 cursor-pointer shadow"
          >
            <div className="m-0 lg:w-full h-[190px] relative flex items-top justify-center overflow-hidden">
              <img
                className="absolute object-fill h-[100%] w-full object-center shadow-md hover:scale-105 transition-transform duration-150"
                src={cars.image[0]}
                alt={`Imagen de ${cars.carName}`}
              />
            </div>
            <div className="border-t p-2 border-gray-300">
              <h1
                className={`${
                  hover === cars._id ? "text-cyan-600" : ""
                } text-sm transition-colors duration-100`}
              >
                {cars.carName}
              </h1>
              <h3 className="font-bold text-xl">
                {formatCurrency(cars.price)}
              </h3>
            </div>
          </Link>
    )
}