import { useTransform, useScroll, motion } from "framer-motion";
import cn from "classnames";

import { main1, main2, main3 } from "@/shared/assets/images/main";

import styles from "./main.module.scss";
import { useRef } from "react";
import { vw } from "@/shared/helpers/viewWidth";
import { isMobile } from "@/shared/helpers/isMobile";

export const Main = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const img1 = {
    rotate: useTransform(scrollYProgress, [0, 1], [-15, 0]),
    translateX: useTransform(scrollYProgress, [0, 1], [vw(440), 0]),
    translateY: useTransform(scrollYProgress, [0, 1], [vw(-120), 0]),
  };
  const img2 = {
    scale: useTransform(scrollYProgress, [0, 1], [1.5, 1]),
    translateY: useTransform(scrollYProgress, [0, 1], [vw(-250), 0]),
  };
  const img3 = {
    scale: useTransform(scrollYProgress, [0, 1], [1.5, 1]),
    translateX: useTransform(scrollYProgress, [0, 1], [vw(-440), 0]),
    translateY: useTransform(scrollYProgress, [0, 1], [vw(100), 0]),
  };

  return (
    <section className={styles.main}>
      <span className={cn(styles.main__date)}>23.08.2024</span>
      <h1 className={cn("h1", styles.main__title)}>Мы женимся!</h1>

      <div ref={ref} className={styles.images}>
        <motion.div
          className={cn(styles.img, styles.img_1)}
          style={!isMobile ? { ...img1 } : undefined}
        >
          <img src={main2} alt="a&m" />
        </motion.div>
        <motion.div
          className={cn(styles.img, styles.img_2)}
          style={!isMobile ? { ...img2 } : undefined}
        >
          <img src={main1} alt="a&m" />
        </motion.div>
        <motion.div
          className={cn(styles.img, styles.img_3)}
          style={!isMobile ? { ...img3 } : undefined}
        >
          <img src={main3} alt="a&m" />
        </motion.div>
      </div>
    </section>
  );
};
