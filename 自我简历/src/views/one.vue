<template>
    <div>
        <div class="content">
            <p>
               <ul v-for="(item,i) in items" :key="i">
                   <router-link :to="item.url">
                   <li>{{item.name}}</li>
                   </router-link>
               </ul>
            </p>
            
        </div>
    </div>
</template>
<script>
import {reactive,computed,toRefs} from '@vue/composition-api'
export default {
    setup(props,{root}){
        const caoyujie=reactive({
            items:[
                {
                    name:'待付款',
                    url:'/index'
                },
                {
                    name:'待发货',
                    url:'/state'
                },
                {
                    name:'待收货',
                    url:'/wms'
                },
            ],
        })
        return {
        ...toRefs(caoyujie),
    }
    },

}
</script>
<style>
    /* .content{
        width: 200px;
        height: 200px;
        border: 1px solid red;
    } */
    ul li{
        width: 60px;
        margin-left: 30px;
        float: left;
        list-style-type: none;
    }
    .content{
        width: 300px;
        height: 60px;
        text-align: center;
    }
</style>