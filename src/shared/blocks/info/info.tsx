import cn from "classnames";

import { InfoIcon } from "@/shared/assets/icons/info";
import styles from "./info.module.scss";

export const Info = () => (
  <section className={styles.info}>
    <div className={styles.info__icon}>
      <InfoIcon />
    </div>
    <div className={styles.info__wrap}>
      <h2 className={cn("h2", styles.info__title)}>Важная информация!</h2>
      <div className={cn("p1", styles.info__text)}>
        <p>
          К сожалению, мы не можем обеспечить проживание для всех гостей на
          свадьбе. Поэтому просим вас самостоятельно позаботиться о месте вашего
          пребывания.
        </p>
        <p>
          Если у вас возникнут какие-либо вопросы не стесняйтесь обращаться к
          нам.
        </p>
      </div>
    </div>
  </section>
);
