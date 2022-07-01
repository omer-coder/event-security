<template>
<div class="formContainer">
    <form @submit.prevent="handleSubmit">
        <h2>Add new event</h2>
        <input type="text" placeholder="Job Title" v-model="jobtitle" required />
        <!-- start and end date and time-->
        <div>
            <input type="text" placeholder="Start date/time" v-model="start" required/>
            <input type="text" placeholder="End date/time" v-model="end" required/>
        </div>
        <!-- payment & contact number -->
        <div>
            <input type="number" placeholder="Payment" required v-model="payment"  />
            <input type="number" placeholder="Contact number" v-model="contact" required />
        </div>
        <!-- company and job location -->
        <div>
            <input type="text" placeholder="Company" v-model="company" required />
            <input type="text" placeholder="Job Location" v-model="joblocation" required />
        </div>
        <!-- desc -->
        <textarea placeholder="Job Description" v-model="description" required></textarea>
        
        <div v-if="error" class="error">{{error}}</div>
        
        <button v-if="!isPending" class="banner_btn">Add</button>
        <button v-if="isPending" class="banner_btn">Saving...</button>

    </form>
</div>
</template>

<script>

import {ref } from 'vue'
import useCollection from '@/composables/useCollection'
import {timeStamp} from '@/firebase/config'
import getUser from '../../composables/getUser'
import {useRouter} from 'vue-router'

export default {
    setup(){

        const jobtitle = ref('')
        const start = ref('')
        const end = ref('')
        const payment = ref('')
        const contact = ref('')
        const company = ref('')
        const joblocation = ref('')
        const description = ref('')
        
        const {addDoc , error , isPending} = useCollection('Jobs')
        const {user} = getUser()
        const router = useRouter()

        const handleSubmit = async () => {

            const res2 = await addDoc({
                Job_title : jobtitle.value,
                Job_start : start.value,
                Job_end : end.value,
                userID : user.value.uid,
                userName : user.value.displayName,
                Job_payment : payment.value,
                Job_contact : contact.value,
                Job_company : company.value,
                Job_loaction : joblocation.value,
                Job_description : description.value,
                Job_applications : [],
                createdAt : timeStamp()
            })

            if(!error.value){
                console.log('job added')
                router.push({name: 'Jobdetails' , params : {id : res2.id}})
            }
        }

        return { handleSubmit , addDoc , error , isPending , jobtitle , start , end , payment , contact , 
        company , joblocation , description  }

    }
}
</script>

<style>
.formContainer{
    display: flex;
    justify-content : center;
}
form{
    width: 100%;
}
form h2{
    text-align: center;
    margin-bottom: 50px;
}
form div{
    display: flex;
    width : 105%;
}
form div input{
    margin : 20px 20px 20px 0px; 
}

@media  screen and (max-width : 1025px) {
    .formContainer {
        margin : 30px auto;
    }
}

@media screen and (max-width : 450px){
    .formContainer {
        width: 75%;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 400px){
    .formContainer {
        width: 70%;
        margin : 0px auto;
        text-align:center;
    }
    form div input{
        margin : 20px 14px 20px 0px; 
    }
}

@media screen and (max-width : 375px){
    .formContainer {
        width: 65%;
        margin : 30px auto;
        text-align:center;
    }
     form div{
        display: block;
        width : 100%;
    }
}


</style>