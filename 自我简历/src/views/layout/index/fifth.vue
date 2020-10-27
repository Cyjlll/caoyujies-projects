<template>
    <div class="content">
           <p class="control text-muted">大学英语四级、红帽 rhcsa、计算机一级证、驾驶证、普通话等级证书、</p>
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