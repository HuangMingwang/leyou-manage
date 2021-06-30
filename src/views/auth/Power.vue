<template>
    <div class="box"> 

      <el-table :data="powerData" style="width: 100%">
        <el-table-column type="index" label="#" width="100">
        </el-table-column>

        <el-table-column prop="id" label="权限ID" width="320">
        </el-table-column>

        <el-table-column prop="authName" label="权限名称" width="320">
        </el-table-column>

        <el-table-column prop="level" label="权限等级" width="320">
          <template slot-scope="scope" >
            <el-button
            size="mini"
            type="primary"
            v-if="scope.row.level == 0">一级</el-button>

            <el-button
            size="mini"
            type="success"
            v-else-if="scope.row.level == 1">二级</el-button>

            <el-button
            size="mini"
            type="warning"
            v-else>三级</el-button>
          </template>
        </el-table-column>

      </el-table>

    </div>
</template>

<script>
// 权限管理静态数据
import data from'../staticData/auth/powerManage.js'
export default {
    name:'PowerMange',
    data() {
        return {
          powerData:[],
        };
    },
    created() {
      this.powerData = data
      console.log(this.powerData);
      
    },
    mounted() {

    },
    methods: {
      handleEdit(index,row){
        console.log(index);
        console.log(row);
        
        
      }
    }
};
</script>

<style scoped lang="css">
  .box {
    margin-top: 20px;
    margin-left: 10px;
  }
</style>
