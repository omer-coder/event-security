<template>
    <div>
        <div class="error" v-if="error">Could not fetch the Jobs added</div>
        <!-- <div>{{user.uid}}</div> -->
        <div v-if="Jobs">

            <div class="Search">
                <input type="search"  placeholder="Search for Applicants" v-model="search" /> 
            </div>

                <div v-if="Jobs">
                    <div v-for="job in filteredApplication" :key="job.id">
                            <div v-for="applicant in job.Job_applications" :key="applicant.id">
                                <div class="single">
                                    <div class="info">
                                        <h2>Name : {{applicant.name}}</h2>
                                        <p>Phone Number : {{applicant.phoneNo}}</p>
                                        <p>applied for : {{job.Job_title}}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div v-else class="centeredSpinner"><Spinner/></div>
        </div>

        <div v-else class="NoApplicants">
            <h2>No applicants have applied</h2>
        </div>

    </div>
</template>

<script>

import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'
import Spinner from '@/components/Spinner'
import {ref , computed} from 'vue'

export default {
    components : {Spinner},
    setup(){
        
        const {user} = getUser() 

        const search = ref("")

        const filteredApplication = computed(() => {
            return Jobs.value.filter((job) => job.Job_title.includes(search.value))
        })
        

        const { documents : Jobs , error} = getCollection(
            'Jobs',
            ['userID' , '==' , user.value.uid]
            )

        return { Jobs , error , search , filteredApplication }
    }
}
</script>

<style scoped>
.NoApplicants{
    display : flex;
    justify-content: center;
    align-items : center;
}
.NoApplicants h2{
    text-transform  : capitalize;
    color : #4b71ff
}
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