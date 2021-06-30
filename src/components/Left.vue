<template>
  <div class="left-chart">
    <div class="ccmc-left">
      <div class="station-info">
        <span :class="this.data.ddzhlb ? 'spano': ''">订单转化率</span><span class="span2">{{this.data.ozhl}}</span>
      </div>
      <div class="station-info">
        成交人数转化率<span class="span2">{{this.data.cjrszhl}}</span>
      </div>
      <div class="station-info">
        成交件数<span class="span2">{{this.data.pay_cnt}}</span>
      </div>
      <div class="station-info">
        成交人数 <span class="span2">{{this.data.pay_ucnt}}</span>
      </div>
      <div class="station-info">
        客单价<span class="span2">{{this.data.kdj}}</span>
      </div>
      <div class="station-info">
        商品曝光人数<span class="span2">{{this.data.exposure}}</span>
      </div>
      <div class="station-info">
        商品点击人数<span class="span2">{{this.data.click}}</span>
      </div>
      <div class="station-info">
        <span :class="this.data.gwcdjlb ? 'spangwc': ''">购物车点击率</span><span class="span2">{{this.data.gwcdjl}}</span>
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
    .spano {
      color: #ff1208;
    }
    .spangwc{
      color: #e6ff00;
    }
    .span2 {
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