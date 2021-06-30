<template>
    <div class="box">
      
      <el-table :data="roleData" style="width: 100%">
        <el-table-column type="index" label="#" width="100">
        </el-table-column>

        <el-table-column label="ID" width="240" prop="id">
        </el-table-column>

        <el-table-column label="角色名称" width="240" prop="roleName">
        </el-table-column>

        <el-table-column label="角色描述" width="240" prop="roleDesc">
        </el-table-column>

        <el-table-column label="角色权限" width="300" prop="children">
          <!-- {{roleData.children}}123
          <template slot-scope="scope">
            <el-button v-for="item in roleData.children" :key="item.id"
             @click="click(scope.$index, scope.row)">{{scope.row}}</el-button>

          </template> -->
        </el-table-column>

      </el-table>

      <!-- 分页功能 -->
      <el-pagination
        :current-page="1"
        :page-sizes="[1,5,10]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="roleData.length"
        class="page">
      </el-pagination>

    </div>
</template>

<script>
import data from '../staticData/auth/roleMange'
export default {
    name:'RoleMange',
    data() {
        return {
          roleData:[]
        };
    },
    created() {
      this.roleData = data
      
    },
    mounted() {

    },
    methods: {
      click(a,b){
        console.log(b);
        
      }
    }
};
</script>

<style scoped lang="css">
  .page {
    margin-top: 20px;
  }
</style>
