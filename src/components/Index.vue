<template>
  <div id="data-view">
    <Suspend v-if="hasData && data.stream_url" :data="data" />
    <Toast :data="data" />
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left"></div>
        <div class="mh-middle">流量掌柜</div>
        <div class="mh-right">
          <dv-border-box-2 class="box" v-if="hasData">
            {{ data.updated_at }}
          </dv-border-box-2>
        </div>
      </div>
      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <Left v-if="hasData" :data="data" />
        </dv-border-box-3>
        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <Center v-if="hasData" :data="data" />
              <Qrcode v-if="qrcodeLatest" :src="src" />
              <DvLoading v-if="loading">{{loadingText}}</DvLoading>
            </dv-border-box-3>
            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <UV :data="data" />
              </dv-border-box-3>
              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Chart v-if="hasData" :data="data" />
              </dv-border-box-4>
            </div>
          </div>
          <dv-border-box-4 class="rmc-bottom-container">
            <Footer v-if="hasData" :data="data" />
          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import Center from './Center'
import UV from './UV'
import Chart from './Chart'
import Left from './Left'
import Qrcode from './Qrcode'
import Footer from './Footer'
import Toast from "./Toast";
import Video from "./Video";
import Suspend from "./Suspend";
export default {
  name: 'Index',
  components: {
    Toast,
    UV,
    Center,
    Chart,
    Qrcode,
    Left,
    Footer,
    Video,
    Suspend,
  },
  data () {
    return {
      loading: true,
      loadingText: "初始化中...",
      qrcodeLatest: false,
      src: "",
      hasData: false,
      data: {
        // stream_url: "123",
        // online_user_ucnt: "111111",
        // sssd: "1111111",
        // incr_fans_cnt: "123123123",
        // zfl: "100.00%",
        // cjfszb: "100.00%",
        // rjkbsc: "1000000",
        // zbhmzhl: "100.00%",
        // zbjbgrs: "1000000",
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.axios.get("/api/get/last/data").then(async (res) => {
        res = res.data
        if (res.code === 4003) {
          await this.login()
        } else {
          // 判断是否存在数据
          if (res.data && res.data.title !== "") {
            this.loading = false
            this.hasData = true
            this.data = res.data
            this.data = {...this.data}
          }else{
            this.hasData = false
            this.loading = true
            this.loadingText = '后台正在拼命拉取数据中'
          }
        }
        setTimeout(() => {
          this.getData()
        }, 500)
      }).catch((err)=>{
        alert("获取数据异常! 信息: " + err)
      })
    },
    login() {
      this.axios.get("api/get/qrcode").then((res) => {
        res = res.data
        if (res.code === 200) {
          this.qrcodeLatest = res.qrcodeLatest
          if (this.qrcodeLatest) {
            this.loading = false
            this.src = "tmp/qrcode.png?time=" + new Date().getTime()
          }
        }else{
          // 等待二维码获取
          this.qrcodeLatest = false
          this.loading = true
          this.loadingText = '正在检测登录'
        }
      }).catch((err)=>{
        alert("检测登录异常! 信息: " + err)
      })
    }
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url('./imgs/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);
      a:visited {
        color: rgb(1,134,187);
      }
    }
    .mh-middle {
      font-size: 30px;
    }
    .mh-left, .mh-right {
      width: 450px;
    }
    .mh-right {
      .box {
        width: 200px; height: 50px; line-height: 50px; text-align:center;margin-left:100px;
      }
    }
  }
  .main-container {
    height: calc(~"100% - 80px");
    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }
  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;
    .border-box-content {
      flex-direction: column;
    }
  }
  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }
  .rmc-top-container {
    height: 65%;
    display: flex;
  }
  .rmctc-left-container {
    width: 65%;
  }
  .rmctc-right-container {
    width: 35%;
  }
  .rmc-bottom-container {
    height: 35%;
  }
  .rmctc-chart-2 {
    height: 40%;
  }
  .rmctc-chart-1{
    height: 60%;
  }
}
</style>