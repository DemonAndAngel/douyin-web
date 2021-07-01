<template>
  <div class="toast">
    <transition name="toast-tran">
      <div class="toast-item" v-if="data.ddzhlb">
        <div class="toast-item2 spandd">
          <SvgIcon iconClass="warning" />
          <span>订单转化率未达标，注意逼单节奏，过品话术！中控注意卡库存，放取暗单！</span>
        </div>
      </div>
    </transition>
    <transition name="toast-tran">
      <div class="toast-item" v-if="data.zflb">
        <div class="toast-item2 spanzf">
          <SvgIcon iconClass="warning" />
          <span>转粉率未达标，注意话术引导关注！</span>
        </div>
      </div>
    </transition>
    <transition name="toast-tran">
      <div class="toast-item" v-if="data.gwcdjlb">
        <div class="toast-item2 spangwc">
          <SvgIcon iconClass="warning" />
          <span>购物车点击率未达标，中控注意产品展示！</span>
        </div>
      </div>
    </transition>
    <transition name="toast-tran">
      <div class="toast-item" v-if="data.zbhmzhlb">
        <div class="toast-item2 spanzb">
          <SvgIcon iconClass="warning" />
          <span>直播画面转化率未达标，注意调整主播状态，直播场景，氛围！</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon'
export default {
  name: "Toast",
  props: ["data"],
  components: {
    SvgIcon,
  },
  methods: {
  }
}
</script>

<style lang="less">
.toast-tran-enter-active{
  transition: opacity .5s;
}
.toast-tran-enter{
  opacity: 0;
}
.toast-tran-leave-active{
  transition: opacity .5s;
}
.toast-tran-leave-to{
  opacity: 0;
}
.toast{
  width: 100%;
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  top: 3%;
  .toast-item {
    display: flex;
    width: 100%;
    font-size: 20px;
    justify-content: center;
    align-content: center;
    font-weight: bold;
    margin-bottom: 10px;
    .toast-item2{
      border-radius:25px;
      padding: 5px 20px;
      display: flex;
      justify-content: center;
      align-content: center;
      .svg-icon{
        width: 26px;
        height: 26px;
        margin-right: 10px;
      }
    }
  }
  .spandd {
    fill: #ff0900;
    color: #ff0900;
    border: #ff0900 1px dashed;
    background-color: rgba(0, 0, 0, 0.80);
  }
  .spanzf {
    color: #ff00dd;
    fill: #ff00dd;
    border: #ff00dd 1px dashed;
    background-color: rgba(0, 0, 0, 0.80);
  }
  .spangwc{
    color: #e6ff00;
    fill: #e6ff00;
    border: #e6ff00 1px dashed;
    background-color: rgba(0, 0, 0, 0.80);
  }
  .spanzb {
    color: #00ff20;
    fill: #00ff20;
    border: #00ff20 1px dashed;
    background-color: rgba(0, 0, 0, 0.80);
  }
}
</style>