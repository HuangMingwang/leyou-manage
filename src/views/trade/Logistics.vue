<template>
    <div class="box">
      
      <el-table
        :data="orders"
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
          prop="number"
          label="订单编号"
          width="180">
        </el-table-column>

        <el-table-column
          prop="orderTime"
          label="订单日期"
          width="180">
        </el-table-column>

        <el-table-column
          prop="userAccount"
          label="用户账号"
          width="180">
        </el-table-column>

        <el-table-column
          prop="arriveTime"
          label="到达日期"
          width="180">
        </el-table-column>

        <el-table-column
          prop="orderState"
          label="是否签收"
          width="180">
        </el-table-column>

      </el-table>

      <!-- 分页功能 -->
      <el-pagination
        :current-page="1"
        :page-sizes="[1,5,10]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="orders.length"
        class="page">
      </el-pagination>

    </div>
</template>

<script>
import orders from '../staticData/trade/logistics'
export default {
    name:'Logistics',
    data() {
        return {
          orders:[],
        };
    },
    created() {
      this.orders = orders
      console.log(this.orders);
      
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
  .page {
    margin-top: 20px;
  }
</style>
