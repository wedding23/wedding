import { useEffect, useRef, useState } from "react";

import { TTimerReturns } from "@/shared/models/timer.module";
import { getDiffTimeFromNow } from "@/shared/helpers/getDiffTime";

export const useTimer = (dateTo: Date): TTimerReturns => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const {
    days: deffdays,
    hours: deffhours,
    minutes: deffminutes,
    seconds: deffseconds,
  } = getDiffTimeFromNow(dateTo);

  const [curTime, setCurTime] = useState({
    days: deffdays,
    hours: deffhours,
    minutes: deffminutes,
    seconds: deffseconds,
  });

  const start = () => {
    timerRef.current = setInterval(() => {
      const time = getDiffTimeFromNow(dateTo);
      setCurTime({ ...time });
    }, 1000);
  };

  useEffect(() => {
    start();
  }, []);

  return { ...curTime };
};
