<template>
    <div class="login">
        <p class="login-title">自我简历</p>
        <div class="login-content">
            <div class="login-biaoge">
            <p><input type="text" placeholder="请输入账号" v-model="user"></p>
            <p><input type="text" placeholder="请输入密码" v-model="password"></p>
            </div>
            <div class="annniu" style="margin-top:80px;">
            <button @click="toself()" style="width:170px;height:60px;background-color:skyblue;border-radius:7px;">go</button>
        <!-- <button @click="toself()">去自我简历</button> -->
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import {reactive,computed,toRefs} from '@vue/composition-api'
export default {
    setup(props,{root}){
        const state = reactive({
            name:'helloworld',
            user:'admin',
            password:'admin'
        })
        const login=()=>{
            let {user,password}=state;
            if(user=="admin"&&password=="admin"){
                root.$router.push('./home');
            }else{
                alert('error')
            }
            ;
            // axios({//向后台接收数据
            //     method:'post',//请求类型
            //     url:'http://127.0,0.1:3333/get_login',//接口地址
            //     data:{user:user,password:password}//请求的数据
            // }).then(function(res){//请求成功
            //     console.log(res);
            //     if(res.data.code=='200'){
            //     sessionStorage.setItem('username',user)
            //     // 设置缓存
            //     sessionStorage.getItem('username')
            //     // 抽取缓存的值
            //     root.$router.push('/home');
            // }else{
            //     alert('error')
            // }
            // }).catch(function(error){//请求失败


            // })
        }
        const toself=()=>{
            root.$router.push('/map');

        }
        return {
            ...toRefs(state),
            login,
            toself
        }
    }
}
</script>
<style scoped>
.login-content{
    width: 100%;
    height: 500px;
    background-color: white;
}
.login{
    width: 100%;
    height: 1052px;
    background-color: turquoise;
}
.login-biaoge{
    position: relative;
    top: 50px;
}


</style>