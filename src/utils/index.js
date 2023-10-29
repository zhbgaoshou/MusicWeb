export function getAssetsFile(url) {
  const path = `../assets/images/swiper/one/v${url}.jpg`;
  return new URL(path, import.meta.url).href;
}
