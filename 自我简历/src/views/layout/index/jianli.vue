<template>
    <div>
        <div class="content">
            <p>
               <!-- <ul v-for="(item,i) in items" :key="i">
                   <router-link :to="item.url">
                   <li>{{item.name}}</li>
                   </router-link>
               </ul> -->
               <ul v-for="(item,i) in items" :key="i">
                   <router-link :to="item.url">
                   <button class="btn btn-danger">{{item.name}}</button>
                   </router-link>
               </ul>
            </p>
             <div class="content">
                 <router-view/>
            </div>
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
                    name:'个人信息',
                    url:'/indexx'
                },
                {
                    name:'培训经历',
                    url:'/first'
                },
                {
                    name:'求职意向',
                    url:'/second'
                },
                {
                    name:'工作/实习经历',
                    url:'/third'
                },
                {
                    name:'IT 技能',
                    url:'/fourth'
                },
                {
                    name:'获得证书',
                    url:'/fifth'
                },
                {
                    name:'附加信息',
                    url:'/sixth'
                },
            ],
        })
        return {
        ...toRefs(caoyujie),
    }
    },

}
</script>
<style scoped>

button{
    height: 80px;
    width: 160px;
    margin-left: 10px;
    font-size: 20px;
}

</style>