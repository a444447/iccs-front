<template>
  <el-row>
    <el-col
        v-for="(value, key, index) in 4"
        :key="key"
        :span="5"
        :offset="index%3 > 0 ? 3 : 0"
    >
      <transition name="el-zoom-in-center">
      <el-card :body-style="{ padding: '0px' }" v-if="flag">
        <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text @click="figure">Operating</el-button>
          </div>
        </div>
      </el-card>
      </transition>
    </el-col>
    <el-button @click="back1">123</el-button>
  </el-row>
</template>

<script>


import axios from "axios";

export default {
  name: "CardComponent",
  data(){
    return {
      currentDate:"xxx",
      showCard: true,
      flag: false
    }
  },
  methods: {
    getData() {
      axios.all([
          axios.post("/api/",{Type: "gender"}),
          axios.post("/api/",{Type: "age"}),
          axios.post("/api/",{Type:"keep"}),
          axios.post("/api/",{Type:"distribution"}),
          axios.post("/api/",{Type:"payment"})
      ]).then(res => {
        console.log(res[0])
        console.log(res[1])
      })

    },

    figure() {
      this.$router.push("/home/barPageTest")
    }
  },
  mounted() {
    this.flag = true
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
