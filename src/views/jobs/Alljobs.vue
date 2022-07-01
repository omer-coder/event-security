<template>
    <div class="allJobs">
        <div class="error" v-if="error">Could not fetch the Jobs</div>
        <div v-if="documents">
            <Listview :Jobs="documents" />
        </div>
    </div>
</template>

<script>

import getCollection from "@/composables/getCollection"
import Listview from '@/components/Listview.vue'

export default {
    components: {Listview},
    setup(){

        const {documents , error} = getCollection("Jobs")

        // console.log(documents)

        return {documents , error }
    }
}
</script>

<style>

</style>