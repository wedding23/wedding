import cn from "classnames";

import { useTimer } from "@/shared/hooks/useTimer";

import styles from "./timer.module.scss";
import { Unit } from "./ui/unit/unit";
import { Divider } from "../ui/divider/divider";

interface TTimer {
  addedStyles?: string;
}

const dateTo = "August 23, 2024 17:00:00 GMT+03:00";

export const Timer = ({ addedStyles }: TTimer) => {
  const { days, hours, minutes, seconds } = useTimer(new Date(dateTo));

  return (
    <div className={cn(styles.timer, addedStyles)}>
      <Unit count={days} unitValue={"Дней"} first />
      <Divider vertical />
      <Unit count={hours} unitValue={"Часов"} />
      <Divider vertical />
      <Unit count={minutes} unitValue={"Минут"} />
      <Divider vertical />
      <Unit count={seconds} unitValue={"Секунд"} last />
    </div>
  );
};
