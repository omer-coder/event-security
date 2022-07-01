<template>
  <header>
      <nav>
          
          <div class="branding">

            <img src="@/assets/logo.png" />
          
            <h1><router-link :to="{name : 'Home'}" >Security Company</router-link></h1>
            
          </div>
        

        <!-- <div> -->
            <ul class="navigation" v-if="user" v-show="!mobile">
                <li><router-link class="link" :to="{name : 'Alljobs'}">All Jobs</router-link></li>
                <li><router-link class="link" v-if="userapplication" :to="{name : 'Userapplication'}">My applications</router-link></li>
                <li><router-link class="link" v-if="company" :to="{name : 'Applicants'}" >Applicants</router-link></li>
                <li><router-link class="link" v-if="company" :to="{name : 'Addjobs'}">Add Vacancy</router-link></li>
                <li><router-link class="link" v-if="company" :to="{name : 'Companyjob'}" >My Jobs</router-link></li>  
                <li><router-link class="link" v-if="admin" :to="{name : 'AdminLogin'}">Admin</router-link></li>
            </ul>
            <ul class="navigation" v-if="!user" v-show="!mobile">
                <li><router-link class="link btn" :to="{name : 'Login'}">Log In</router-link></li>
                <li><router-link class="link btn" :to="{name : 'Signup'}">Sign Up</router-link></li>
            </ul>
            
            <ul class="navigation" v-if="user" v-show="!mobile">
                <li><button @click="handleClick" v-if="user" v-show="!mobile">Log Out</button></li>
            </ul>
        <!-- </div> -->

        <div class="icon">
            <label for="checkbox" class="humburger"  v-show="mobile" :class="{'icon-active' : mobileNav}">
                <input type="checkbox" id="checkbox" @click="toggleMobileNav"/>
                <span class="line line--top"></span>
                <span class="line line--middle"></span>
                <span class="line line--bottom"></span>
            </label>
        </div> 

        <transition name="mobile-nav">
            <div class="dropdown-nav" v-show="mobileNav">
                <ul  v-if="user">
                    <li><router-link @click="toggleMobileNav" class="link" :to="{name : 'Alljobs'}">All Jobs</router-link></li>
                    <li><router-link @click="toggleMobileNav" class="link" v-if="userapplication" :to="{name : 'Userapplication'}">My applications</router-link></li>
                    <li><router-link @click="toggleMobileNav" class="link" v-if="company" :to="{name : 'Applicants'}" >Applicants</router-link></li>
                    <li><router-link @click="toggleMobileNav" class="link" v-if="company" :to="{name : 'Addjobs'}">Add Vacancy</router-link></li>
                    <li><router-link @click="toggleMobileNav" class="link" v-if="company" :to="{name : 'Companyjob'}" >My Jobs</router-link></li>  
                    <li><router-link @click="toggleMobileNav" class="link" v-if="admin" :to="{name : 'AdminLogin'}">Admin</router-link></li>
                </ul>
                <ul  v-if="!user">
                    <li><router-link @click="toggleMobileNav" class="link" :to="{name : 'Login'}">Log In</router-link></li>
                    <li><router-link @click="toggleMobileNav" class="link" :to="{name : 'Signup'}">Sign Up</router-link></li>
                </ul>
                <button @click="mobilehandleClick" v-if="user" v-show="mobileNav" >Log Out</button>
            </div>
        </transition>

      </nav>
      
  </header>

  

</template>

<script>
import getUser from '@/composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import {ref , onMounted  } from 'vue'
import { projectauth } from '../firebase/config'

export default {
    setup(){

        const { logout } = useLogout()
        const router  = useRouter()
        const {user} = getUser()
        const admin = ref(false)
        const company = ref(false)
        const userapplication = ref(false)
        
        const mobile = ref(false)
        const mobileNav = ref(false)
        const windowWidth = ref(null)

        const toggleMobileNav = () => {
            mobileNav.value = !mobileNav.value
        }

        const updateScroll = () => {
            const scrollPosition = window.scrollY
            if(scrollPosition > 0){
                mobileNav.value = false
                return;
            }
        }

        const checkScreen = () => {
            windowWidth.value = window.innerWidth
            if(windowWidth.value <= 750){
                mobile.value = true;
                return;
            }
            mobile.value = false
            mobileNav.value = false
            return;
        }
        
        
        onMounted (() => {
            window.addEventListener("resize", checkScreen)
            window.addEventListener("scroll", updateScroll)
            checkScreen();
        })
        // let app = false

        projectauth.onAuthStateChanged(() => {

            setTimeout(() => {

                if(user.value){
                
                    // app = true
                    // admin
                    if(user.value.email == 'omeribrahim398@gmail.com'){
                        admin.value = true
                        // console.log(admin.value)
                    }else{
                        admin.value = false
                    }

                    // company
                    if(user.value.photoURL == 'company'){
                        company.value = true
                        // console.log(company.value)
                    }else{
                        company.value = false
                    }
                    
                    // user
                    if(user.value.photoURL == "individual"){
                        userapplication.value = true
                    }else{
                        userapplication.value = false
                    }

                }

            }, 1100)    

        })
        
        // for logging user out
        const handleClick = async () => {
            await logout();
            console.log("user Logged out")
            router.push({name : "Home"})
        }

        // for logging user out (mobile) 
        const mobilehandleClick = async () => {
            await logout();
            console.log("user Logged out")
            router.push({name : "Home"})
            mobileNav.value = !mobileNav.value
        }

        return { handleClick , user , admin , company , userapplication  , mobile , mobileNav , 
        windowWidth , toggleMobileNav , checkScreen , updateScroll , mobilehandleClick}

    }
}

</script>

<style scoped>
header{
    z-index: 99;
    width : 100%;
    transition : 0.5s ease all;
    margin : 0 auto 100px;
    /* height : calc(100% + 100px); */
    /* background : #eaeaea; */
}

nav{
    display: flex;
    flex-direction: row;
    padding : 12px 0;
    position : relative;
    transition : 0.5s ease all;
    width : 90%;
    margin : 0 auto;
}

.navigation{
    display : flex;
    justify-content : flex-end;
    flex : 1;
    align-items : center;
}

ul .link{
    font-weight : 500;
    color : black;
    /* list-style : none;
    text-decoration: none; */
}

li{
    text-transform: capitalize;
    padding : 0px;
    margin-left : 20px;
    list-style : none;
    text-decoration: none;
}

.dropdown-nav ul li{
    padding : 16px;
}

.link{
    font-size : 14px;
    padding-bottom : 4px;
    transition : 0.5s ease all;
    border-bottom: 2px solid transparent;
}

.link:hover{
    color:#4b71ff;
    border-color: #4b71ff;
}

.btn:hover{
    color:white;
    border-color: #4b71ff;
}

.branding{
    display :  flex;
    align-items: center;
    
}

.branding img{
    height: 90px;
    transition : 0.5s ease all;
    margin-right: 20px;
}

.icon{
    display: flex;
    position : absolute;
    top : 0;
    right: 0px;
    height : 100%;
    align-items : center;
}

.icon label{
    cursor :pointer;
    font-size : 24px;
    transition: 0.8s ease all;
}

.dropdown-nav{
    display : flex;
    flex-direction : column;
    position : fixed;
    width : 100%;
    max-width : 250px;
    height : 100%;
    background : #fff;
    top : 0;
    left : 0;
    box-shadow: 10px 2px 15px 0px rgba(130,130,130,0.59);
    -webkit-box-shadow: 10px 2px 15px 0px rgba(130,130,130,0.59);
    -moz-box-shadow: 10px 2px 15px 0px rgba(130,130,130,0.59);
    z-index : 10;
}

.dropdown-nav li , button{
    margin-left : 0;
}

.dropdown-nav button{
    width : 90%;
    margin-left : 10px;
}

.dropdown-nav .link{
    color : black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition : 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform : translateX(-250px);
}

.mobile-nav-enter-to{
    transform: translateX(0);
}

/* .icon-active{
    transform : rotate(180deg);
} */

#checkbox{
    display : none;
}
.humburger{
    position : relative;
    padding : 20px;
    display : flex;
    /* z-index : 110; */
    align-items : center;
    justify-content: center;
    cursor : pointer;
}
.line{
    position : absolute;
    width: 21px;
    height: 2px;
    background-color : #4b71ff;
    border-radius: 3px;
    transition: transform 0.25s , opacity 0.35s;
}
.line--top{
    transform: translateY(-7px);
}
.line--bottom{
    transform: translateY(7px);
}
#checkbox:checked~ .line--top{
    transform : rotate(45deg);
}
#checkbox:checked~ .line--middle{
    transform : rotate(16deg);
    opacity : 0;
}
#checkbox:checked~ .line--bottom{
    transform : rotate(-45deg);
}

/* @media screen and (min-width: 1140px){
    nav{
        max-width : 1140px;
    }
} */


@media screen and (max-width : 600px){
    .dropdown-nav{
        max-width : 200px;
    }
    .dropdown-nav button{
        width : 85%;
    }
}

@media screen and (max-width : 500px){
    .branding img{
        height: 50px;   
    }

    .branding h1{
        font-size : 20px;
    }
}

@media screen and (max-width: 485px){
    header{
        margin : 0 auto 60px;
    }
}

@media screen and (max-width : 450px){
    .dropdown-nav{
        max-width : 150px;
    }
    .dropdown-nav button{
        width : 80%;
    }
} 

@media screen and (max-width : 400px){
    nav{
        width : 95%;
    }
}

@media screen and (max-width : 350px){
    .humburger{
        padding : 0px;
    }
    .branding h1{
        font-size : 18px;
    }
    .icon{
        right : 16px;
    }
}

@media screen and (max-width : 300px){
    
    .branding h1{
        font-size : 15px;
    }
    .dropdown-nav{
        max-width : 140px;
    }
    .dropdown-nav button{
        width : 75%;
    }
    .dropdown-nav li a{
        font-size : 12px;
    }
    header{
        margin : 0 auto 40px;
    }
}



</style>