import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { CarInfoType } from "../../types";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export const ImageSlider = ({ images }: { images: CarInfoType["image"] }) => {
  const sliderSettings: Settings = {
    dots: true,
    arrows: true,
    nextArrow: (
      <div className="slick-next">
        <ArrowRightIcon style={{ color: "black" }} className="w-6 h-6" />
      </div>
    ),
    prevArrow: (
      <div className="slick-prev z-50 fixed">
        {" "}
        <ArrowLeftIcon style={{ color: "black" }} className="w-6 h-6" />
      </div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 300,
    fade: true,
  };
  return (
    <div className="w-[60%] inline-block slider-container relative">
      <Slider className="mr-4 flex" {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index} className="w-full h-[400px]">
            <img
              className="object-cover rounded-tl-md h-[407px] rounded w-full  object-center shadow-md"
              src={img}
              alt={`Imagen de: ${images}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
