<template>
  <div class="formContainer">
    <form @submit.prevent="handleSubmit">
        <h2>Admin</h2>
        <!-- email -->
        <input type="email" placeholder="email" v-model="email" required />
        <!-- password -->
        <input type="password" placeholder="Password" v-model="password" required />
        
        <div v-if="error" class="error">{{error}}</div>
        
        <button v-if="!isPending" class="banner_btn">Login</button>
        <button v-if="isPending" class="banner_btn">Loading...</button>

    </form>
</div>
</template>

<script>

import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useLogin from '@/composables/useLogin'
export default {
    setup(){
        const email = ref('')
        const password = ref('')
        const router = useRouter();

        const {login , error , isPending} = useLogin()

        const handleSubmit = async () => {

            const res = await login(email.value , password.value)

            if(!error.value){
                console.log("admin logged in")
                router.push({name : 'AdminData'})
            }
        }

        return { email , password , handleSubmit , error , isPending}
        
    }
}
</script>

<style scoped>
input , textarea{
    margin : 20px auto;
}
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
</style>