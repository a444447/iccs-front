<template>
  <div>
    <div :style="ChartStyle1"></div>
<!--    <p>{{optionForPie}}</p>-->
<!--    <div :style="ChartStyle1" class="test">-->
<!--      <p>123</p>-->
<!--    </div>-->
  </div>
</template>

<script>
//import echarts from 'echarts'
import axios from "axios";
import Echarts from "echarts/lib/echarts";
export default {
  name: 'CakeChartTest',
  data() {
    return {
        title:[],
        graphData:[],
      colorBase: [],
      r:'65%',
      ChartStyle: {
        width: 100 ,
        height: 300
      },
      ChartStyle1: {
        width: '100%' ,
        height: '100%'
      }
    }
  },
  mounted: function() {
    // this.$nextTick(function() {
    //   this.getData()
    // })
    this.getdata2()
  },
  props:["url","day", "InputStyle","divId"],
  methods: {

      getdata2(){
          axios.post(this.url,{
              days:this.day
          }).then(res=>{
              this.title = res.data['title']
              for (let datum of res.data['data']) {

                  for (let i = 0;i<datum.length;i++) {
                      let tmp = {
                          name:null,
                          value:null
                      }
                      tmp.name=res.data['title'][i]
                      console.log(datum[i])
                      tmp.value=datum[i]
                      console.log(tmp)
                      this.graphData.push(tmp)
                  }
              }
              console.log(this.title)
              console.log(this.graphData)
              if(this.InputStyle){
                  this.ChartStyle = this.InputStyle
              }
              this.getPie()
          })
      },
    //async缺少
    // getData(){
    //   axios.post(this.url,{
    //     days:this.day
    //   }).then(res => {
    //       console.log(res)
    //     let tempData = {
    //       title: res.data["title"],
    //       data: res.data["data"]
    //     }
    //     this.optionForPie = tempData
    //     //this.optionSet.push(tempData)
    //     console.log(res["data"])
    //     if(this.InputStyle){
    //       this.ChartStyle = this.InputStyle
    //     }
    //     console.log(this.ChartStyle)
    //     this.getPie()
    //   })
    // },
    getPie() {
      // 绘制图表
      let myChart = Echarts.init(document.getElementById(this.divId),
          (null),
          this.ChartStyle

      )
      // 指定图表的配置项和数据
      let option = {
        //标题
        title: {
            text: 'bank数据',
            x: 'left' ,              //标题位置
          // textStyle: { //标题内容的样式
          //   color: '#000',
          //   fontStyle: 'normal',
          //   fontWeight: 100,
          //   fontSize: 16 //主题文字字体大小，默认为18px
          // },
        },
        // stillShowZeroSum: true,
        //鼠标划过时饼状图上显示的数据
        tooltip: {
          trigger: 'item',
          formatter: '123<br/>{b}:{c} ({d}%)'
        },
        //图例
        legend: {//图例  标注各种颜色代表的模块
          // orient: 'vertical',//图例的显示方式  默认横向显示
          bottom: 10,//控制图例出现的距离  默认左上角
          left: 'center',//控制图例的位置
          // itemWidth: 16,//图例颜色块的宽度和高度
          // itemHeight: 12,
          textStyle: {//图例中文字的样式
            color: '#000',
            fontSize: 16
          },
          data: this.title//图例上显示的饼图各模块上的名字
        },
        //饼图中各模块的颜色
        // color: ['#32dadd', '#b6a2de', '#5ab1ef'],
        color: ['#32dadd', '#b6a2de','#32db32','#d94a4a'],
        // 饼图数据
        series: {
          // name: 'bug分布',
          type: 'pie',             //echarts图的类型   pie代表饼图
          radius: this.r,           //饼图中饼状部分的大小所占整个父元素的百分比
          center: ['50%', '50%'],  //整个饼图在整个父元素中的位置
          data:this.graphData,              //饼图数据
          // data: [                  //每个模块的名字和值
          //   { name: this.optionForPie.title[0], value: this.optionForPie.data["0"]["0"] }, //
          //   { name: this.optionForPie.title[1], value: this.optionForPie.data["0"]["1"]}
          // ],
          itemStyle: {
            normal: {
              label: {
                show: true,//饼图上是否出现标注文字 标注各模块代表什么  默认是true
                // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
              },
              labelLine: {
                show: true//官网demo里外部标注上的小细线的显示隐藏    默认显示
              }
            }
          },
        }

      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }

}

</script>

<style scoped>
.test{
  background: #42b983;
}
</style>

