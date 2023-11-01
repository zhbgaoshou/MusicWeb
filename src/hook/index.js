import { useMusicStore } from "@/store/index";

export function useNext() {
  const musicStore = useMusicStore();
  if (musicStore.curIndex == musicStore.playList.length - 1) {
    ElMessage("喂!快去更新你的播放列表");
  } else {
    musicStore.curIndex++;
  }
}
