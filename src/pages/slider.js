import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper/modules";
import "swiper/swiper-bundle.css";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      className="container bg-white rounded-lg"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      //   pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <div className="">
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} className="p-4 rounded-lg">
            <img src={slide.image} alt={slide.title} className="" />
            <div className="flex flex-row my-4">
              <button className="bg-gray-400 p-2 mr-4">Dijual</button>
              <button className="bg-blue-400 p-2">Nego</button>
            </div>

            <h1 className="text-xl ">{slide.harga}</h1>
            <h1 className="text-xl my-2">{slide.desc}</h1>

            <button className="bg-green-400 p-2 px-12 my-2">Lihat Detail</button>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
