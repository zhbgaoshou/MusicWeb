<script setup></script>

<template>
  <div class="mv-detail">
    <div class="left">
      <div class="left-head">mv详情</div>
      <video
        class="video"
        src="http://vodkgeyttp8.vod.126.net/cloudmusic/MCYkMDAyMDBgISAiMDEiIg==/mv/462581/d34c720c0496d4e39340555a59cc0a39.mp4?wsSecret=4e913537b0fd332e2c5ae884f4688900&wsTime=1698193418"
      ></video>
      <div class="info">
        <img
          src="https://p1.music.126.net/3WhzK6ozFXUsNutDU566ZA==/6641050233030995.jpg?param=120y120"
          alt=""
        />
        <h6>陈粒</h6>
      </div>

      <div class="title">
        <div class="hd" style="margin: 10px 0"><h4>易燃易爆炸</h4></div>
        <span> 发布：2015-04-02 </span>
        <span>播放：12880348次</span>
      </div>

      <div class="pl">
        <h6>最新评论 <span>(7000万)</span></h6>

        <div class="pl-main" v-for="i in 20">
          <div class="pl-l">
            <img
              src="http://p4.music.126.net/p3Mkpfxts8vlnR9vghe0Nw==/109951168159063088.jpg?param=80y80"
              alt=""
            />
          </div>
          <div class="pl-r">
            <p class="txt1">
              <span style="color: #07e8f4">非程千里:</span
              >哈哈哈哈或或或或或或或或我会笑死在这
            </p>
            <div class="huifu">
              <p class="txt2">
                <span style="color: #07e8f4">风之tao西:</span>
                此MV讲述了一对穷苦恋人为画画像却因经费不足无背景场所而私入无人古宅，结果没想到这座房子是灯泡外星人在地球的一个据点而导致女主被陷阱-巨大鸟笼困住，经过一番挣扎女主终于打破鸟笼脱困而出找到了灯泡星人进行最后的对峙，然而并没有什么卵用的又被关笼子里了。
              </p>
            </div>

            <div
              class="pl-time"
              style="display: flex; justify-content: space-between"
            >
              <span>2022-12-18 22:11:54</span>
              <div class="dz">
                <i class="iconfont icon-dianzan"></i>
                <span>12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right res-mv-right" style="margin-left: 30px">
      <div class="r-hd">相关推荐</div>

      <div class="r-main" v-for="i in 10">
        <div class="cover">
          <img
            src="http://p4.music.126.net/uT8HsYqJ5V25I_BiAXyGzA==/1422768060299743.jpg?param=500y260"
            alt=""
          />
        </div>
        <div class="r-info">小半 现场版</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mv-detail {
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .left {
    flex: 2;

    .pl {
      margin-top: 50px;

      .pl-main {
        margin-top: 20px;

        height: 200px;
        display: flex;
        .pl-l {
          width: 50px;
          height: 50px;
          img {
            @include img-style(50%);
            width: 50px;
            height: 50px;
          }
        }

        .pl-r {
          margin-left: 15px;
          .txt1 {
            font-size: 12px;
            color: #666;
          }

          .txt2 {
            font-size: 12px;
            color: #6b6a6a;
            line-height: 20px;
            @include ell-mline(4);
          }

          .pl-time {
            font: {
              size: 12px;
            }
            color: #c5c5c5;
          }

          .huifu {
            padding: 10px;
            width: 100%;
            height: 50%;
            border-radius: 10px;
            margin: 10px 0;
            background-color: #d8d7d7;
          }
        }
      }
    }
    .video {
      width: 100%;

      object-fit: cover;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ededed;
    }
    .info {
      @include vertical-center;
      width: 100%;
      height: 50px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    .title {
      margin: 20px 0;

      span {
        font: {
          color: #e0e0e0;
          size: 12px;
        }
      }
    }
  }
  .right {
    flex: 1;

    .r-main {
      @include vertical-center;
      height: 100px;
      border: 1px solid #a6a5a5;
      margin: 10px 0;
      border-radius: 5px;

      .cover {
        height: 100%;
        img {
          width: 80%;
          height: 100%;
          border-radius: 5px;
        }
      }

      .r-info {
        font-size: 12px;
        color: #5a5959;
      }
    }
  }
}

@media screen and (max-width: 765px) {
  .res-mv-right {
    display: none;
  }
}
</style>
