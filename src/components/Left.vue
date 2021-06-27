<template>
  <div class="left-chart">
    <div class="ccmc-left">
      <div class="station-info">
        订单转化率<span>{{this.data.ozhl}}</span>
      </div>
      <div class="station-info">
        成交人数转化率<span>{{this.data.cjrszhl}}</span>
      </div>
      <div class="station-info">
        成交件数<span>{{this.data.pay_cnt}}</span>
      </div>
      <div class="station-info">
        成交人数 <span>{{this.data.pay_ucnt}}</span>
      </div>
      <div class="station-info">
        客单价<span>{{this.data.kdj}}</span>
      </div>
      <div class="station-info">
        商品曝光人数<span>{{this.data.exposure}}</span>
      </div>
      <div class="station-info">
        商品点击人数<span>{{this.data.click}}</span>
      </div>
      <div class="station-info">
        购物车点击率<span>{{this.data.gwcdjl}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
  props: ["data"],
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.left-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .ccmc-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    align-items: flex-start;
    span {
      font-size: 30px;
      font-weight: bold;
      margin-left: 10px;
    }
    .station-info {
      margin-left: 20px;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
    }
  }
}
</style>