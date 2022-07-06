<template>
  <BarComponent :option="option"></BarComponent>
</template>

<script>
import BarComponent from "@/components/BarComponent";
//import {ref} from "vue";

export default {
  name: "TestForChart",
  components:{BarComponent},
  data(){
    return{
      option: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
          }
        ]
      }
    }
  },
  methods:{
    getOption(){

    }
  }

}
</script>

<style scoped>

</style>
