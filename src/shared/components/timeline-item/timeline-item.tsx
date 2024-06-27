import { TTimelineItem } from "@/shared/mock/timelines";

import styles from "./timeline-item.module.scss";
import cn from "classnames";

export const TimelineItem = ({
  Icon,
  title,
  description,
  addedCn,
}: TTimelineItem & { addedCn?: string }) => (
  <div className={cn(styles.wrap, addedCn)}>
    <div className={styles.icon}>
      <Icon />
    </div>
    <h3 className={cn("h3", styles.title)}>{title}</h3>
    <p className={cn("p2", styles.description)}>{description}</p>
  </div>
);
