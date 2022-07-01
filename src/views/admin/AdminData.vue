<template>
  <div class="admindata">
      
        <h2 @click="showJobs = true">Jobs</h2>

        <h2 @click="showJobs = false">Users</h2>

  </div>
    
  <div v-if="showJobs">
      <Jobs />
  </div>

  <div v-else>
      <Users/>
  </div>

</template>

<script>

import Jobs from '@/components/Jobs.vue'
import Users from '@/components/Users.vue'
import {ref} from 'vue'

export default {
    components: {Jobs , Users},
    setup(){
        const showJobs = ref(true)

        return {showJobs}
    }
}
</script>

<style>
.admindata{
    display: flex;
    margin : 0px 130px;
}
.admindata h2{
    margin: 0 20px;
    cursor: pointer;
}

@media screen and (max-width: 850px) {
     .admindata{
        margin : 0px 90px;
     }  
}

@media screen and (max-width: 700px) {
     .admindata{
        margin : 0px 70px;
     }  
}
@media screen and (max-width: 600px) {
     .admindata{
        margin : 0px 50px;
     } 
     .admindata h2{
        font-size : 22.5px;
     }
}
@media screen and (max-width: 500px) {
     .admindata{
        margin : 0px 40px;
     } 
     .admindata h2{
        font-size : 20px;
     }
}

@media screen and (max-width: 400px) {
     .admindata{
        margin : 0px 20px;
     }  
}
@media screen and (max-width: 350px) {
     .admindata{
        margin : 0px 10px;
     }  
}
@media screen and (max-width: 300px) {
     .admindata{
        margin : 0px 0px;
     }
     .admindata h2{
        font-size : 17.5px;
     }
}
@media screen and (max-width: 280px) {
     .admindata{
        margin : 0px -10px;
     }  
}
</style>