<script setup>
import { nextTick, ref, computed, watch } from "vue";
import { getAssetsFile } from "@/utils/index";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

nextTick(() => {
  new Swiper("#swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 500,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  new Swiper("#swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Swiper("#swiper3", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: true,
  });
});
</script>

<template>
  <div class="carousel">
    <!-- Slider main container -->
    <div class="item-one">
      <!-- Slider main container -->
      <div class="swiper" id="swiper2">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="i in 16">
            <img class="one-img" :src="getAssetsFile(i)" />
          </div>
        </div>
      </div>
    </div>

    <div class="item item-two">
      <!-- Slider main container -->
      <div class="swiper" id="swiper1">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="i in 5">
            <img class="two-img" src="@/assets/images/default.jpg" alt="" />
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <div class="item item-three">
      <!-- Slider main container -->
      <div class="swiper" id="swiper3">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide txt">今天也要加油哦</div>
          <div class="swiper-slide txt">又是元气满满的一天</div>
          <div class="swiper-slide txt">晚上好!!!亲爱的</div>
        </div>

        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  z-index: 1;
  display: grid;
  height: 60%;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0.6667vw;

  .item {
    overflow: hidden;
    @include card-style();
  }

  .item-one {
    overflow: hidden;

    .one-img {
      @include img-style(0.6667vw);
    }
  }

  .item-two {
    grid-column: 2 / 3;
    grid-row: 1 / 3;

    .two-img {
      @include img-style(0.6667vw);
    }
  }

  .item-three {
    .txt {
      @include box-center;
    }
  }

  .swiper {
    height: 100%;
  }
}

@media screen and (max-width: 765px) {
  .item-one,
  .item-three {
    display: none;
  }

  .item {
    grid-column: 1 / 3 !important;
    grid-row: 1 / 3 !important;
  }
}
</style>
