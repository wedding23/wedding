import { TCard } from "@/shared/mock/cards";

import styles from "./card-item.module.scss";
import classNames from "classnames";

type TCardItem = TCard & {
  rotateRight?: boolean;
};

export const CardItem = ({ rotateRight, imgUrl, year }: TCardItem) => (
  <li
    className={classNames(styles.item, {
      [styles.item_rotateRight]: rotateRight,
    })}
  >
    <img src={imgUrl} alt={year} />
    <p className={styles.item__year}>{year}</p>
  </li>
);
