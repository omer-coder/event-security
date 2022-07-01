<template>
  <div class="companyjob">
        <div class="error" v-if="error">Could not fetch the Jobs added</div>
        <!-- <div>{{user.uid}}</div> -->
        <div v-if="companyJobs">
            <Listview :Jobs="companyJobs"/>
        </div>
        <div v-else class="NoJobs">
            <h2>No Jobs being added</h2>
        </div>
    </div>
</template>

<script>

import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'
import Listview from '@/components/Listview'

export default {
    components : {Listview},
    setup(){
        
        const {user} = getUser() 

        // console.log(user.value.uid)
        
        const { documents : companyJobs , error} = getCollection(
            'Jobs',
            ['userID' , '==' , user.value.uid]
            )

        return { companyJobs , error }
    }
}
</script>

<style>
.NoJobs{
    display : flex;
    justify-content: center;
    align-items : center;
}
.NoJobs h2{
    text-transform  : capitalize;
    color : #4b71ff
}
</style>