import { ref } from "vue";

export default () => {
  let is_show_play_list = ref(false);
  let is_show_setiing = ref(false);
  let is_show_git = ref(false);
  let volume = ref(50);
  let is_show_lyric = ref(false);

  return {
    is_show_play_list,
    is_show_setiing,
    is_show_git,
    is_show_lyric,
    volume,
  };
};
