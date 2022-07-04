<template>
  <div class='container'>
      <!-- if not signed up -->
      <div class="notSignup">
          
          <div>
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
          
      </div>
      <!-- if signed up -->
      <div class="logincontainer">
      <div class='form login'>
          <span class="title">Login</span>
          <form @submit.prevent="handleSubmit">
            <!-- email -->
            <div class="input-feild">
                <input  type="text" placeholder="Enter Your Email" required v-model="email" />
                <i class="uil uil-envelope icon"></i>
            </div>
            <!-- password -->
            <div class="input-feild">
                <input :type="type" placeholder="Enter Your Password" required v-model="password" />
                <i class="uil uil-lock icon"></i>
                <i class="uil uil-eye-slash showhidePw" @click="showhidePassword" ref="showEye"></i>
            </div>
            <!-- remember me  -->
            <div class="checkbox-text">
                <div class="checkbox-content">
                    <input  type="checkbox" id="logcheck">
                    <label for="logcheck" class="text">Remember me</label>
                </div>
                <a href="#" class="text">Forgot Password?</a>
            </div>
            <div v-if="error" class="error">{{error}}</div>
            <!-- button -->
            <div class="input-feild button">
                <button v-if="isPending">Loading...</button>
                <button  v-if="!isPending">log in</button>
                <!-- <input type="button" value="Login" v-if="!isPending" />
                <input type="button" value="Loading..!" v-if="isPending"/> -->
            </div>            

          </form>
      </div>
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

        const showEye = ref(null)

        const type = ref('password')

        const {login , error , isPending}  = useLogin()
            
        
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

            const res = await login(email.value, password.value)

            if(!error.value){
                router.push({name: "Alljobs"})
                console.log("user logged in")
            }
        }

        return {email , showEye , type , password , handleSubmit , showhidePassword , error , isPending}

    }
}
</script>

<style>

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
    align-items: center;
    /* padding-top : 80px; */
    height : 76vh;
    background: linear-gradient(to right , #eaeaea 75% , #fafafa 25%);
    /* background: linear-gradient(
        90deg, 
        #4070f4 0%, 
        #4070f4 43%, 
        #fafafa 43%, 
        #fafafa 100%
    ); */
    /* border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background-color: #4b71ff; */
    /* position : sticky;
    top : 0;
    left : 0; */
}

.title , .para{
    margin : 0px auto 20px;
    text-align : center;
}

.title h3 , .para p {
    color: rgba(0, 0, 0, 0.75);
}

.signup {
    width: 50%;
    display : block;
    margin : 0px auto;
}

.signup button{
    border : 2px solid #4070f4;
    background : #4070f4
}

.signup a{
    color : #fafafa;
}

.signup button:hover{
    background : #265DF2;
    border : 2px solid #265DF2;
    color : #fafafa;
}

.signup a:hover{
    color: #fafafa;
}

.notSignup{
    display : flex;
    align-items : center;
    justify-content : center;
    /* border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;  
    background-color: #4b71ff;
    padding : 0 20px;
    box-shadow : 0 5px 10px rgba(0,0,0,0.1);
    border-radius : 10px; */
}

/* login section */
.logincontainer{
    position: relative;
    max-width : 430px;
    width : 100%;
    background : #fff;
    border-radius : 10px;
    box-shadow : 0 5px 10px rgba(0,0,0,0.1);
    overflow : hidden;
    margin : 0 20px;
    height : auto;
}
.logincontainer .form{
    /* width : 50%; */
    padding : 30px;
    background-color : #fff;
}

.logincontainer .form .title{
    position : relative;
    font-size : 26px;
    font-weight : 600;
}

.form .title::before{
    content : "";
    position : absolute;
    left : 0;
    bottom : 0;
    height : 3px;
    width : 30px;
    background-color : #4070f4;
    border-radius : 25px;
}

.form .input-feild{
    position : relative;
    height : 50px;
    width : 100%;
    margin-top : 30px;
}

.input-feild input , .input-feild button , .input-feild select{
    position : absolute;
    width : 100%;
    height : 100%;
    padding : 0 35px;
    border : none;
    outline : none;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    border-top : 2px solid transparent;
    transition : all 0.2s ease;
}

.input-feild input:is(:focus , :valid),
.input-feild select:is(:focus , :valid){
    border-bottom-color : #4070f4
}

.input-feild i{
    position : absolute;
    top : 50%;
    transform : translateY(-50%);
    color : #999;
    font-size : 23px;
    transition : all 0.2s ease;
}

.input-feild input:is(:focus , :valid) ~ i,
.input-feild select:is(:focus , :valid) ~ i{
    color : #4070f4
}

.input-feild i.icon{
    left : 0;
}

.input-feild i.showhidePw{
    right : 0;
    cursor : pointer;
    padding : 10px;
}

.form .checkbox-text{
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-top : 20px;
}

.checkbox-text .checkbox-content{
    display : flex;
    align-items : center;
}

.checkbox-content #logcheck{
    margin : 0 8px 2px 4px;
    accent-color : #4070f4;
}

.form .text{
    color : #333;
    font-size : 14px;
}

.form a.text{
    color : #4070f4;
    text-decoration: none;
}

.form a:hover{
    text-decoration : underline;
}

.form .button{
    margin-top : 35px;
}

.form .button Button{
    border : none ;
    color : #fff;
    font-size : 17px;
    font-weight : 500;
    letter-spacing : 1px;
    border-radius : 6px;
    background-color : #4070f4;
    cursor : pointer;
    transition : all 0.3s ease;
}
.button Button:hover{
    background-color : #265DF2
}

@media screen and (max-width : 875px){

    .container{
        display : block;
        height : auto;
        padding: 1px;
        background: linear-gradient(to right , #eaeaea 80% , #fafafa 20%);
    }
    .notSignup{
        margin : 65px auto;
    }

    .logincontainer{
        margin : 30px auto;
    }
  
}

@media screen and (max-width : 550px){

    .notSignup .para{
        font-size : 15px;
    }
   
}

@media screen and (max-width : 500px){
    .logincontainer{
        width : 85%;
    }
    .container{
        background: linear-gradient(to bottom , #eaeaea 80% , #fafafa 20%);
    }
    .form a.text{
        font-size : 12px;
    }
}

@media screen and (max-width : 425px){
    .notSignup .para{
        font-size : 13px;
    }
  
}

@media screen and (max-width : 350px){
    .notSignup .para{
        font-size : 12px;
    }
    .form a.text{
        font-size : 10px;
    }
    .form .checkbox-text{
        flex-direction : column;
    }
    .checkbox-text .checkbox-content{
        margin : 10px 0px;
    }
    .form a.text{
        font-size : 13px;
    }
}

@media screen and (max-width : 325px){

  
    .notSignup .para{
        font-size : 10px;
    }
}

</style>