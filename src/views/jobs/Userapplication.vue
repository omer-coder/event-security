<template>
    <div class="UserApplication">
        <div class="error" v-if="error">Could not fetch the Jobs Applied</div>
        <!-- <div>{{user.uid}}</div> -->
        <div v-if="jobsapplied">
            <Listview :Jobs="jobsapplied"  />
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import Listview from "@/components/Listview"
import getUser from '@/composables/getUser'
export default {
    components : {Listview},
    setup(){
        
        const {user} = getUser()
        
        const {documents : jobsapplied , error} = getCollection(
            'Jobs',
            ["applicantId" , "array-contains" , user.value.uid]
            )

        console.log(jobsapplied)
        
        return { jobsapplied , error , user}
    }
}
</script>

<style>

</style>