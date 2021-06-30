<template>
  <div class="right-chart-2">
    <div class="ccmc-left">
      <div class="station-info">
        新增粉丝数<span class="span2">{{this.data.incr_fans_cnt}}</span>
      </div>
      <div class="station-info">
        <span :class="this.data.zflb ? 'spanzf': ''">转粉率</span><span class="span2">{{this.data.zfl}}</span>
      </div>
      <div class="station-info">
        成交粉丝占比<span class="span2">{{this.data.cjfszb}}</span>
      </div>
      <div class="station-info">
        人均看播时长<span class="span2">{{this.data.rjkbsc}}</span>
      </div>
    </div>
    <div class="ccmc-right">
      <div class="station-info">
        <span :class="this.data.zbhmzhlb ? 'spanzb': ''">直播画面转化率</span><span class="span2">{{this.data.zbhmzhl}}</span>
      </div>
      <div class="station-info">
        直播间曝光人数<span class="span2">{{this.data.zbjbgrs}}</span>
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
  flex-direction: row;
  .ccmc-left, .ccmc-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    align-items: flex-start;
    .span2 {
      font-size: 30px;
      font-weight: bold;
      margin-left: 10px;
    }
    .spanzf {
      color: #ff00dd;
    }
    .spanzb {
      color: #00ff20;
    }
    .station-info {
      height: 80px;
      display: flex;
      align-items: center;
    }
  }
  .ccmc-right {
    align-items: flex-end;
  }
}
</style>