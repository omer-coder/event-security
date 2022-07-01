<template>
  <div class='container'>
      <!-- if not signed up -->
      <div class="AlreadySignup">
          
          <div class="title">
              <h3>Already Signed Up !?</h3>
          </div>
          
          <div class="para">
              <p>All user on over website will know ... Some Content <br/>
                All user on over website will know ... Some Content <br/>
                All user on over website will know ... Some Content  </p>
          </div>

          <!-- button -->
          <div class='CenteredLogin'>
              <button class="banner_btn"><router-link :to="{name : 'Login'}">Log In</router-link></button>
          </div>
          
      </div>
      <!-- if signed up -->
      <div class='signupSection'>
          
          <form @submit.prevent="handleSubmit">
              <h3>Sign up for an account</h3>
              <p>let's get you all set up so you can start looking for event security jobs </p>
              <input type="text" placeholder="Display name" required v-model="displayName" />
              <input type="email" placeholder="Email" required v-model="email" />
              <input type="password" placeholder="Password" required v-model="password" />
              <select v-model="status" required>
                  <option value="none" selected disabled hidden>Select An Option</option>
                  <option value="company">Company</option>
                  <option value="individual">Individual</option>
              </select>
              <div class="terms">
                  <input type="checkbox" required v-model="terms" />
                  <label>Accept terms and conditions</label>
              </div>
              <div v-if="error" class="error">{{error}}</div>
              <button class="banner_btn" v-if="isPending">Loading...</button>
              <button class="banner_btn" v-if="!isPending">Sign up</button>
          </form>
      </div>

  </div>
</template>

<script>

import useSignup from '@/composables/useSignup'
import { ref } from "vue"
import { useRouter } from 'vue-router'
import useCollection from '@/composables/useCollection'
import {timeStamp} from '@/firebase/config'
import getUser from '@/composables/getUser'

export default {
    setup(){
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        const status = ref('')
        const terms = ref(false)
        const router = useRouter()

        const {user} = getUser()
        const {error , isPending , signup}  = useSignup()
        const {addDoc} = useCollection("Users")

        const handleSubmit = async () => {

            const res = await signup(displayName.value , email.value, password.value , status.value)

            const res2 = await addDoc({
                userID : user.value.uid,
                displayName : displayName.value,
                email : email.value,
                password : password.value,
                status : status.value,
                createdAt : timeStamp()
            })
            
            if(!error.value){
                router.push({name: "Alljobs"})
                console.log("user Signed up & user's data is being added to the data base") 
            }

        }

        return {displayName , email , password , status , terms , handleSubmit , error , isPending , user}
    }

}
</script>

<style>
.CenteredLogin {
    width: 50%;
    display : block;
    margin : 0px auto;
}

.CenteredLogin button {
    border : 2px solid #4b71ff;
    color : #4b71ff;
}

.CenteredLogin a{
    color : #4b71ff;
}

.CenteredLogin button:hover{
    background : #4b71ff;
    border : 2px solid #4b71ff;
    color : white;
}

.CenteredLogin a:hover{
    color : white;
}
form h3{
    margin-bottom: 30px;
}

.AlreadySignup{
    margin-top: 90px;
}

@media screen and (max-width : 875px){
    .AlreadySignup{
        margin : 65px auto;
    }
    .signupSection {
        width: 40%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 550px){
    .signupSection {
        width: 50%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }

    .signupSection p{
        font-size : 15px;
    }
    
    .AlreadySignup .para{
        font-size : 15px;
    }
}

@media screen and (max-width : 500px){

    .signupSection p{
        font-size : 13px;
    }
    
}

@media screen and (max-width : 475px){
    .terms label{
        font-size: 13px;
    }
}

@media screen and (max-width : 425px){
    .AlreadySignup .para{
        font-size : 13px;
    }
    .signupSection p{
        font-size : 13px;
    }
    .signupSection h3{
        font-size : 18px;
    }
    .signupSection {
        width: 55%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 350px){
    .AlreadySignup .para{
        font-size : 12px;
    }
    .signupSection p{
        font-size : 12px;
    }
    .signupSection {
        width: 60%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 325px){

    .signupSection {
        width: 65%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
    .signupSection h3{
        font-size : 16px;
    }
    .AlreadySignup .para{
        font-size : 10px;
    }
    .terms label{
        font-size: 12px;
    }
}

</style>