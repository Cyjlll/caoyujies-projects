<template>
    <div class="about">
        <button @click="tologin()">去登陆界面</button>
        <div class="neirong">
        <one/>
            <span class="xianshi">
                <router-view/>
            </span>
        </div>
           <indexx/>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china' //引入中国地图
import indexx from './index/indexx'
import one from '../one'
import {reactive,computed,toRefs,onMounted} from '@vue/composition-api'
export default {
    setup(props,{root}){
        const state = reactive({


        })
     
        const tologin=()=>{
            root.$router.push('/login')
        }
       
        
        return {
            ...toRefs(state),
            tologin
        }
    },
    // 引入的组件都要在这里登记一下,然后用  <名字/>  就可以使用了
    components:{
        one,
        indexx,
    }
}
</script>
<style>
.xianshi{
    text-align: center;
}
.neirong{
    width: 300px;
    height: 300px;
    border: 1px solid red;
}
.about{
    width: 100%;
    height: 100%;
    background-color: black;
}

</style>
