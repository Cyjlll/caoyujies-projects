<template>
    <div class="content">
         <p class="control text-muted">  曹余杰
男 | 出生 2000-1-11 | 户口 湖北省 - 宜昌市 | 现居 湖北省 - 武汉市
手机：13135823698
电子邮件：1303804462@qq.com</p>
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