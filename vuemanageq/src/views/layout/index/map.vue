<template>
    <div class="content">
            <div id="main" style="width: 100%;height:950px;padding-top:200px;padding-bottom:180px;" :class="toggle? white:black"></div>
            <button @click="check()" id="check" class="text-muted btn btn-dark">点击切换白天(夜间)模式</button>
            <button @click="next()" class="btn btn-primary" id="next">自我鉴定▶▶▶</button>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china' //引入中国地图
import {reactive,computed,toRefs,onMounted} from '@vue/composition-api'
export default {
    setup(props,{root}){
        const lalala=reactive({
            white:'white',
            black:'black',
            toggle:false,
            theme:''
        })
       const check=()=>{
        // $('html').css('background','white')
        lalala.toggle=!lalala.toggle;
        if(lalala.toggle==true){
            lalala.theme='light'
        }else{
            lalala.theme='dark'
        }
        myChart.dispose();  
        myChart = echarts.init(document.getElementById('main'), 'lalala.theme');
        myChart.setOption(option);

        // myChart.dispose();  
        // myChart = echarts.init(document.getElementById('main'), 'dark');
        // myChart.setOption(option);
       }
       const next=()=>{
        root.$router.push('/jianli');
       }
       const init=()=>{
           // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'),'dark');

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '语言熟悉程度',
                textStyle:{
                fontSize: 23,
                textBorderColor:'',
                fontFamily:'黑体',
                },
                padding:[0,0,0,0],
            },
            tooltip: {},
            grid:{
                    y2:50,
                },
            legend: {
                data:['熟悉度']
            },
            textStyle: {//字体的样式在这里面设置
                fontSize: 15,
                fontStyle: "normal",
                fontWeight: "bold"
                },
            xAxis: {
                data: ["vue","jq","js","html","css","python","bootstrap"],
                axisLabel: {
                fontSize: 25,
                },
            },
            yAxis: {
                type: 'value',
                name: '百分比(%)',
                min: 0,
                max: 100,
                // interval: 20,
                minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
                axisLabel: {
                    formatter: '{value}'
                },
                axisLabel:{
                    fontSize:20,
                }
            },
            series: [{
                // name: '熟悉度',
                type: 'bar',
                data: [50, 60, 65, 70, 70, 50,60],
                barWidth:90,
                itemStyle:{
                    　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['rgb(65,184,131)','rgb(7,105,173)','rgb(195,195,195)','rgb(151,211,81)','rgb(55,154,214)','rgb(252,248,75)','rgb(106,66,157)'];
                        return colorList[params.dataIndex];
                    }
                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

       }

       onMounted(()=>{
           init()
       })
        return {
            ...toRefs(lalala),
            init,
            check,
            next

        }
    }
}
</script>
<style scoped>
.content{
    height: 900px;
    /* background-color: rgba(51,51,51); */
}
/* .light{
    height: 947px;
    background-color: white;
} */
#next{
    position: absolute;
    left: 1550px;
    top: 800px;
    width: 200px;
    height: 60px;
    font-weight: bold;
    font-size:  20px;
    border-radius: 20px;
    /* z-index: 999px; */
}
#check{
    position: relative;
    bottom: 630px;
    left: 1500px;
    bottom:800px ;
    height: 40px;
    font-size: 20px;
}
.white{
    background-color: seashell;
    /* height: 1052px; */

}
.black{
    background-color: rgba(51, 51,51);
    /* height: 1052px; */

}


</style>