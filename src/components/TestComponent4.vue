<template>
<div style="width: 100%; height: 100% " ref="chart"></div>
</template>

<script>
let Echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar'); //所需图表
import "D:\\WebStormProject\\iccs-front\\src\\assets\\china.js";
export default {
  name: "TestComponent4",
  data() {
    return {
      chart : null
    }
  },
  methods: {
    init() {
      this.chart = Echarts.init(this.$refs.chart);

      let option = {
        tooltip: {
          show: false
        },
        geo: {
          map: "china",
          roam: false,// 一定要关闭拖拽
          zoom: 1.23,
          center: [105, 36], // 调整地图位置
          label: {
            normal: {
              show: false, //关闭省份名展示
              fontSize: "10",
              color: "rgba(0,0,0,0.7)"
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 5,
              shadowOffsetY: 8,
              shadowOffsetX: 0,
              shadowColor: "#01012a"
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.23,
            center: [105, 36],
            // geoIndex: 1,
            // aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', () => {
      this.chart.resize();
    });

  }

}
</script>

<style scoped>

</style>
