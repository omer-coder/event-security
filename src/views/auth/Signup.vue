<template>
  <div class='container'>
      <!-- if not signed up -->
      <div class="AlreadySignup">
          
          <div>
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
                <router-link :to="{name : 'Login'}"><button class="banner_btn">Log In</button></router-link>
            </div>
          </div>
          
      </div>
      
      <!-- if signed up -->
      <div class="logincontainer">
      <div class='form login'>
          <span class="title">Signup</span>
          <form @submit.prevent="handleSubmit">
          <!-- name -->
            <div class="input-feild">
                <input  type="text" placeholder="Enter Your Name" required v-model="displayName" />
                <i class="uil uil-user icon"></i>
            </div>
            <!-- email -->
            <div class="input-feild">
                <input  type="text" placeholder="Enter Your Email" required v-model="email" />
                <i class="uil uil-envelope icon"></i>
            </div>
            <!-- password -->
            <div class="input-feild">
                <input  :type="type" placeholder="Enter Your Password" required v-model="password" />
                <i class="uil uil-lock icon"></i>
                <i class="uil uil-eye-slash showhidePw" @click="showhidePassword" ref="showEye"></i>
            </div>
            <!-- status -->
            <div class="input-feild">
                <select v-model="status" required>
                  <option value="none" selected disabled hidden>Select An Option</option>
                  <option value="company">Company</option>
                  <option value="individual">Individual</option>
                </select>
                <i class="uil uil-status icon"></i>
            </div>
            <!-- remember me  -->
            <div class="checkbox-text">
                <div class="checkbox-content">
                    <input  type="checkbox" id="logcheck" required>
                    <label for="logcheck" class="text">I accept all terms and conditions</label>
                </div>
            </div>
            <div v-if="error" class="error">{{error}}</div>
            <!-- button -->
            <div class="input-feild button">
                <button v-if="isPending">Loading...</button>
                <button  v-if="!isPending">signup</button>
                <!-- <input type="button" value="Login" v-if="!isPending" />
                <input type="button" value="Loading..!" v-if="isPending"/> -->
            </div>            

          </form>
      </div>
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

        const showEye = ref(null)

        const type = ref('password')

        const showhidePassword = () => {
            console.log('clicked')
            if(type.value === 'password'){
                showEye.value.classList.replace('uil-eye-slash' , 'uil-eye')
                type.value = 'text'
            }else{
                showEye.value.classList.replace('uil-eye' , 'uil-eye-slash')
                type.value = 'password'
            }   
        }

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

        return {displayName , email , password , status , terms , handleSubmit , error , isPending , user , showhidePassword , type , showEye}
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
    border : 2px solid #4070f4;
    background : #4070f4;
    color : #fafafa;
}


.CenteredLogin button:hover{
    background : #265DF2;
    border : 2px solid #265DF2;
    color : #fafafa;
}

form h3{
    margin-bottom: 30px;
}

.AlreadySignup{
    display : flex;
    align-items : center;
    justify-content : center;
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