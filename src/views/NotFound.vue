<template>
  <div class="NotFound">
      <img src="@/assets/search3.png" />
      <h1> Oops, the page you were looking for does'nt exist .</h1>
      <h4>You may have mistyped the address or the page may have moved.</h4>
      <h4><router-link :to="{name : 'Home' }">Take me back to the home page</router-link></h4>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.NotFound{
    max-width : 700px;
    margin : 30px auto;
}
.NotFound img{
    width: 500px;
    margin : auto 100px;
}
.NotFound h1{
    font-size : 28px;
    margin-bottom: 15px;
    text-align: center;

}
.NotFound h4{
    font-size: 15px;
    text-align: center;
    padding : 0px 0 10px;
    color: darkgray;
}
</style>