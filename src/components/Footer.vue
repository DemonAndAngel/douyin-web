<template>
  <div class="footer-chart">
    <div class="station-info">
      离开直播间人数<span>{{ this.data.lkzbjrs }}</span>
    </div>
    <div class="station-info">
      实时在线人数<span>{{this.data.sszxrs}}</span>
    </div>
    <div class="station-info">
      进入直播间人数<span>{{this.data.jrzbjrs}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ["data"],
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.footer-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .station-info {
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 20px;
    border-right: #00e9ff 2px solid;
    margin-left: 10px;
    span {
      font-size: 30px;
      font-weight: bold;
      margin-left: 20px;
      margin-right: 10px;
    }
  }
  //.ccmc-left, .ccmc-right {
  //  width: 100%;
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //  font-size: 20px;
  //  align-items: flex-start;
  //  span {
  //    font-size: 30px;
  //    font-weight: bold;
  //    margin-left: 10px;
  //  }
  //}
  //.ccmc-right {
  //  align-items: flex-end;
  //}
}
</style>