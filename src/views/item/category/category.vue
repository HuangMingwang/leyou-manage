<template>
    <div class="box0">
      <!-- 复制的代码 -->
      <!-- 表格 -->
      <tree-table  :data="goodCategory" :columns="columns" :selection-type="false" 
        :expand-type="false" show-index index-text="#" border :show-row-hover="false" class="Table"> 
        <!-- 是否有效 -->
        <template slot="isok" slot-scope="scope">
          <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen;"></i>
          <i class="el-icon-error" v-else style="color: red;"></i>
        </template>
        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level===0">一级</el-tag>
          <el-tag type="success" size="mini" v-else-if="scope.row.cat_level===1">二级</el-tag>
          <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>
        <!-- 操作 -->
        <template slot="opt">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteData">删除</el-button>
        </template>
      </tree-table>

      <!-- 分页区域 --> 
      <el-pagination 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page="querInfo.pagenum" :page-sizes="[1, 3, 5]" 
        :page-size="querInfo.pagesize" layout="total, sizes, prev, pager, next, jumper" 
        :total="total">
      </el-pagination>

      <!-- 点击编辑分类区域 -->
      <el-dialog title="编辑分类" :visible.sync="dialogAddVisible">
        <el-form :model="categoryInfo">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model=categoryInfo.cat_name autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商品等级" :label-width="formLabelWidth">
            <el-input v-model="categoryInfo.cat_level" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAddVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogAddVisible = false" >确 定</el-button>
        </div>
      </el-dialog>    

      <!-- 点击删除分类区域 -->
      <el-dialog title="删除商品分类" :visible.sync="dialogDeleteVisible">
        <el-form :model="categoryInfo">
          <el-form-item label="商品名称" :label-width="formLabelWidth">
            <el-input v-model=categoryInfo.cat_name autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="商品等级" :label-width="formLabelWidth">
            <el-input v-model="categoryInfo.cat_level" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogDeleteVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogDeleteVisible = false" >确 定</el-button>
        </div>
      </el-dialog>    

    </div>
</template>

<script >

// 导入
import goods from '../../staticData/item/category'

export default {
    name:'Category',
    data() {
        return {

          // 所有商品分类
          goodCategory:[],

          // 为table指定列的定义
          columns: [
            {
              label: '分类名称',
              prop: 'cat_name'
            },
            {
              label: '是否有效',
              // 表示，将当前列定义为模板列
              type: 'template',
              // 表示当前这一列使用模板名称
              template: 'isok'
            },
            {
              label: '排序',
              // 表示，将当前列定义为模板列
              type: 'template',
              // 表示当前这一列使用模板名称
              template: 'order'
            },
            {
              label: '操作',
              // 表示，将当前列定义为模板列
              type: 'template',
              // 表示当前这一列使用模板名称
              template: 'opt'
            }
          ],

          // 分页使用数据
          querInfo:{
            pagenum:1,
            pagesize:5,
          },
          total:30,

          // 编辑分类 + 删除分类 弹出框
          dialogAddVisible:false,
          dialogDeleteVisible:false,

          // 编辑 + 删除 的数据信息
          categoryInfo:{
            cat_name:'大家电',
            cat_level:0, //分类级别
          }


        };
    },
    created() {
      this.goodCategory = goods
      console.log(this.goodCategory);
      
    },
    mounted() {

    },
    methods: {
      handleSizeChange(newSize){
        this.querInfo.pagesize = newSize
      },

      handleCurrentChange(newPagenum){
        this.querInfo.pagenum = newPagenum
      },

      // 编辑商品分类
      edit(){
        this.dialogAddVisible = true
      },
      // 删除商品分类
      deleteData(){
        this.dialogDeleteVisible = true
      }
    }
};
</script>

<style scoped >
  .Table {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
