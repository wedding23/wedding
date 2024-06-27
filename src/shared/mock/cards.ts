import {
  card2014,
  card2015,
  card2016,
  card2017,
  card2018,
  card2019,
  card2020,
  card2021,
  card2022,
  card2023,
  card2024,
} from "../assets/images/cards";

export type TCard = {
  id: number;
  year: string;
  imgUrl: string;
};

export const cards: TCard[] = [
  {
    id: 0,
    year: "2014",
    imgUrl: card2014,
  },
  {
    id: 1,
    year: "2015",
    imgUrl: card2015,
  },
  {
    id: 2,
    year: "2016",
    imgUrl: card2016,
  },
  {
    id: 3,
    year: "2017",
    imgUrl: card2017,
  },
  {
    id: 4,
    year: "2018",
    imgUrl: card2018,
  },
  {
    id: 5,
    year: "2019",
    imgUrl: card2019,
  },
  {
    id: 6,
    year: "2020",
    imgUrl: card2020,
  },
  {
    id: 7,
    year: "2021",
    imgUrl: card2021,
  },
  {
    id: 8,
    year: "2022",
    imgUrl: card2022,
  },
  {
    id: 9,
    year: "2023",
    imgUrl: card2023,
  },
  {
    id: 10,
    year: "2024",
    imgUrl: card2024,
  },
];
