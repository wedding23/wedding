import cn from "classnames";
import styles from "./timeline.module.scss";
import { timelines } from "@/shared/mock/timelines";
import { TimelineItem } from "@/shared/components/timeline-item/timeline-item";
import { TimelineBg } from "@/shared/assets/icons/timelines/bg";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import classNames from "classnames";

export const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className={styles.timeline}>
      <h2 className={cn("h2", styles.timeline__title)}>
        Привет, дорогие друзья и близкие!
      </h2>

      <div className={styles.timeline__text}>
        <p className="p1">
          Свершилось чудо! Мы решили сделать этот шаг и официально стать мужем и
          женой. Поэтому зовем вас покрепче завязать наши узы брака. Будем
          танцевать, петь, веселиться, и, конечно делать много фотографий.
        </p>
      </div>

      <div className={styles.list} ref={ref}>
        <div className={styles.list__bg}>
          <TimelineBg pathLength={pathLength} />
        </div>
        {timelines.map((item, index) => (
          <TimelineItem
            key={item.id}
            addedCn={classNames(styles.list__item, {
              [styles.list__item_0]: index === 0,
              [styles.list__item_1]: index === 1,
              [styles.list__item_2]: index === 2,
            })}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};
