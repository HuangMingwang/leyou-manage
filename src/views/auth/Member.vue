<template>
    <div class="box">
      
      <el-table :data="members" style="width: 100%">
        <el-table-column type="index" label="#" width="100">
        </el-table-column>

        <el-table-column label="ID" width="240" prop="id">
        </el-table-column>

        <el-table-column label="成员姓名" width="240" prop="roleName">
        </el-table-column>

        <el-table-column label="担任职位" width="240" prop="roleDesc">
        </el-table-column>

        <el-table-column label="操作" width="240" >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit"  size="mini"
              @click="editMember(scope.row)"></el-button>

            <el-button type="danger" icon="el-icon-delete" size="mini"
              @click="deleteMembers(scope.row)"></el-button>
          </template>
        </el-table-column>
        

      </el-table>

      <!-- 分页功能 -->
      <el-pagination
        :current-page="1"
        :page-sizes="[1,5,10]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="members.length"
        class="page">
      </el-pagination>

      <!-- 编辑成员弹出框 -->
      <el-dialog title="编辑职员信息" :visible.sync="dialogEditVisible">
        <el-form :model="memberEditData">
          <el-form-item label="职员姓名" :label-width="formLabelWidth">
            <el-input v-model="memberEditData.roleName" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="职员职位" :label-width="formLabelWidth">
            <el-input v-model="memberEditData.roleDesc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEditVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogEditVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 删除成员弹出框 -->
      <el-dialog title="删除职员" :visible.sync="dialogDeleteVisible">
        <el-form :model="memberDeleteData">
          <el-form-item label="职员姓名" :label-width="formLabelWidth">
            <el-input v-model="memberDeleteData.roleName" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="职员职位" :label-width="formLabelWidth">
            <el-input v-model="memberDeleteData.roleDesc" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-dialog>



    </div>
</template>

<script>
import data from '../staticData/auth/members'
export default {
    name:'Member',
    data() {
      return {
        members:[],

        // 编辑成员信息
        memberEditData:{},
        memberDeleteData:{},

        // 确定删除的那个成员信息
        deleteMemberId:0,

        // 编辑成员弹出框 + 删除成员弹出框
        dialogEditVisible:false,
        dialogDeleteVisible:false,
        formLabelWidth:'120px',

      };
    },
    created() {
      this.members = data
      console.log(this.members);
      
    },
    mounted() {

    },
    methods: {
      editMember(info){
        this.dialogEditVisible = true
        this.memberEditData = info
      },

      deleteMembers(info){
        this.dialogDeleteVisible = true
        this.memberDeleteData = info
        this.deleteMemberId = info.id
      },

      // 点击确定删除
      submit(){
        let deleteId = this.deleteMemberId

        this.members = this.members.filter(item=>{
          return item.id !== this.deleteMemberId
        })
        this.dialogDeleteVisible = false
        this.deleteMemberId = 0
      },

      cancel(){
        this.dialogDeleteVisible = false
        this.deleteMemberId = 0
      }
    }
};
</script>

<style scoped lang="css">
  .page {
    margin-top: 20px;
  }
</style>
