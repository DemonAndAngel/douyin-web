<template>
  <div class="right-chart-2">
    <div class="ccmc-left">
      <div class="station-info">
        商品曝光人数<span>{{this.data.exposure}}</span>
      </div>
      <div class="station-info">
        商品点击人数<span>{{this.data.click}}</span>
      </div>
      <div class="station-info">
        新增粉丝数<span>{{this.data.incr_fans_cnt}}</span>
      </div>
      <div class="station-info">
        购物车点击率<span>{{this.data.gwcdjl}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  props: ["data"],
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.right-chart-2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .ccmc-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    align-items: flex-start;
    span {
      font-size: 25px;
      font-weight: bold;
      margin-left: 10px;
    }
    .station-info {
      height: 80px;
      display: flex;
      align-items: center;
    }
  }
}
</style>