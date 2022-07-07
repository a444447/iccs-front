<template>
<div style="width: 100% ;height: 300%" ref="bar">

  <p>{{option}}</p>
</div>
</template>

<script>
// import {ref} from "vue";

import axios from "axios";

let Echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar'); //所需图表
export default {
  name: "BarComponent",
  data() {
    return {
      option: {},
      bar : null
    }
  },
  methods: {
    getData() {
      let me = this
      axios.post(this.url,{
        days:7
      }).then(res => {
        let temp = {
          title:res.data["title"],
          data:res.data["data"]
        }
        me.option = temp
        this.init()
      })
    },
    init() {
      this.bar = Echarts.init(this.$refs.bar);
      let me = this
      console.log(me.option)
      let option = {
        xAxis: {
          data: me.option.title
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: me.option.data[0]
          }
        ]
      }
      this.bar.setOption(option);

      }
  },
  props:["url"],
  mounted() {
    this.getData()
  }


}
</script>

<style scoped>

</style>
