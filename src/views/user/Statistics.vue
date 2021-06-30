<template>
<!-- 会员统计组件 -->
  <div class="box">
    
    <!-- 2：为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width:800px;height:600px"></div>

  </div>
</template>

<script>
// 1：导入 Echart
import echarts from 'echarts'

  export default {
    name: "statistics",
    data() {
      return {
        userCount:{}
      }
    },

    created(){
      this.getUserCount()
    },

    // 此时页面上元素渲染完毕了
    mounted(){
      // 3：基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      // 4：准备数据和配置项---指定图表的配置项和数据
      var option = {
          title: {
              text: '会员数量统计'
          },
          tooltip: {},
          legend: {
              data:['会员数量']
          },
          xAxis: {
              data: ["华南地区","华北地区","华中地区","西北地区","西南地区","东北地区","华东地区"]
          },
          yAxis: {},
          series: [{
              name: '会员数量',
              type: 'bar',
              data: [65, 110, 76, 80, 50, 75]
          }]
      };

      // 调用 API 展示数据
      myChart.setOption(option);

    },
    methods:{
      getUserCount(){
        this.$http
            .get("/info/count")
            .then(({data}) => {
              this.userCount = data
              
            });
            console.log(this.userCount);
            
      }
    }
  }
</script>

<style scoped>
  .box{
    background-color: blue;
    color: white;
  }
  .box[data-v-6d0deb5d] {
    background-color: #fff !important;
  }
</style>
