import cn from "classnames";
import styles from "./divider.module.scss";

type TDivider = {
  addedStyles?: string;
  vertical?: boolean;
};

export const Divider = ({ addedStyles, vertical = false }: TDivider) => (
  <span
    className={cn(
      styles.divider,
      {
        [styles.divider_vertical]: vertical,
      },
      addedStyles
    )}
  ></span>
);
