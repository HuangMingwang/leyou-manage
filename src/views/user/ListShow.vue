<template>
  <!-- 会员展示组件 -->
  <div class="box">

    <!-- 表格区 -->
    <el-table
      :highlight-current-row="true"
      :data="usersInfo"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="280">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="280">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="280">
      </el-table-column>
      <el-table-column
        label="修改"
        width="280">
        <div slot-scope="scope">
          <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </div>
      </el-table-column>
    </el-table>

    <!-- 分页功能 -->
    <div class="dividePages">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1,3, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersInfo.length">
      </el-pagination>
    </div>

    <!-- 编辑会员信息功能 -->
    <el-dialog title="编辑会员信息" :visible.sync="dialogEditVisible">
      <el-form :model="editUserInfo">
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.phone" autocomplete="off"></el-input>
        </el-form-item>

        
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="editUserInfo.username" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>


<script>
  export default {
    name: "ListShow",
    created(){
      this.getUsersInfo()
    },
    data() {
      return {
        // 用户数据
        usersInfo:[
          {
          "id": 0,
          "phone": "13505275684",
          "username": "王大拿"
          },{
          "id": 1,
          "phone": "13505275684",
          "username": "李云"
          },{
          "id": 2,
          "phone": "13505275684",
          "username": "向日葵"
          },{
          "id": 3,
          "phone": "13505275684",
          "username": "文华"
          },{
          "id": 4,
          "phone": "13505275684",
          "username": "ustc-why"
          },{
          "id": 5,
          "phone": "13505275684",
          "username": "ustc-01"
          }
          
          // {
          // "id": 6,
          // "phone": "13505275684",
          // "username": "ustc01"
          // },{
          // "id": 7,
          // "phone": "13505275684",
          // "username": "ustc02"
          // }
          // ,{
          // "id": 8,
          // "phone": "13505275684",
          // "username": "ustc03"
          // },{
          // "id": 9,
          // "phone": "13505275684",
          // "username": "ustc04"
          // },{
          // "id": 10,
          // "phone": "13505275684",
          // "username": "ustc05"
          // },{
          // "id": 11,
          // "phone": "13505275684",
          // "username": "ustc06"
          // },{
          // "id": 12,
          // "phone": "13505275684",
          // "username": "ustc07"
          // },{
          // "id": 13,
          // "phone": "13505275684",
          // "username": "ustc08"
          // },
        ],
        // 搜索用户列表
        queryInfo:{
          query:'',
          pagenum:1,  //当前页数
          pagesize:5  //当前每页数据个数
        },
        // 编辑用户弹框可见：
        dialogEditVisible:false,
        // 要编辑会员的信息
        editUserInfo:{
          "id": 0,
          "phone": "13505275684",
          "username": "王大拿"
        },
        formLabelWidth: '60px' //弹出框的宽度
      }
    },
    methods:{
      // 获取用户会员信息
      getUsersInfo(){
        this.$http
              .get("/info/page")
              .then(({data}) => {
        });
      },

      // 监听 pageSize 事件
      handleSizeChange(newSize){
        this.queryInfo.pagesize = newSize
      },

      // 监听页码值改变的事件
      handleCurrentChange(newPage){
        this.queryInfo.pagenum = newPage
      },

      // 点击编辑会员按钮
      handleEdit(index,row){
        this.dialogEditVisible = !this.dialogEditVisible //显示弹框

      },

      // 提交编辑后的信息
      editSubmit(){
        this.dialogEditVisible = false
      }
    }
  }
</script>

<style scoped>
  .dividePages {
    margin-top: 15px;
  }
</style>

