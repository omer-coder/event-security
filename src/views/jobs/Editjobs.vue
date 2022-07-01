<template>
  <div class="formContainer">
    <form @submit.prevent="handleEdit">
        <h2>Edit event</h2>
        <input type="text" placeholder="Job Title" v-model="jobtitle" />
        <!-- start and end date and time-->
        <div>
            <input type="text" placeholder="Start date/time" v-model="start" />
            <input type="text" placeholder="End date/time" v-model="end" />
        </div>
        <!-- payment & contact number -->
        <div>
            <input type="number" placeholder="Payment"  v-model="payment"  />
            <input type="number" placeholder="Contact number" v-model="contact"  />
        </div>
        <!-- company and job location -->
        <div>
            <input type="text" placeholder="Company" v-model="company"  />
            <input type="text" placeholder="Job Location" v-model="joblocation"  />
        </div>
        <!-- desc -->
        <textarea placeholder="Job Description" v-model="description" ></textarea>
        
        <div v-if="error" class="error">{{error}}</div>
        
        <button v-if="!isPending" class="banner_btn">Edit</button>
        <button v-if="isPending" class="banner_btn">Updating...</button>

    </form>
</div>
</template>

<script>

import {ref} from "vue"

import useDocument from '@/composables/useDocument'
import Spinner from '@/components/Spinner'
// import getDocument from '@/composables/getDocument'
import {timeStamp} from '@/firebase/config'
import {useRouter} from 'vue-router'
import {projectFirestore} from "@/firebase/config"

export default {
  props : ["id"],
  components : {Spinner},
  setup(props){

    const jobtitle = ref('')
    const start = ref('')
    const end = ref('')
    const payment = ref('')
    const contact = ref('')
    const company = ref('')
    const joblocation = ref('')
    const description = ref('')

    const router = useRouter()

    const { isPending , error , updateDoc } = useDocument('Jobs')

    const job = ref(null)

    let documentRef = projectFirestore.collection("Jobs").doc(props.id)

    documentRef.onSnapshot(doc => {

      if(doc.data()){

          job.value = {...doc.data() , id : doc.id}

          // pre-populating input feilds
          jobtitle.value = job.value.Job_title
          start.value = job.value.Job_start
          end.value = job.value.Job_end
          payment.value = job.value.Job_payment
          contact.value = job.value.Job_contact
          company.value = job.value.Job_company
          joblocation.value = job.value.Job_loaction
          description.value = job.value.Job_description

      } 
    
    }, err => {
        console.log(err.message)
    })

    const handleEdit = async () => {
      
      const res = await updateDoc(props.id , {

          Job_title : jobtitle.value,
          Job_start : start.value,
          Job_end : end.value,
          Job_payment : payment.value,
          Job_contact : contact.value,
          Job_company : company.value,
          Job_loaction : joblocation.value,
          Job_description : description.value,
          createdAt : timeStamp()
          
      })

      if(!error.value){
        console.log("job updated")
        
        router.push({name : "Alljobs"})
      }
       
    }

    return {isPending , error , jobtitle , start , end , payment , 
            contact , company , joblocation, description , handleEdit }
  }
}

</script>

<style>

</style>