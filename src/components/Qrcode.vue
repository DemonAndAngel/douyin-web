<template>
  <div class="qrcode">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "Qrcode",
  props: ["src"],
  methods: {
  }
}
</script>

<style lang="less">
  .qrcode{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    img{
      width: 50%;
    }
  }
</style>