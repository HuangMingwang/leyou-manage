<template>
    <div class="box">

      <!-- 饼状统计图 -->
      <div>
        <h2 class="title">用户来源统计</h2>
        <!-- 1-1：给 echarts 图 一个容器 -->
        <div id="orderSource" style="width: 640px;height:430px">
        </div>
      </div>


      <!-- 收入统计图 -->
      <div>
        <h2 class="title">收入统计，单位：元</h2>
        <!-- 2-1：给 echarts 图 一个容器 -->
        <div id="income" style="width: 600px;height:400px">
        </div>
      </div>


    </div>
</template>

<script>
// :1-2：导入 echarts
import echarts from 'echarts'

export default {
    name:'statistics',
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {
      // 1-3：基于准备好的dom，初始化 echarts 实例
      var myChart1 = echarts.init(document.getElementById('orderSource'));
      // 1-4：配置图中数据
      var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1048, name: '搜索引擎'},
                  {value: 735, name: '直接访问'},
                  {value: 580, name: '邮件营销'},
                  {value: 484, name: '联盟广告'},
                  {value: 300, name: '视频广告'}
              ]
            }
        ]
      };
      // 1-5：使用刚指定的配置项和数据显示图表。
      myChart1.setOption(option);


      // 2-3：基于准备好的dom，初始化 echarts 实例
      var myChart2 = echarts.init(document.getElementById('income'));
      // 2-4：配置图中数据
      var option2 = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [12000, 13000, 9000, 8200, 12500, 14700, 16000],
          type: 'line'
        }
      ]
};

      // 2-5：使用刚指定的配置项和数据显示图表。
      myChart2.setOption(option2);

    },
    methods: {

    }
};
</script>

<style scoped lang="css">
  .title {
    margin-left: 200px;
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
