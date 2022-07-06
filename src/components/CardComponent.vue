<template>
  <el-row>
    <el-col
        v-for="(item, index) in methodSet"
        :key="index"
        :span="5"
        :offset="index%3 > 0 ? 3 : 0"
    >

      <transition name="el-zoom-in-center">
      <el-card :body-style="{ padding: '0px' }" v-if="flag">
<!--        <img-->
<!--            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"-->
<!--            class="image"-->
<!--        />-->
        <BarComponent :option="option" v-if="item.info === 'bar'"></BarComponent>
        <LineChart v-if="item.info === 'line'"></LineChart>
        <CakeChartTest :option="optionForPie" v-if="item.info === 'pie'"></CakeChartTest>
        <div style="padding: 14px">
          <span>{{item.name}}</span>
          <div class="bottom">
            <time class="time">{{item.info}}</time>
            <el-button text @click="Fn(item.method)">Operating</el-button>
          </div>
        </div>
      </el-card>
      </transition>
    </el-col>
    <p>{{optionForPie}}</p>
  </el-row>

</template>

<script>


import axios from "axios";
import BarComponent from "@/components/BarComponent";
import CakeChartTest from "@/components/CakeChartTest";
import LineChart from "@/components/LineChart";

export default {
  name: "CardComponent",
  components: {LineChart, CakeChartTest, BarComponent},
  data(){
    return {
      currentDate:"xxx",
      showCard: true,
      flag: false,
      methodSet: [
        {
          name:'性别聚合',
          info:'bar',
          method:'enterBarView'
        },
        {
          name:'地区聚合',
          info:'line',
          method: 'enterLineView'
        },
        {
          name:'性别聚合',
          info:'pie',
          method: "enterPieView"
        }
      ],
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
      },
      optionSet: [],
      optionForPie: {}
    }
  },
  methods: {
    Fn (method) {
      //console.log(this[method])
      this[method]()
    },
    getData() {
      // axios.all([
      //     axios.post("/api/",{Type: "gender"}),
      //     axios.post("/api/",{Type: "age"}),
      //     axios.post("/api/",{Type:"keep"}),
      //     axios.post("/api/",{Type:"distribution"}),
      //     axios.post("/api/",{Type:"payment"})
      // ]).then(res => {
      //   console.log(res[0])
      //   console.log(res[1])
      // })
      axios.post("/api/image/all/sex",{
        day:7
      }).then(res => {
        let tempData = {
          title: res["data"]["title"],
          data: res["data"]["data"]
        }
        this.optionForPie = tempData
        this.optionSet.push(tempData)
        console.log(res["data"])
      })

    },
    enterBarView(){
      this.$router.push("/home/barPageTest")
    },
    enterLineView(){
      this.$router.push("/LineChart")
    },
    enterPieView(){
      this.$router.push("/CakeChartTest")
    },

  },
  mounted() {
    this.flag = true
    this.getData()
  }
}
</script>

<style scoped>
/*.el-card{*/
/*  width: 300px;*/
/*  height: 200px;*/
/*}*/
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.el-col {
  margin-bottom: 5%;
}

/**opacity 透明度  transform ：https://www.cnblogs.com/xiaomifeng/p/9139632.html**/
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX( 150px )
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease
}
</style>
