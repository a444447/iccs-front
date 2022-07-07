<template>
  <div>
  <el-row v-show="isShow">
    <el-col
        v-for="(item, index) in methodSet"
        :key="index"
        :span="6"
        :offset="index%3 > 0 ? 2 : 0"
    >

      <transition name="el-zoom-in-center">
      <el-card :body-style="{ padding: '0px' }" v-if="flag">
<!--        <img-->
<!--            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"-->
<!--            class="image"-->
<!--        />-->
        <CakeChartTest
            :url="urlBar"
            :day=7
            :InputStyle="InputStyle"
            v-if="item.info === 'bar'"
            :div-id="graphId.age"
            :id="graphId.age"
        ></CakeChartTest>
<!--        <LineChart v-if="item.info === 'line'"></LineChart>-->
          <CakeChartTest :url="urlHoldCreditCard"
                         :day=7
                         :InputStyle="InputStyle"
                         v-if="item.info === 'card'"
                         :div-id="graphId.handle"
                         :id="graphId.handle"></CakeChartTest>
        <CakeChartTest :url="urlPie"
                       :day=7
                       :InputStyle="InputStyle"
                       v-if="item.info === 'sex'"
                       :div-id="graphId.sex"
                       :id="graphId.sex"
        ></CakeChartTest>
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

<!--    <p>{{optionForPie}}</p>-->
  </el-row>
  </div>
<!--  <router-view></router-view>-->

</template>

<script>


//import axios from "axios";
// import BarComponent from "@/components/BarComponent";
import CakeChartTest from "@/components/CakeChartTest";
// import LineChart from "@/components/LineChart";

export default {
  name: "CardComponent",
  components: {CakeChartTest},
  computed:{
    isShow(){
      return this.$route.fullPath === "/home/about"
    }
  },
  data(){
    return {
        InputStyle: {
            height:500
        },
        graphId:{
            handle:'handle',
            sex:'sex',
            age:'age'
        },
      showCard: true,
      flag: false,
      methodSet: [
        {
          name:'用户数量统计',
          info:'bar',
          method:'enterBarView'
        },
        {
          name:'持卡数量聚合',
          info:'card',
          method: 'enterPieView'
        },
        {
          name:'性别聚合',
          info:'sex',
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
      urlPie: "/api/image/all/sex",
      urlBar: "/api/image/all/age",
      urlHoldCreditCard: "/api/image/all/cardhandle",
      optionForPie: {},
      optionForLine: {},
      optionForBar: {}
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

    },
    enterBarView(){
      this.$router.push("/home/barPageTest")
    },
    enterLineView(){
      this.$router.push("/LineChart")
    },
    enterPieView(){
      this.$router.push("/home/display")
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
