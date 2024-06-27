import { TTimerReturns } from "@/shared/models/timer.module";

export const getDiffTimeFromNow = (dateTo: Date): TTimerReturns => {
  const currentDate = new Date();
  const targetDate = new Date(dateTo);

  const diff = Number(targetDate) - Number(currentDate);

  let months = Math.floor((diff / 2592000000) % 12); // time diff in months (modulated to 12)
  let days = Math.floor((diff / 86400000) % 30); // time diff in days (modulated to 30)
  let hours = Math.floor((diff / 3600000) % 24); // time diff's hours (modulated to 24)
  let minutes = Math.floor((diff / 60000) % 60); // time diff's minutes (modulated to 60)
  let seconds = Math.floor((diff / 1000) % 60); // time diff's seconds (modulated to 60)

  if (!!months) {
    days += months * 30;
  }

  return { days, hours, minutes, seconds };
};
