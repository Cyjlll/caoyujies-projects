<template>
    <div class="content">
         <p class="control text-muted">  2019-08 到 2019-12 rhcsa
培训机构： 东方瑞通
培训内容： linux 操作，rhcsa 证书</p>
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