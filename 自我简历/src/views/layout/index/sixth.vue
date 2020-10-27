<template>
    <div class="content">
        <p class="control text-muted"> 自我评价： 对待新鲜事物有着很强的学习能力，有良好的沟通能力和团队合作能力，熟练掌握制作前
端网页专业知识，可以尝试一切新事物
兴趣爱好：
GitHub：
会使用 PS,AE,PR,C4D 等视频 p 图建模软件
https://github.com/Cyjlll/caoyujies-projects.git</p>
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
    text-align: center;
}
.control{
    margin-top: 120px;
    font-size: 28px;
    font-weight: 800px;
}
</style>