<template>
  <div class="right-chart-1">
    <div class="rc1-container">
      <span class="span1">预期UV</span>
      <div class="rc1-form">
        <input v-model.number="uv.uv" type="number" @input="setUv" />
      </div>
    </div>
    <div class="rc1-container">
      <span class="span1" :class="this.data.ddzhlb ? 'spandd': ''">预期订单转化率</span>
      <div class="rc1-form">
        <input v-model.number="uv.yddzhl" type="number" @input="setUv" />
      </div>
      <span class="span2">%</span>
    </div>
    <div class="rc1-container">
      <span class="span1" :class="this.data.zflb ? 'spanzf': ''">预期转粉率</span>
      <div class="rc1-form">
        <input v-model.number="uv.yzfl" type="number" @input="setUv" />
      </div>
      <span class="span2">%</span>
    </div>
    <div class="rc1-container">
      <span class="span1" :class="this.data.gwcdjlb ? 'spangwc': ''">预期购物车点击率</span>
      <div class="rc1-form">
        <input v-model.number="uv.ygwcdjl" type="number" @input="setUv" />
      </div>
      <span class="span2">%</span>
    </div>
    <div class="rc1-container">
      <span class="span1" :class="this.data.zbhmzhlb ? 'spanzb': ''">预期直播画面转化率</span>
      <div class="rc1-form">
        <input v-model.number="uv.yzbhhzhl" type="number" @input="setUv" />
      </div>
      <span class="span2">%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UV',
  props: [
      "data"
  ],
  data () {
    return {
      uv: {
        uv: 0,
        yddzhl: 0,
        yzfl: 0,
        ygwcdjl: 0,
        yzbhhzhl: 0,
      },
    }
  },
  created() {
    this.getUV()
  },
  methods: {
    getUV() {
      this.axios.get("/api/get/uv").then(async (res) => {
        res = res.data
        if (res.code === 200) {
          this.uv = res.data.uv ? res.data.uv : {
            uv: 0,
            yddzhl: 0,
            yzfl: 0,
            ygwcdjl: 0,
            yzbhhzhl: 0,
          }
        }
      })
    },
    setUv() {
      this.axios.post("api/set/uv", this.uv).then((res)=>{

      }).catch((err) => {
        alert("设置异常! 信息: " + err)
      })
    }
  }
}
</script>

<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //.r1-header{
  //  display: flex;
  //  justify-content: center;
  //  width: 100%;
  //  height: 50%;
  //  font-size: 24px;
  //  font-weight: bold;
  //  .r1-span{
  //    display: flex;
  //    flex-direction: column;
  //    justify-content: center;
  //    height: 100%;
  //  }
  //}
  .rc1-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 50%;
    .span1{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      font-size: 20px;
      font-weight: bold;
      margin-right: 10px;
    }
    .spandd {
      color: #ff0900;
    }
    .spanzf {
      color: #ff00dd;
    }
    .spangwc{
      color: #e6ff00;
    }
    .spanzb {
      color: #00ff20;
    }
    .span2{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: right;
      font-size: 24px;
      font-weight: bold;
      margin-right: 10px;
    }
    .rc1-form{
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 80%;
      line-height: 24px;
      input{
        width: 80%;
        outline-style: none ;
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 13px 14px;
        font-size: 20px;
        font-weight: bold;
      }
      input:focus{
        border-color: rgba(233, 102, 102, 0.6);
        outline: 0;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(233, 102, 102, 0.6);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(233, 102, 102, 0.6)
      }
    }
  }
}
</style>