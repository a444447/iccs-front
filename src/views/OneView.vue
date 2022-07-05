<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <el-row class="iconBlock">
          <el-col :span="24"><h1>123</h1></el-col>
        </el-row>
        <el-row class="dropMenu">
        <el-col :span="24">
          <el-menu active-text-color="#ffd04b"
                   background-color="#545c64"
                   class="el-menu-vertical-demo"
                   default-active="2"
                   text-color="#fff"
                   @open="handleOpen"
                   @close="handleClose">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>总览</span>
              </template>
              <el-menu-item-group title="全国">
                <el-menu-item index="1-1" @click="about">全国数据总览</el-menu-item>
                <el-menu-item index="1-2" @click="mapPage">地区数据统计</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3" @click="search">查询</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><Menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <HorizionMenu></HorizionMenu>
        </el-header>
        <el-main>
          <p>{{test}}</p>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>

//import DropMenu from '@/components/DropMenu'
import HorizionMenu from "@/components/HorizionMenu";
export default {
  name: "OneView",
  methods: {
    handleOpen (key, keyPath){
      console.log(key, keyPath)
    },
    handleClose(key, keyPath){
      console.log(key, keyPath)
    },
    about(){
      this.$router.push("/home/about")

      console.log(this.$route.fullPath)
    },
    search(){
      this.$router.push("/home/test")
    },
    mapPage(){
      this.$router.push("/home/mapPage")
    }
  },
  components: {
    HorizionMenu
  },
  computed: {
    test(){
      return this.$route.fullPath
  }
}
}
</script>

<style scoped>
.iconBlock {
  background: aqua;
}
.dropMenu {
  background: aquamarine;
}
.el-header{
  --el-header-padding: 0 0px;
}
</style>

<!--<style>-->
<!--el-container {-->
<!--  margin-left: 0px;-->
<!--}-->
<!--</style>-->
