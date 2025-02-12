import React from "react";
import Slider from "react-slick/lib/slider";
import nike1 from "../../assets/1.png";
import nike2 from "../../assets/2.png";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full my-5">
      <Slider {...settings}>
        <div className="!flex  items-center bg-gray-100 px-4 h-[700px]">
          <div className="">
            <div className="text-5xl font-bold my-3 ">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate magni neque ipsa reiciendis in corporis repudiandae
              beatae, odio illum voluptas.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-12 flex items-center justify-center bg-indigo-300">
              İncele
            </div>
          </div>

          <img src={nike1} alt="image" />
        </div>

        <div className="!flex items-center bg-gray-100 px-4 h-[700px]">
          <div className="">
            <div className="text-5xl font-bold my-3">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate magni neque ipsa reiciendis in corporis repudiandae
              beatae, odio illum voluptas.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[160px] h-12 flex items-center justify-center bg-indigo-300">
              İncele
            </div>
          </div>
          <img src={nike2} alt="slider" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
