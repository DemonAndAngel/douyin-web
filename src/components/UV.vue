<template>
  <div class="right-chart-1">
    <div class="r1-header">
      <span class="r1-span">预期UV</span>
    </div>
    <div class="rc1-container">
      <div class="rc1-form">
        <input v-model="uv" type="number" @input="setUv" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UV',
  props: ['oldUV'],
  data () {
    return {
      uv: 0,
    }
  },
  created() {
    this.uv = this.oldUV
  },
  methods: {
    setUv() {
      this.axios.post("api/set/uv", this.qs.stringify({
        uv: this.uv,
      })).then((res)=>{

      }).catch((err) => {
        alert("设置uv异常! 信息: " + err)
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
  .r1-header{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50%;
    font-size: 24px;
    font-weight: bold;
    .r1-span{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

  }
  .rc1-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 50%;
    .rc1-form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      line-height: 24px;
      input{
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