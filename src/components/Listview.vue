<template>

<div class="Search">
   <input type="search"  placeholder="Search for jobs" v-model="search" /> 
</div>

<div v-if="Jobs">
  <div v-for="job in filteredJobs" :key="job.id">
    <!-- <router-link :to="{name : 'Jobdetails' , params : {id : job.id}}"> -->
        <div class="single">
        
            <div class="info">
                <h2>{{job.Job_title}}</h2>
                <p>- Company : {{job.Job_company}} , contact us at {{job.Job_contact}}</p>
            </div>

            <div class="view">
                <router-link :to="{name : 'Jobdetails' , params : {id : job.id}}">
                    <button>View</button>
                </router-link>
            </div>
        </div>
    <!-- </router-link> -->
  </div>
  </div>
  <div v-else class="centeredSpinner"><Spinner /></div>
  
</template>

<script>

import {ref , computed} from "vue"
import Spinner from '@/components/Spinner'

export default {
    props : ['Jobs'],
    components : {Spinner},
    setup(props){

        const search = ref('')
        
        const filteredJobs = computed(() => {
            return props.Jobs.filter((job) => job.Job_title.includes(search.value))
        })

        return { search , filteredJobs }
    }
}
</script>

<style scoped>
.single {
    display: flex;
    align-items: center;
    padding: 25px;
    border-radius: 10px;
    background: white;
    margin: 24px 32px;
    transition: all ease 0.2s;
  }
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }
  .Search{
      display : flex;
  }

  .view{
      margin-left: auto;
  }

  input[type="search"]{
      width : 20%;
      margin-right: 55px;
      border-radius: 45px;
  }
  .info{
      margin: 0 30px;
      line-height : 30px;
  }
  .info h2{
      margin-bottom : 20px;
      /* text-transform: capitalize; */
  }

.centeredSpinner{
    display: flex;
    justify-content : center;
    align-items: middle;
}
@media screen and (max-width : 485px){
    .single{
        margin: 24px 24px;
        padding : 18px;
    }
    .info h2{
        font-size : 18px;
        margin-bottom : 10px;
    }
    .info p{
        font-size : 14px;
    }
    input[type="search"] {
      width : 30%;
      margin-right: 25px;
      border-radius: 45px;
    }
    
}

@media screen and (max-width : 400px) {
    .single{
        margin: 24px 10px;
        padding : 12px;
    }
    .info h2{
        font-size : 13px;
        margin-bottom : 5px;
    }
    .info p{
        font-size : 10px;
    }
    .view a button{
        width : 100%;
    }
    input[type="search"] {
      width : 40%;
      margin-right: 15px;
      border-radius: 45px;
    }
}

</style>