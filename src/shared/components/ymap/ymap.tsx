import { PinIcon } from "@/shared/assets/icons/pin";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "ymap3-components";

export const Ymap = ({ pinStyle }: { pinStyle: string }) => {
  return (
    <YMapComponentsProvider apiKey={"854a2b2e-daaf-4283-9201-dc639a3c3946"}>
      <YMap
        location={{ center: [39.592824, 47.086298], zoom: 15 }}
        mode="vector"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapMarker coordinates={[39.592824, 47.086298]}>
          <div className={pinStyle}>
            <PinIcon />
          </div>
        </YMapMarker>
      </YMap>
    </YMapComponentsProvider>
  );
};
