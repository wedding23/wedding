import { IconHands } from "@/shared/assets/icons/hands";
import styles from "./footer.module.scss";
import { Timer } from "../timer/timer";
import classNames from "classnames";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__icon}>
      <IconHands />
    </div>
    <p className={classNames("h2", styles.footer__text)}>
      Увидимся на свадьбе через
    </p>
    <Timer />
  </footer>
);
