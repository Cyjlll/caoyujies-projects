<template>
    <div class="content">
         <p class="control text-muted">  2020-08 到 2020-09
胜利社区 ｜ 社区服务 | 工作类型：实习
工作描述：在社区的希望家园活动中负责制作电子档表格、绘制卫星房屋片区图、整理档案录用个人信
息等工作被评为“优秀实习大学生”</p>
    </div>
</template>
<script>
import echarts from 'echarts'
import Map from './map'
import {reactive,computed,toRefs} from '@vue/composition-api'
export default {
    setup(props,{root}){
        const lalala=reactive({

        })
        return {
            ...toRefs(lalala)
        }
    }
}
</script>
<style scoped>
.content{
    width: 900px;
    height: 400px;
    border-radius: 30px;
    position: absolute;
    border: 1px solid black;
    top: 250px;
    left: 550px;
}
.control{
    margin-top: 140px;
    font-size: 28px;
    font-weight: 800px;
}
</style>