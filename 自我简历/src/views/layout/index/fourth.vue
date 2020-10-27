<template>
    <div class="content">
         <p class="control text-muted">  熟练： VUE、JQ、HTML5、CSS、JavaScript、Bootstrap、Linux、C++、office、Photoshop、
CorelDraw、
电脑硬软件维护</p>
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
    margin-top: 170px;
    font-size: 28px;
    font-weight: 800px;
}
</style>