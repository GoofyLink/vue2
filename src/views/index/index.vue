<template>
  <div class="amap-wrap">
    <el-amap
        vid="amapDemo"
        :zoom="zoom"
        :center="center"
        class="amap-demo">
    </el-amap>
  </div>

</template>

<script>
export default {
  name: "Index",
  data(){
    return {
      zoom: 12, // 地图放大比例
      center: [121.469897,31.24609],  //默认地图中心 经纬度
    }
  }
};
</script>
<style scoped lang="scss">
.amap-wrap{
  height: 50vh;
}
</style>