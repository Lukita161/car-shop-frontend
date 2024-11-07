import { Link } from "react-router-dom";
import { CarInfoType } from "../../../types";
import { useState } from "react";

export const CarCardHomePage = ({ car }: { car: CarInfoType }) => {
  const [hover, setHover] = useState("");
  return (
    <Link
      to={`/${car.carName}/${car.brand}/view/car/${car._id}`}
      onMouseEnter={() => setHover(car._id)}
      onMouseLeave={() => setHover("")}
      className="border rounded-sm shadow-md border-gray-400 w-[368px] h-[436px]"
    >
      <div className="w-full flex flex-col">
        <div className="w-full h-80 relative overflow-hidden">
          <img
            className="absolute inset-0 object-cover w-full h-full object-center cursor-pointer hover:scale-110 transition-transform duration-150"
            src={car.image[0]}
            alt="Image"
          />
        </div>
        <h1
          className={`${
            hover === car._id ? "text-cyan-600" : ""
          } text-xl font-normal m-3 mb-0 transition-colors duration-100 cursor-pointer`}
        >
          {car.carName}
        </h1>
        <Link
          to={`/${car.carName}/${car.brand}/view/car/${car._id}`}
          className="border-2 border-primary px-10 md:px-16 mx-auto mt-4 font-extrabold lg:py-2 rounded-full shadow-lg hover:opacity-80 transition-opacity duration-150"
        >
          Conocer más
        </Link>
      </div>
    </Link>
  );
};
