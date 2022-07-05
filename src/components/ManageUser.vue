<template>
  <div class="hello">
    <h1>element-ui表格</h1>
    <el-row class="table-grid-content">
      <el-col :span="18" class="grid">
        <el-input v-model="username" placeholder="请输入搜索内容"></el-input>
      </el-col>
      <el-col :span="3" class="grid" :gutter="1">
        <el-button type="success" icon="el-icon-search" @click="getUser(username)">搜索</el-button>
      </el-col>
      <el-col :span="2" class="grid" :gutter="15">
        <el-button type="primary" @click="addUser()">增加</el-button>
      </el-col>
    </el-row>
    <el-table :data="UserTable" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><Timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.uName }}</div>
              <div>address: {{ scope.row.uPassword }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.uName }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <p>{{UserTable}}</p>
</template>


<script>
import {Timer} from "@element-plus/icons-vue"
import axios from "axios";
export default {
  name: "TestComponent3",
  data() {
    return {
      User:[
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
      username: "",
      UserTable: []
    }
  },
  Components: Timer,
  methods: {
    handleEdit(index, row){
      console.log(index, row)
    },
    handleDelete(index, row){
      console.log(index, row)
    },
    getUser(name) {
      axios.post('/api/user/searchuser',{
        uName:name
      }).then((response) => {
        //this.User2.push(response.data)
        this.UserTable = response.data["user"]
        console.log(this.UserTable)
      })
    },
    addUser() {
      
    },
    // searchUser() {
    //   axios.post('/api/user/')
    // }
  },
  mounted() {
    //this.getUser()
  }
}
</script>

<style scoped>

</style>
