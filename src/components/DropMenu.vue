<template>
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
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
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
</template>
<script>
// import {
//   //Document,
//   //Menu as IconMenu,
//   //Location,
//   //Setting,
// } from '@element-plus/icons-vue'
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
//}
export default {
  methods:{
    handleOpen (key, keyPath){
      console.log(key, keyPath)
    },
    handleClose(key, keyPath){
      console.log(key, keyPath)
    },
    about(){
      this.$router.push("/home/about")
    }
  }


}
</script>


