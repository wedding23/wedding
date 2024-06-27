import cn from "classnames";

import styles from "./format-card.module.scss";

type TFormatCard = {
  addedCn?: string;
  imgUrl: string;
};

export const FormatCard = ({ imgUrl, addedCn }: TFormatCard) => (
  <div className={cn(styles.formatCard, addedCn)}>
    <img src={imgUrl} alt={"alt"} />
  </div>
);
