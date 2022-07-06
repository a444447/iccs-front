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
        <el-button type="primary" @click="dialogVisible = true">增加</el-button>
        <el-dialog
            v-model="dialogVisible"
            title="添加用户"
            width="30%"
            :before-close="handleClose"
        >
          <el-input v-model="User.uName" placeholder="输入用户账号"></el-input>
          <el-input v-model="User.uPassword" placeholder="输入用户密码"></el-input>
          <el-radio-group v-model="User.uRight">
            <el-radio label="1" size="large">超级管理员</el-radio>
            <el-radio label="2" size="large">管理员</el-radio>
            <el-radio label="3" size="large">普通用户</el-radio>
          </el-radio-group>
          <template #footer>
           <span class="dialog-footer">
             <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="addUser">Confirm</el-button>
            </span>
          </template>
<!--          <template #footer>-->
<!--            <el-input v-model="username" placeholder="请输入搜索内容"></el-input>-->
<!--          </template>-->
        </el-dialog>
      </el-col>
    </el-row>
    <el-table :data="UserTable" style="width: 100%">
      <el-table-column label="ID" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><Timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="240">
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
          <el-button size="small" @click="handleEdit(scope.row)">Edit</el-button>
          <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row.id)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
<!--    编辑用户的弹窗-->
    <el-dialog
        title="修改用户"
        v-model="editDialogVisible"
        width="50%"
        @close="editDialogClosed">
      <el-form :model="editForm" ref="editFormRef" label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="editForm.uName" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="editForm.uPassword"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="editForm.uRight"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer">
            <el-button @click="editDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editUserInfo()">确 定</el-button>
          </span>
    </el-dialog>

  </div>
  <p>{{UserTable}}</p>
</template>


<script>
import {Timer} from "@element-plus/icons-vue"
import axios from "axios";
//import {ElMessageBox} from "element-plus";
export default {
  name: "TestComponent3",
  data() {
    return {
      dialogVisible: false,
      editDialogVisible:false,
      User: {
        uName: "",
        uPassword: "",
        uRight:""
      },
      username: "",
      UserTable: [],
      editForm: {}
    }
  },
  Components: Timer,
  methods: {
    handleEdit(row){
      console.log(row)
      // axios.post("/api/user/searchuser", {
      //   uName:uName
      // }).then(res => {
        this.editForm = row
        this.editDialogVisible = true
      //})
    },
    // 监听修改用户对话框的关闭
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    // 修改用户信息并且提交
    editUserInfo () {
      this.$refs.editFormRef.validate(async valid => {
        console.log(this.editForm)
        if (!valid) return
        // 发起修改用户信息的数据请求
        axios.post('/api/user/changeuser', {
          id:this.editForm.id,
          uName:this.editForm.uName,
          uPassword:this.editForm.uPassword,
          uRight:this.editForm.uRight
        }).then(res => {
          console.log(res)
        })
        // 关闭对话框
        this.editDialogVisible = false
        // 提示修改成功
        this.$message.success('更新用户信息成功！')
      })
    },
    async handleDelete(id){
      console.log(id)
      const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      axios.post("/api/user/deleteuser", {
        id:id
      }).then(res => {
        console.log(res)
        if(res.data["code"] === 0){
          this.$message.success('删除用户成功！')
        }
      })
      console.log(this.username)
      this.getUser(this.username)


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
      this.dialogVisible = false
      if(!this.User.uPassword || !this.User.uName || !this.User.uRight) {
        this.$message.error("输入框有空白!");
        return
      }
      axios.post("/api/user/adduser",{
        uName:this.User.uName,
        uPassword:this.User.uPassword,
        uRight:this.User.uRight
      }).then(res => {
        console.log(res)
      })
    },
    handleClose(){
      console.log("123")
    }
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
