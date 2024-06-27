import cn from "classnames";
import styles from "./unit.module.scss";

type TUnit = {
  count: number;
  unitValue: string;
  first?: boolean;
  last?: boolean;
};

export const Unit = ({ count, unitValue, first, last }: TUnit) => (
  <div
    className={cn(styles.unitItem, {
      [styles.unitItem_first]: first,
      [styles.unitItem_last]: last,
    })}
  >
    <h4 className={styles.unitItem__count}>
      {String(count).length < 2 ? `0${count}` : count}
    </h4>
    <p className={cn("p1", styles.unitItem__unitValue)}>{unitValue}</p>
  </div>
);
