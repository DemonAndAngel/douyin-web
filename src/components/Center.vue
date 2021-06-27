<template>
  <div class="center-cmp">
    <div class="cc-header">
      <dv-decoration-1 style="width:200px;height:50px;" />
      <div>{{this.data.title}}</div>
      <dv-decoration-1 style="width:200px;height:50px;" />
    </div>

    <div class="cc-details">
      <div>GMV</div>
      <div class="card" v-for="(item, i) in this.data.gmv">{{item}}</div>
    </div>

    <div class="cc-main-container">
      <dv-active-ring-chart class="ccmc-middle" :config="config" />
      <div class="ccmc-right">
        <div class="station-info">
          实时uv价值<span>{{this.data.suv}}</span>
        </div>
        <div class="station-info">
          实时刷单金额<span>{{this.data.sssd}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center',
  components: {
  },
  props: [ "data" ],
  data () {
    return {
      config: {
        data: [
          {
            name: '累积观看人数',
            value: Number(this.data.online_user_ucnt),
            // value: Number(this.data.pay_cnt),
          },
        ],
        color: ['#00e9ff'],
        lineWidth: 30,
        radius: '70%',
        activeRadius: '70%',
        showOriginValue: true,
        digitalFlopStyle: {
          fontSize: 30,
          fill: '#fff'
        }
      },
    }
  }
}
</script>

<style lang="less">
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;
    .card {
      background-color: rgba(4,49,128,.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }
  .cc-main-container {
    position: relative;
    flex: 1;
    display: flex;
    .ccmc-middle {
      width: 50%;
      height: 90%;
      .active-ring-name {
        font-size: 24px !important;
        width: 100%;
      }
    }
    .ccmc-left, .ccmc-right {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 30px;
      span {
        font-size: 40px;
        font-weight: bold;
      }
      .station-info {
        height: 80px;
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
    .ccmc-left {
      align-items: flex-end;
      span {
        margin-left: 10px;
      }
    }
    .ccmc-right {
      align-items: flex-start;
      span {
        margin-left: 30px;
      }
    }
  }
  .label-tag {
    position: absolute;
    width: 500px;
    height: 30px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>