import cn from "classnames";
import styles from "./map.module.scss";
import { PinIcon } from "@/shared/assets/icons/pin";
import { Ymap } from "@/shared/components/ymap/ymap";

const url = "https://yandex.ru/maps/-/CDv2RULE";

// TODO: необходимо внести домен, когда выльемся

export const Map = () => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  return (
    <section className={styles.map}>
      <div className={styles.map__info}>
        <h2 className={cn("h2", styles.map__title)}>
          Как добраться к&nbsp;месту
        </h2>
        <p className={cn("p1", styles.map__descr)}>
          До Кулешовки едем по навигатору. Далее там перестает работать
          навигатор, поэтому следуем по трассе, слева будет шиномонтажка,
          сворачиваем направо и по щебню доезжаем.
        </p>
        <div className={styles.map__addressWrap}>
          <div className={styles.map__icon}>
            <PinIcon />
          </div>
          <p className={cn("p1", styles.map__address)}>
            Село Кулешовка, ул.Алтайская 39
          </p>
        </div>

        <button className={styles.map__btn} onClick={handleClick}>
          Посмотреть на карте
        </button>
      </div>
      <div className={styles.map__ymap}>
        <Ymap pinStyle={styles.map__pin} />
      </div>
    </section>
  );
};
