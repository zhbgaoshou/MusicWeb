import request from "../utils/request";

/**
 * 获取推荐MV
 * @returns
 */
export function reqRecMV() {
  return request.get("/personalized/mv");
}

/**
 * 获取推荐新歌
 * @returns
 */
export function reqRecNewSong() {
  return request.get("/personalized/newsong");
}
/**
 * 获取推荐歌单
 * @returns
 */
export function reqRec(limit) {
  return request.get(`/personalized/?limit=${limit}`);
}

export function reqRecSongList(limit, before, cat) {
  return request.get(
    `/top/playlist/highquality?before=${before}&limit=${limit}&cat=${cat}`
  );
}

/**
 * 新歌
 * @param {string} type
 * @returns
 */
export function reqNewMusicList(type) {
  return request.get(`/top/song?type=${type}`);
}
/**
 *
 * @param {string} order 排序,可选值为上升最快,最热,最新,不填则为上升最快
 * @param {string} area 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
 * @param {number} limit 取出数量 , 默认为 30
 * @param {number} offset 偏移数量 , 用于分页
 * @returns
 */
export function reqNewMVList(order, area, limit, offset) {
  return request.get(
    `/mv/all?order=${order}&area=${area}&limit=${limit}&offset=${offset}`
  );
}
