<template>
  <div class="suspend" style="">
    <div class="suspend-box" v-drag draggable="false">
        <div class="close">
          <span class="icon" @click="closeVideo">
            <SvgIcon iconClass="close"/>
          </span>
        </div>
        <div class="video" v-if="isShow">
            <Video :data="data" />
        </div>
    </div>
  </div>
</template>

<script>
import Video from "./Video";
export default {
  props: ['data'],
  components: {
    Video,
  },
  data () {
    return {
        isShow: true,
    }
  },
  methods: {
      closeVideo() {
        this.isShow = !this.isShow
      }
  },
  directives: {
    drag (el) {
      let oDiv = el // 当前元素
      // let self = this // 上下文
      // 禁止选择网页上的文字
      document.onselectstart = function () {
        return false
      }
      oDiv.onmousedown = function (e) {
        // 鼠标按下，计算当前元素距离可视区的距离
        let disX = e.clientX - oDiv.offsetLeft
        let disY = e.clientY - oDiv.offsetTop
        document.onmousemove = function (e) {
          // 通过事件委托，计算移动的距离
          let l = e.clientX - disX
          let t = e.clientY - disY
          // 移动当前元素
          oDiv.style.left = l + 'px'
          oDiv.style.top = t + 'px'
        }
        document.onmouseup = function (e) {
          document.onmousemove = null
          document.onmouseup = null
        }
        // return false不加的话可能导致黏连，就是拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
        return false
      }
    }
  }
}
</script>

<style lang="less">
.suspend {
    position:relative;
    z-index: 1000;
    .suspend-box {
        position: fixed;
        left: 100px;
        top: 100px;
        .close {
            text-align: right;
            fill: #ffffff;
        }
    }
}

</style>
