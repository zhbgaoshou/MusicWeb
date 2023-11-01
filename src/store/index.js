import { defineStore } from "pinia";
import controls from "./controls";
import player from "./player";
import music from "./music";
import discover from "./discover";
import recommend from "./recommend";
import newsong from "./newsong";
import newmv from "./newmv";

export const useControlsStore = defineStore("controls", controls);
export const usePlayerStore = defineStore("player", player);
export const useMusicStore = defineStore("music", music);
export const useDiscoverStore = defineStore("discover", discover);
export const useRecommentStore = defineStore("recomment", recommend);
export const useNewSongStore = defineStore("newsong", newsong);
export const useNewMVStore = defineStore("newmv", newmv);
