import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/img/imgH1.png";
import img2 from "../../assets/img/imgH2.png";
import img3 from "../../assets/img/imgH3.png";
import img4 from "../../assets/img/imgH4.png";

import "./SwiperComponent.scss";

const SwiperComponent: FC = () => {
  const arrImg = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

  return (
    <Swiper
      className="swiper"
      slidesPerView={3.7}
      grabCursor={true}
      initialSlide={0}
      speed={700}
    >
      {arrImg &&
        arrImg.map((item, idx) => (
          <SwiperSlide key={idx} className="swiper-slide">
          <div className={item.id === 4 ? "slide-wrapper__last-img" : "slide-wrapper__img"}>  <img className={item.id === 4 ? 'last-img' : 'img'} src={item.img} alt="slide" /></div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperComponent;
