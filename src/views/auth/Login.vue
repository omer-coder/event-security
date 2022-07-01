<template>
  <div class='container'>
      <!-- if not signed up -->
      <div class="notSignup">
          
          <div class="title">
              <h3>Not Signed Up Yet !?</h3>
          </div>
          
          <div class="para">
              <p>All user on over website will know ... Some Content <br/>
                All user on over website will know ... Some Content <br/>
                All user on over website will know ... Some Content  </p>
          </div>

          <!-- button -->
          <div class='signup'>
              <button class="banner_btn"><router-link :to="{name : 'Signup'}">Sign Up</router-link></button>
          </div>
          
      </div>
      <!-- if signed up -->
      <div class='login'>
          <form @submit.prevent="handleSubmit">
              <h3>Log in to an account</h3>
              <p>let's log in so you can start looking for event security jobs </p>
              <input type="email" placeholder="Email" required v-model="email" />
              <input type="password" placeholder="Password" required v-model="password" />
              <!-- <div class="terms">
                  <input type="checkbox" required v-model="terms" />
                  <label>Accept terms and conditions</label>
              </div> -->
              <div v-if="error" class="error">{{error}}</div>
              <button class="banner_btn" v-if="isPending" disabled>Loading...</button>
              <button class="banner_btn" v-if="!isPending">Log In</button>
          </form>
      </div>

  </div>
</template>

<script>

import {ref } from 'vue'
import useLogin from '@/composables/useLogin'
import {useRouter} from 'vue-router'
export default {
    setup(){

        const email = ref('')
        const password = ref('')
        // const terms = ref(false)
        const router = useRouter()

        const {login , error , isPending}  = useLogin()

        const handleSubmit = async () => {

            const res = await login(email.value, password.value)

            if(!error.value){
                router.push({name: "Alljobs"})
                console.log("user logged in")
            }
        }

        return {email , password , handleSubmit , error , isPending}

    }
}
</script>

<style >

/* button */
.banner_btn{
	/* equal to 16px from top, bottom and 16px from right , left */
	padding: 10px 12px;
	text-transform: capitalize;
	/* equal to 3.2px */
	letter-spacing: 0.2rem;
	width: 100%;
	background: transparent;
	border: 2px solid  #4b71ff;
	/* equal to 8px */
	border-radius: 0.50rem;
	/* equal to 16px */
	color:  #4b71ff;
	/* equal to 16px*/
	font-size: 1rem;
	transition: all 0.3s linear;
	cursor: pointer;
}

/* applying hover effect on cart footer button */
.banner_btn:hover{
	background: #4b71ff;
	color: white;
}

.container{
    display : flex;
    justify-content : space-around;
    align-items: middle;
    padding-top : 80px;
    height : 76vh;
    /* background: linear-gradient(rgba(75, 113, 255, 0.01),rgba(75, 113, 255, 0.5)); */
    background: linear-gradient(
    100deg, 
    #4b71ff 0%, 
    #4b71ff 43%, 
    #ffffff 43%, 
    #ffffff 100%
  );
}

.title , .para{
    margin : 0px auto 20px;
    text-align : center;
}

.title h3 , .para p {
    color: black;
}

.signup {
    width: 50%;
    display : block;
    margin : 0px auto;
}

.signup button{
    border : 2px solid #4b71ff;
    color : #4b71ff;
}

.signup a{
    color : #4b71ff;
}

.signup button:hover{
    background : #4b71ff;
    border : 2px solid #4b71ff;
    color : #4b71ff;
}

.signup a:hover{
    color: white
}

.notSignup{
    margin-top : 90px;
}

@media screen and (max-width : 875px){

    .container{
        display : block;
        height : 100vh;
        padding: 0;
    }
    .notSignup{
        margin : 65px auto;
    }
    .login {
        width: 40%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
    
   
}

@media screen and (max-width : 550px){
    
    .login {
        width: 50%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }

    .login p{
        font-size : 15px;
    }
    
    .notSignup .para{
        font-size : 15px;
    }
   
}

@media screen and (max-width : 425px){
    .notSignup .para{
        font-size : 13px;
    }
    .login p{
        font-size : 13px;
    }
    .login {
        width: 55%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 350px){
    .notSignup .para{
        font-size : 12px;
    }
    .login p{
        font-size : 12px;
    }
    .login {
        width: 60%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
}

@media screen and (max-width : 325px){

    .login {
        width: 65%;
        display : block;
        margin : 0px auto;
        text-align:center;
    }
    .notSignup .para{
        font-size : 10px;
    }
}

</style>