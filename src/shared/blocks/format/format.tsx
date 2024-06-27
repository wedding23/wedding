import cn from "classnames";

import styles from "./format.module.scss";
import { FormatCard } from "@/shared/components/format-card/format-card";
import { format1, format2, format3 } from "@/shared/assets/images/format";

export const Format = () => (
  <section className={styles.format}>
    <h2 className={cn("h2", styles.format__title)}>
      Формат нашего мероприятия
    </h2>

    <div className={cn("p1", styles.format__text)}>
      <p>
        На нашей свадьбе дресс-кода нет! Приходите красивые в том, в чем вам
        комфортно. Единственное пожелание: давайте избегать ярких цветов, чтобы
        не затмевать друг друга.
      </p>
      <p>
        Наш праздник пройдет в уютном доме в кругу близких людей и в наших
        планах веселиться, танцевать и петь.
      </p>
    </div>

    <div className={styles.format__wrap}>
      <FormatCard
        addedCn={cn(styles.format__img, styles.format__img_1)}
        imgUrl={format1}
      />
      <FormatCard
        addedCn={cn(styles.format__img, styles.format__img_2)}
        imgUrl={format2}
      />
      <FormatCard
        addedCn={cn(styles.format__img, styles.format__img_3)}
        imgUrl={format3}
      />
    </div>
  </section>
);
