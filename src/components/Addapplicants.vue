<template>
    <button @click="handleApplications()" :disabled = "buttonvalue == 'Applied'">{{buttonvalue}}</button>
</template>

<script>

import getUser from '@/composables/getUser'
import useDocument from '../composables/useDocument'
import firebase from 'firebase/app'

import {ref , onMounted} from 'vue'

export default {
    props : ['Job'],
    setup(props){

        const {user} = getUser();

        const {updateDoc  , error} = useDocument('Jobs')

        const disableButton = ref(false)

        const buttonvalue = ref('Apply')


        const handleApplications = async () => {
                
                    if(!disableButton.value && props.Job.Job_applications ){

                    disableButton.value = true

                    const addApplicants = {
                        name: user.value.displayName,
                        email : user.value.email,
                        phoneNo : "0559288200"
                        // applicantId  : user.value.uid
                    }

                    const res  = await updateDoc(props.Job.id , {
                        Job_applications : [...props.Job.Job_applications , addApplicants ],
                        applicantId : firebase.firestore.FieldValue.arrayUnion(user.value.uid)
                    })

                    if(!error.value){
                        console.log("applied for job")
                        buttonvalue.value = "Applied"
                        // router.push({name : 'Alljobs'})
                    }
                }
                
                // if(props.Job.Job_applications.length){
                //     for(let i = 0 ; i <= props.Job.Job_applications.length  ; i++) {
                //         if(user.value.uid == !props.Job.Job_applications[i].applicantId ){
                //             button.value = "Applied"
                //         }
                //     }
                // }
                

        }

        onMounted(()=> {
            if(props.Job.applicantId){
                for(let i = 0 ; i < props.Job.applicantId.length ; i++){
                    if(user.value.uid == props.Job.applicantId[i]){
                        buttonvalue.value = "Applied"
                    }   
                }
            }else{
                buttonvalue.value = "Apply"
            }
            
        })

        return {handleApplications ,  user , disableButton , buttonvalue }

    }
}
</script>

<style>


</style>