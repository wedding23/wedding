const vw100 = window.innerWidth;
const viewportWidth = vw100 < 1280 ? 360 : 1440;

export const vw = (pixels: number) => {
  return (vw100 / viewportWidth) * pixels;
};
