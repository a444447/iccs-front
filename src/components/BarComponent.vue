<template>
<div style="width: 100% ;height: 300%" ref="bar">

  <p>{{option}}</p>
</div>
</template>

<script>
// import {ref} from "vue";

let Echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar'); //所需图表
export default {
  name: "BarComponent",
  data() {
    return {
      bar : null
    }
  },
  methods: {
    init() {
      this.bar = Echarts.init(this.$refs.bar);
      let option = this.option
      this.bar.setOption(option);

      }
  },
  props:["option"],
  mounted() {
    this.init()
    console.log(this.option)
  }


}
</script>

<style scoped>

</style>
