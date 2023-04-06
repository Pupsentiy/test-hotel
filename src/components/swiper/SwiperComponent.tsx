import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppSelector } from "../../hooks/hooks";

import "./SwiperComponent.scss";

const SwiperComponent: FC = () => {
  const { img } = useAppSelector((state) => state.hotelReducer);

  return (
    <Swiper
      className="swiper"
      slidesPerView={3.7}
      grabCursor={true}
      initialSlide={0}
      speed={700}
    >
      {img &&
        img.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="swiper-slide">
            <div
              className={
                item.id === 4 ? "slide-wrapper__last-img" : "slide-wrapper__img"
              }
            >
              <img
                className={item.id === 4 ? "last-img" : "img"}
                src={item.img}
                alt="slide"
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperComponent;
