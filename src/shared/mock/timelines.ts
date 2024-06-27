import { IconGuest } from "@/shared/assets/icons/timelines/guest";
import { IconStare } from "@/shared/assets/icons/timelines/stare";
import { IconFinish } from "@/shared/assets/icons/timelines/finish";

export type TTimelineItem = {
  id: number;
  Icon: () => JSX.Element;
  title: string;
  description: string;
};

export const timelines: TTimelineItem[] = [
  {
    id: 0,
    Icon: IconGuest,
    title: "16:30 - Сбор гостей",
    description:
      "Приглашаем вас прибыть немного заранее. Вас будут встречать на месте проведения с приветственными напитками и легкими закусками.",
  },
  {
    id: 1,
    Icon: IconStare,
    title: "17:00 - Начало банкета",
    description:
      "Начинается банкет и развлекательная программа. Наш DJ позаботится о том, чтобы вы не сидели на месте. Готовьтесь танцевать, веселиться, и, возможно даже участвовать в паре конкурсов.",
  },
  {
    id: 2,
    Icon: IconFinish,
    title: "23:00 - Завершение вечера",
    description:
      "Наш вечер в кругу семьи и друзей плавно подойдет к финалу.  Мы поднимем бокалы еще раз, обнимем друг друга покрепче и скажем спасибо за этот волшебный день.",
  },
];
