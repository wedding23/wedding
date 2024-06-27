import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { CardItem } from "@/shared/components/card-item/card-item";
import { cards } from "@/shared/mock/cards";

import styles from "./cards.module.scss";
import { isMobile } from "@/shared/helpers/isMobile";

export const Cards = () => {
  return (
    <section className={styles.list}>
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 0 }}
        slidesPerView={isMobile ? 1 : 3}
        speed={5000}
        grabCursor
        className={styles.slider}
        wrapperClass={styles.sliderWrapper}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={item.id}>
            <CardItem rotateRight={index % 2 !== 0} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
