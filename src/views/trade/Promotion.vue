<template>
    <div class="box">
      
      <el-table
        :data="goods"
        style="width: 100%">

        <el-table-column
          type="index" label="#"
          width="60">
        </el-table-column>

        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>

        <el-table-column
          prop="title"
          label="活动标题"
          width="180">
        </el-table-column>

        <el-table-column
          prop="startTime"
          label="开始时间"
          width="180">
        </el-table-column>

        <el-table-column
          prop="activeState"
          label="活动状态"
          width="180">
        </el-table-column>

        <el-table-column
          prop="endTime"
          label="结束时间"
          width="180">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
           <el-button
             size="mini"
             type="primary"
             @click="handleEdit(scope.$index, scope.row)">启动</el-button>
           <el-button
             size="mini"
             type="danger"
             @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
    </el-table-column>
        

      </el-table>

      <!-- 分页功能 -->
      <el-pagination
        :current-page="1"
        :page-sizes="[1,5,10]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="goods.length"
        class="page">
      </el-pagination>

      <!-- 上架活动的弹出框 -->
      <el-dialog title="启动活动" :visible.sync="dialogEditVisible">
        <el-form :model="editData">

          <el-form-item label="活动名称" label-width="120px">
            <el-input v-model="editData.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="开始日期" label-width="120px">
            <el-input v-model="editData.startTime" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEditVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogEditVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 删除活动的弹出框 -->
      <el-dialog title="删除活动" :visible.sync="dialogDeleteVisible">
        <el-form :model="editData">

          <el-form-item label="活动名称" label-width="120px">
            <el-input v-model="editData.title" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="结束日期" label-width="120px">
            <el-input v-model="editData.endTime" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button  @click="dialogDeleteVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogDeleteVisible = false">确 定</el-button>
        </div>
      </el-dialog>

    </div>
</template>

<script>
import data from '../staticData/trade/promotion'
export default {
    name:'Promotion',
    data() {
        return {
          goods:[],

          editData:{},
          dialogEditVisible:false,

          deleteData:{},
          dialogDeleteVisible:false
        };
    },
    created() {
      this.goods = data
      
    },
    mounted() {

    },
    methods: {
      // 点击启动活动按钮
      handleEdit(index, data){
        this.editData = data
        this.dialogEditVisible = true
        console.log(data);
        
      },

      // 点击删除此活动
      handleDelete(index,data){
        this.deleteData = data
        this.dialogDeleteVisible = true
      }
    }
};
</script>

<style scoped >
  .page {
    margin-top: 20px;
  }
</style>
