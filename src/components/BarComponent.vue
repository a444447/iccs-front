<template>
<div style="width: 100% ;height: 50%" ref="bar">

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
  // setup(props) {
  //   let xAxis = ref(props.xAxis)
  //   let yAxis = ref(props.yAxis)
  //   let series = ref(props.series)
  //   let Option = {
  //     xAxis:xAxis,
  //     yAxis:yAxis,
  //     series:series
  //   }
  //   return {
  //     Option
  //   }
  // }


}
</script>

<style scoped>

</style>
