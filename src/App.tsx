import { Cards, Format, Info, Main, Timeline, Map } from "./shared/blocks";
import { PageLayout } from "./shared/layouts/page-layout/page-layout";

import "swiper/css";
import "./shared/assets/styles/index.scss";

export const App = () => (
  <PageLayout>
    <Main />
    <Timeline />
    <Cards />
    <Format />
    <Info />
    <Map />
  </PageLayout>
);
