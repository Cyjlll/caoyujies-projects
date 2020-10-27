<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style>
.login-content{
    width: 100%;
    height: 1000px;
    background-color: white;
    margin-top: 200px;
    text-align:center;
}
.login-title{
    color: black;
    font-size: 50px;
    text-align: center;
    position: relative;
    top: 100px;
}
.login-biaoge{
    text-align: center;
    line-height: 150px;
}
.login-biaoge input{
    height: 80px;
    width: 600px;
    font-size: 20px;
}
*{
  margin: 0 auto;
  padding: 0;
}

</style>
