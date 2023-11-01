export function getAssetsFile(url) {
  const path = `../assets/images/swiper/one/v${url}.jpg`;
  return new URL(path, import.meta.url).href;
}

/**
 *随机下标
 * @param {Array} array 数组
 * @returns 返回随机数组下标
 */
export function randomIndex(array) {
  const v_array = JSON.parse(JSON.stringify(array)); //深拷贝
  const max = v_array.length - 1;
  const min = 0;
  const random_index = Math.floor(Math.random() * (max - min + 1)) + min;
  v_array.splice(random_index, 1);
  return random_index;
}

/**
 *毫秒转成分钟
 * @param {Number} milliseconds 毫秒
 * @returns 返回格式为00:00的时间
 */
export function millisecondsToMinutes(milliseconds) {
  var minutes = Math.floor(milliseconds / 60000); // 将毫秒转换为分钟
  var seconds = Math.floor((milliseconds % 60000) / 1000); // 获取剩余的秒数
  var formattedMinutes = minutes.toString().padStart(2, "0"); // 补零
  var formattedSeconds = seconds.toString().padStart(2, "0"); // 补零
  return formattedMinutes + ":" + formattedSeconds;
}
/**
 * 补零
 * @param {any} number
 * @returns
 */
export function zeroFill(number) {
  return number.toString().padStart(2, "0");
}
