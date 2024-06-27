import cn from "classnames";

import { Divider } from "@/shared/components/ui/divider/divider";
import { IconLogo } from "@/shared/assets/icons/logo";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn(styles.side, styles.header__left)}>
        <p className={cn("p1", styles.text)}>23/08/2024</p>
        <Divider />
      </div>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <div className={cn(styles.side, styles.header__right)}>
        <p className={cn("p1", styles.text)}>наконец-то все дождались</p>
        <Divider />
      </div>
    </header>
  );
};
