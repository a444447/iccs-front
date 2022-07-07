<template>
  <el-row>
    <el-col :span="18">
      <CakeChartTest :url="url1" :day="days" :InputStyle="InputStyle" v-if="isDraw" ></CakeChartTest>
    </el-col>
    <el-col :span="6">
<!--      <div class="block">-->
<!--        <span class="demonstration">Emits Date object</span>-->
<!--        <div class="demonstration">Value: {{ DateValue }}</div>-->
<!--        <el-date-picker-->
<!--            v-model="DateValue"-->
<!--            type="date"-->
<!--            placeholder="Pick a Date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--        />-->
<!--      </div>-->
      <div class="block">
        <span class="demonstration">With shortcuts</span>
        <el-date-picker
            v-model="effectiveDate"
            type="daterange"
            :shortcuts="shortcuts"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
        />
      </div>
      <el-button @click="drawChart">button</el-button>
        <el-button>123</el-button>
      <p>{{effectiveDate}}</p><br>
      <p>{{days}}</p>
    </el-col>
  </el-row>
</template>

<script>
//需要获得CakeChartTest中的数据，这里直接重新请求一次代替
// import axios from "axios";
import CakeChartTest from "@/components/CakeChartTest";

export default {
  name: "DisplayChartView",
  components: {CakeChartTest},
  methods: {
    drawChart() {
      // axios.post("/api/image/all/sex",{
      //   days:this.days
      // }).then(res => {
      //   let tempData = {
      //     title: res["data"]["title"],
      //     data: res["data"]["data"]
      //   }
      //   this.optionForPie = tempData
      //   console.log(res["data"])
      //   this.isDraw = true
      // })
        this.isDraw = !this.isDraw
    }
  },
  computed: {
    days(){
      let  startDate = Date.parse(this.effectiveDate[0]);
      let  endDate = Date.parse(this.effectiveDate[1]);
      if (startDate>endDate){
        return 0
      }
      if (startDate==endDate){
        return 1
      }
      let days=(endDate - startDate)/(1*24*60*60*1000);
      return  days
    }
  },
  data() {
    return {
        url1:"/api/image/all/sex",
      InputStyle: {
        // width: 500,
        height: 700
      },
      effectiveDate: "",
      isDraw: false,
      shortcuts: [
        {
          text: 'Last week',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          },
        },
        {
          text: 'Last month',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
        },
        {
          text: 'Last 3 months',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          },
        },
      ],

    }
  }
}
</script>

<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
