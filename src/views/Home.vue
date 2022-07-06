<template>
  <div class="home">

    <!-- intro -->
    <div class ="background">

      <div class="row">
        <!-- content -->
        <div class="col_2">
            <h1>We provide best event jobs</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum 
            </p>
            <button class="homebtn"><router-link :to="{name : 'Alljobs'}">View Jobs</router-link></button>
        </div>
        <!-- image -->
        <div class="col_2">
          <div><img src="@/assets/picture2.jpeg"></div>
        </div>

      </div>

    </div>
    <!-- end of intro -->

    <!-- about section -->
    <div class="background2">
      
      <div class="backgroundeffect">
        
        <div class="row">
          
          <!-- image -->
          <div class="col_2 ">
            
            <div>
              <img src="@/assets/pi4.jpeg">
            </div>

          </div>
        
        <!-- about -->
          <div class="col_2">
            
            <h2>About Us</h2>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum </p>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem</p>
            <button class="homebtn">More about company</button>
          
          </div>

        </div>

      </div>

    </div>
    <!-- end of about section -->

    <!-- our services -->
    <div class="small_container">
      <!-- title with after effect -->
      <h2 class="title">Our services</h2>

      <p class="para">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem</p>

      <div class="row">
        <!-- our service 1 -->
        <div class="col_2">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">
              
              <p class="para">logo</p>
              <h3>title</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>

        </div>
        <!-- our sevice 2 -->
        <div class="col_2">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">

              <p class="para">logo</p>
              <h3>title</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>
        
        <!-- our service 3 -->
        <div class="col_2">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">
              
              <p class="para">logo</p>
              <h3>title</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>
        
        <!-- our service 4 -->
        <div class="col_2">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">
              
              <p class="para">logo</p>
              <h3>title</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>

      </div>
      
    </div>
    <!-- end of our services -->

    <!-- how it works -->
    <div class="small_container">
      <!-- title with effect -->
      <h2 class="title">How it works</h2>
      
      <p class="para">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem</p>

      <div class="row2">
        <!-- activity  -->
        <div class="col_2">
          
          <div>
            <!-- sign up -->
            <div class="icon"><span class="material-icons" @click="showapply = false; showcreatejob = false; showsignup  = true">login</span></div>
            <h3>create an account</h3>
            <!-- end of sign up -->

            <!-- apply -->
            <div class="icon"><span class="material-icons" @click="showapply = true; showcreatejob = false; showsignup  = false">create</span></div>
            <h3>Apply</h3>
            <!-- end of apply -->

            <!-- add jobs -->
            <div class="icon"><span class="material-icons" @click="showcreatejob = true; showapply = false; showsignup  = false ">add</span></div>
            <h3>add vacancy</h3>
            <!-- end of add jobs -->

          </div>
        
        </div>

        <!-- activity's information -->
        <div class="col_2">
          <!-- title 2 for text align -->

          <!-- apply -->
          <div v-if="showapply">
            
            <h3 class="title2">how to Apply</h3>
            
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum </p>

            <button class="homebtn"><router-link :to="{name: 'Alljobs'}">Apply</router-link></button>
          
          </div>

          <!-- add vacancy -->
          <div v-else-if="showcreatejob">
            
            <h3 class="title2">how to Create a job</h3>
            
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum </p>

            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem</p>
            
            <button class="homebtn"><router-link :to="{name: 'Addjobs'}">Create</router-link></button>
          
          </div>

          <!-- create an account -->
          <div v-else-if="showsignup">
            
            <h3 class="title2">how to create an account</h3>
            
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum </p>

            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsumlorem</p>
            
            <button class="homebtn"><router-link :to="{name: 'Signup'}">Sign Up</router-link></button>
          
          </div>
        
        </div>
        
      </div>
      
    </div>
    <!-- end of how it works -->

    <!-- News and updates -->
    <!-- small container with different background color  -->
    <div class="small_container2">

      <div class="backgroundColor1">
        <!-- class updates for styling purpose -->
        <h3 class="updates">Updates</h3>

        <h1>News & <span style="color:red">Events</span></h1>
        
        <div class="row">

          <!-- updates and event 1 -->
          <!-- <div class="col_3" v-for="New in News" :key="New.id">
          
            <div ref="darkenUpdate" class="update_item_wrapper"  @mouseover="handleEntry" @mouseleave="handleExit">
              
              <img :src="New.coverUrl" class="update_image_background" >

              <div class="text_wrapper">
                <div class="subtitle">{{New.News_title}}</div>
              </div>

            </div>

          </div> -->

          <!-- updates and event 2 -->
          <div class="col_3" v-for="New in News" :key="New.id">

            <router-link :to="{name : 'Newsdetail' , params : {NewsId : New.id}}">
              <div class="card">
                <img :src="New.coverUrl">
                <div class="details">
                  <h4>{{New.News_title}}</h4>
                </div>
              </div>
            </router-link>
        
          </div>
          
          <!-- updates and event 3 -->
          <div class="col_3" v-for="featured in featureds" :key="featured.id">
              <router-link :to="{name : 'Jobdetails' , params : {id : featured.id}}">
                <div class="card">
                  <img src="@/assets/pi4.jpeg">
                  <div class="details">
                    <h4>{{featured.Job_title}}</h4>
                    <h4>{{featured.Job_company}}</h4>
                    <h4>{{featured.Job_contact}}</h4>
                  </div>
                </div>
              </router-link>
          </div>

        </div>

        <!-- add news -->
        <div class="row">
          <div class="col_1">
            <Addnews />
          </div>
        </div>
        

      </div>
    
    </div>
    <!-- end of news and updates  -->

    <!-- image slider -->
    <!-- <ImagesSlider  :News="News" :featureds="featureds"/> -->
    <!-- end of image slider -->

    <!-- why choose us -->
    <div class="small_container">
      <!-- title with after effect  -->
      <h2 class="title">why choose us ?</h2>
      
      <p class="para">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum lorem ipsumlorem ipsumlorem</p>

      <div class="row">
        <!-- reason 1 -->
        <div class="col_3whyus">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">
              
              <div class="icon"><span class="material-icons">man_2</span></div>
              <h3>convenient service</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>
        
        <!-- Reason 2 -->
        <div class="col_3whyus">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">

              <div class="icon"><span class="material-icons">search_off</span></div>
              <h3>no more Searching</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>
        <!-- reason 3 -->
        <div class="col_3whyus">
          <!-- for background and it's effect -->
          <div class="single">
            <!-- info -->
            <div class="info">
              
              <div class="icon"><span class="material-icons">support_agent</span></div>
              <h3>24x7 support</h3>
              <p class="para">lorem ipsum lorem ipsum</p>
            
            </div>
          
          </div>
        
        </div>
        
      </div>
      
    </div>
    <!-- end of why choose us -->
  
  </div>
  <!-- end of home -->
</template>

<script>

import {ref} from 'vue'
import Addnews from '@/components/Addnews'
import ImagesSlider from '@/components/ImagesSlider'
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'

export default {
  name: 'Home',
  components: { Addnews , ImagesSlider },
  setup(){

    const showsignup = ref(true)
    const showapply = ref(false)
    const showcreatejob = ref(false)

    // const darkenUpdate = ref(null)
    const {user} = getUser()

    const {documents : News , error} = getCollection("news")

    const {documents : featureds} = getCollection("Jobs" ,
      ['featured' , '==' , true]
    )
 
    // const handleEntry = () => {
    //   console.log(darkenUpdate.value)

    //   darkenUpdate.value.forEach( k => {
    //     k.childNodes[0].classList.add("image-darken");
    //   })

    // }

    // const handleExit = () => {
    //   console.log(darkenUpdate.value)

    //   darkenUpdate.value.forEach( k => {
    //     k.childNodes[0].classList.remove("image-darken");
    //   })

    // }

    return { showsignup , showapply , showcreatejob , News , error , featureds }
  }
}
</script>

<style scoped>

/* styling for introduction */
.background{
  background: linear-gradient(to bottom , #eaeaea 82% , #fafafa 18%);
  /* position : absolute; */
  /* right : 0; */
  /* top : 0; */
  width: 100%;
  height: auto;
  margin-bottom : 150px;
  /* overflow-x : hidden; */
  /* z-index : -2; */
}

/* styling for about section */
.background2{
  width: 100%;
  display : flex;
  height : auto;
  align-items : center;
  margin : 20px 0 100px;
  /* overflow-x : hidden; */
  /* z-index : -1; */
}

/* styling for about section */
.backgroundeffect{
  background: linear-gradient(to left , #eaeaea 75% , #fafafa 25%);
  max-height : auto;
  z-index: 1;
}

/* row with flex for centering an element within */
.row{
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
}

/* column with 50% of space */
.col_2{
  flex-basis: 50%;
  min-width : 250px;
  position : relative;
}

/* styling for intro image */
.background .col_2 div img{
  /* max-width: auto; */
	width: 85%;
  margin: 80px 0 0;
  position : relative;
}

/* before effect on intro image */
.background .col_2 div::before{
  content : '';
  width : 80px;
  height : 80px;
  right : 12%;
  top : 11%;
  position : absolute;
  z-index: 1;
  border : 2px solid black
}

/* after effect on intro image */
.background .col_2 div::after{
  content : '';
  width : 80px;
  height : 80px;
  left : -6%;
  bottom : -3%;
  position : absolute;
  z-index: 1;
  border : 2px solid black

}

/* styling for intro heading 1 */
.background .col_2 h1{
  /* margin: 170px 75px 10px; */
  text-transform: capitalize;
  max-width : 70%;
  margin : 170px auto 10px;
  /* text-align: center; */
  
}

/* styling for introduction and about */
.background .col_2 p , .background2 .col_2 p{
  margin : 20px auto 10px;
  max-width : 70%;
  font-size : 14.5px;
}

.background button , .background2 button{
  margin : 20px auto 10px;
  display : block;
  /* min-width : 70%; */
}

/* styling for button used in home page */
.homebtn{
  padding: 10px 12px;
  border: 2px solid black;
  background : black;
  color : white;
  cursor : pointer;
  position : relative;
  border-radius: 0px;
  /* z-index : 4; */
}

/* link color */
.homebtn a{
  color : white ;
}

/* hover effect on home button */
.homebtn:hover{
  background-color: transparent;
  color : black ;
  transition : 0.5s ease all;
}
/* hover effect on link within home button */
.homebtn a:hover{
  color : black;
}

/* about section */
/* styling for about image */
.background2 .col_2 div img{
  width : 75%;
  margin-top: -25px;
  margin-bottom : -25px;
  margin-left : 130px;
  position : relative;

}

/* after effect on about image */
.background2 .col_2 div::after{
  content : '';
  width : 80px;
  height : 80px;
  left : 85%;
  bottom : -13%;
  position : absolute;
  z-index: -1;
  border : 2px solid black
}

/* styling for about heading 2 */
.background2 .col_2 h2{
  margin: 20px auto 10px;
  text-transform: capitalize;
  max-width : 70%;
}

/* our services */
/* container with max-width and margin left and right auto to center */
.small_container{
	max-width: 1080px;
	margin: 80px auto;
	padding-right: 25px;
	padding-left: 25px;
	/*margin-bottom: 3rem;*/
}

/* column with 70% of space */
.col_1{
  flex-basis: 60%;
  min-width : 250px;
  position : relative;
}

/* styling for h3 and class para within small_container */
.small_container h3 , .para{
  text-align: center;
  line-height : 15px;
  margin-bottom : 20px;
  text-transform : capitalize;
}

/* styling class title within small_container */
.small_container .title{
  text-align: center;
  line-height : 15px;
  text-transform : capitalize;
	position: relative;
	margin: 0rem auto 32px;
	line-height: 4rem;
	color: black;
	/*letter-spacing: var(--mainSpacing);*/
	font-family: 'Montserrat', sans-serif;
	word-spacing: 0.4rem;
}

/* after effect on title within small_container */
.small_container .title:after{

	position: absolute;
	content: "";
	background: #4b71ff;
	width: 7rem;
	/* 7rem equal to 112px */
	height: 5px;
	border-radius: 5px;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);

}

/* styling for single service or why choose us */
.single {
    padding: 25px;
    background: #fff;
    box-shadow: 15px 15px 24px 5px rgba(128,128,128,0.75);
    -webkit-box-shadow: 15px 15px 24px 5px rgba(128,128,128,0.75);
    -moz-box-shadow: 15px 15px 24px 5px rgba(128,128,128,0.75);
    margin: 24px 32px;
    transition: all ease 0.2s;
}

/* hover effect on single */
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
}

/* how it works */
/* row with flex for space between an element within */
.row2{
  display : flex;
  justify-content: space-between;
  margin-top : 60px;
}

/* styling for title 2 / for aligning purpose only */
.row2 .title2{
  text-align : left;
}

/* styling for centering icons */
.row2 .icon , .row .icon{
  text-align : center;
}

/* styling for material class */
.material-icons{
  cursor : pointer;
  margin-bottom : 20px;
  padding : 5px;
  border : 2px solid #777;
  border-radius: 50%;
  color : #eaeaea
}

/* hover affect on material class */
.material-icons:hover{
  color : #777;
}

/* removing margin left and right from row2 Button */
.row2 button {
  margin : 20px 0px 10px;
}

/* news and updates */
/* styling to provide bg color */
.backgroundColor1{
  height : auto;
  width : 100% ;
}

/* column with 30% of space */
.col_3{
	flex-basis: 30%;
	min-width: 100px;
	/* margin-right: 2.2rem; */
  margin : 25px 2.2rem 30px 0;
}

.col_3whyus{
	flex-basis: 30%;
	min-width: 100px;
	/* margin-right: 2.2rem; */
  margin : 25px 1.2rem 30px 0;
}

/* styling for class updates / main reason to align left */
.small_container .updates{
  text-align: left;
  line-height : 15px;
  text-transform : capitalize;
	line-height: 2.5rem;
	word-spacing: 0.4rem;
}

/* small container with 100% width */
.small_container2{
	max-width: 100%;
	margin: 80px auto;
	padding: 30px 180px;
	/*margin-bottom: 3rem;*/
  background : #eaeaea;
}

/* styling for news and event */
/* wrapper for news and event */
/* .update_item_wrapper {
	position: relative;
} */

/* styling for news and events image */
/* .update_image_background{
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 280px;
	width: 100%;
} */

/* styling for class text wrapper */
/* .text_wrapper {
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding-left: 90px;
	padding-right: 90px;
	height: 100%;
} */

/* styling for text wrapper and text / by default it's not displayed */
/* .text_wrapper .subtitle {
	transition: 1s;
	color: transparent;
	font-weight: 600;
} */

/* applying dark effect to news and events image */
/* .image-darken {
	transition: 1s;
	filter: brightness(10%);
} */

/* when hover text is displayed */
/* .text_wrapper:hover .subtitle {
	color: lightseagreen;
	font-weight: 600;
} */

/* styling card for news and events section  */
.card {
  height : 20rem;
  width : 20rem;
  overflow : hidden;
  position : relative ;
  cursor : pointer ;
  border-radius : 20px;
}
/* styling for card image */
.card img {
  object-fit : cover;
  height : 100%;
  width : 100%;
}
/* styling for news and event details */
.details{
  position : absolute ;
  left : 0;
  bottom : 0;
  width : 100%;
  height : 0%;
  padding : 0px 15px;
  background : rgba(0, 0, 0, 0.9);
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  opacity : 0;
  transition : 0.5s ease;
}
/* styling for h4 within details class */
.details h4{
  color: lightseagreen;
  text-transform : capitalize;
  margin-bottom : 8px;
  padding : 0px 30px 0px 20px;
}

/* hover effect on news and event */
.card:hover .details{
  opacity : 1;
  height : 100%;
}

/* media query */
@media screen and (max-width : 1900px){
  .background .col_2 p, .background2 .col_2 p{
    font-size : 21px;
  }
  .background .col_2 div::before{
    top : 8%;
  }
  .background .col_2 div::after{
    left : -4%;
  }

  .card{
    width : 28rem;
    height : 28rem;
  }
  .small_container{
    max-width : 1400px;
  }
}
@media screen and (max-width : 1825px){
  .background .col_2 p, .background2 .col_2 p{
    font-size : 20px;
  }
  .card{
    width : 25rem;
    height : 25rem;
  }
}

@media screen and (max-width : 1750px){
  .background .col_2 p, .background2 .col_2 p{
    font-size : 19px;
  }
}

@media screen and (max-width : 1700px){

  .background .col_2 p, .background2 .col_2 p{
    font-size : 18px;
  }
}

@media screen and (max-width : 1650px){

  .background .col_2 p, .background2 .col_2 p{
    font-size : 17px;
  }
  .small_container{
    max-width : 1300px;
  }
  .card{
    width : 23rem;
    height : 23rem;
  }
}

@media screen and (max-width : 1600px){

  .small_container{
    max-width : 1200px;
  }

}

@media screen and (max-width : 1575px){


  .background .col_2 p, .background2 .col_2 p{
    font-size : 18px;
  }

}

@media screen and (max-width : 1525px){

.card{
    width : 21rem;
    height : 21rem;
}

}

@media screen and (max-width : 1500px){


  .background .col_2 p, .background2 .col_2 p{
    font-size : 17px;
  }

  .small_container{
    max-width : 1100px;
  }

}

@media screen and (max-width : 1450px){

  .background .col_2 p, .background2 .col_2 p{
    font-size : 14.5px;
  }

  .card{
    width : 20rem;
    height : 20rem;
  }

}

@media screen and (max-width : 1425px){

  .small_container{
    max-width : 1080px;
  }
}

@media screen and (max-width : 1400px){
  
  .background .col_2 p, .background2 .col_2 p{
    font-size : 13px;
  }

 .small_container2{
  padding : 30px 80px;
 }
 .background .col_2 div::before{
    top : 10%;
    right : 11%;
  }
}

@media screen and (max-width: 1325px){
  .background2 .col_2 div::after{
    left : 86%;
    bottom : -15%;
  }
}

@media screen and (max-width: 1300px){
  .small_container{
    max-width : 1020px;
  }
}

@media screen and (max-width: 1275px){
  .small_container{
    max-width : 1020px;
  }
  .background .col_2 p, .background2 .col_2 p{
    font-size : 11px;
  }
  
}

@media screen and (max-width: 1200px){
  .background .col_2 h1{
    margin : 120px auto 10px;
  }
  .small_container{
    max-width : 950px;
  }
  
}

@media screen and (max-width: 1150px){
  .col_3{
    margin : 25px 4.2rem 30px 0px;
  }
  .background .col_2 p, .background2 .col_2 p{
    font-size : 10px;
  }
  .background2 .col_2 div::after{
    left: 87%;
    bottom : -17%;
  }
}

@media screen and (max-width : 1075px){
  .background2 .col_2 div::after{
    width : 60px;
    height : 60px;
    left : 91%;
    bottom : -11%;
  }
  .background .col_2 p, .background2 .col_2 p , .background2 .col_2 h2 
  ,.background .col_2 h1{
    max-width : 80%;
  }

  .small_container{
    max-width : 875px;
  }

  .background .col_2 div::before{
    width : 60px;
    height : 60px;
    top : 14%;
  }

  .background .col_2 div::after{
    width : 60px;
    height : 60px;
  }

  .background .col_2 p, .background2 .col_2 p{
    font-size : 10px;
  }

  .background2 .col_2 div::after{
    bottom : -17%;
  }

  .card{
    width : 18rem;
    height : 18rem;
  }
  
}

@media screen and (max-width : 1025px){
  .background .col_2 p, .background2 .col_2 p, .background2 .col_2 h2, .background .col_2 h1{
    max-width : 90%;
  }
  .background2 .col_2 div img{
    margin-left : 100px;
  }
  .background2 .col_2 div::after{
    bottom : -10%;
    left : 86%;
  }
   .small_container{
    max-width : 800px;
  }

  .background{
    margin-bottom : 120px;
  }
  
}

@media screen and (max-width : 975px){
  .col_3whyus{
    margin : 25px 0rem 30px 0px;
  }
  .background .col_2 , .background2 .col_2{
    flex-basis : 100%;
  }
  .background .col_2 p, .background2 .col_2 p, .background2 .col_2 h2, .background .col_2 h1{
    max-width : 50%;
  }
  .background .col_2 div img{
    display : block;
    max-width : 40%;
    margin : 80px auto 0px;
  }
  .background .col_2 div::before{
    top : 17%;
    right : 28%;
  }
  .background .col_2 div::after{
    left : 28%;
    bottom : -4%;
  }
  .background .col_2 p, .background2 .col_2 p{
    font-size : 15px;
  }
  .background2 .col_2 div img{
    width : 40%;
    margin : 0px auto;
    display : block;
  }
  .background .col_2 p, .background2 .col_2 p, .background2 .col_2 h2, .background .col_2 h1{
    margin : 30px auto 20px;
  }
  .backgroundeffect{
    background: linear-gradient(to left , #eaeaea 80% , #fafafa 20%);
  }
  .card{
    height : 16rem;
    width : 16rem;
  }
  .background2 .col_2 div::after{
    left : 66%;
    bottom : -6%;
  }
  
}

@media screen and (max-width : 900px){
  .small_container{
    max-width : 700px;
  }
  .card:hover{
    height : 15rem;
    width : 15rem;
  }
  .background .col_2 div::before , .background .col_2 div::after , .background2 .col_2 div::after{
    height : 50px;
    width : 50px;
  }
}

@media screen and (max-width : 800px){
  .background .col_2 div::before , .background .col_2 div::after , .background2 .col_2 div::after{
    height : 40px;
    width : 40px;
  }
  .background .col_2 div::before{
    top : 20%;
  }
  .card:hover{
    height : 13rem;
    width : 13rem;
  }
  .small_container{
    max-width : 650px;
  }
}

@media screen and (max-width : 750px){
  .col_2 , .col_3 , .col_3whyus{
    flex-basis : 100%;
  }

  .row2{
    flex-wrap : wrap;
  }

  .col_3whyus{
    margin : 0px;
  }

  .row2 .col_2{
    text-align : center;
    margin-bottom : 50px;
  }

  .row2 .title2{
    text-align : center;
  }
  .small_container{
    max-width : 550px;
  }
  .card{
    height : 15rem;
    width : 36rem;
  }
}

@media screen and (max-width : 700px){
  .card{
    width : 35rem;
  }
}

@media screen and (max-width : 675px){
  .background .col_2 p, .background2 .col_2 p, .background2 .col_2 h2, .background .col_2 h1{
    max-width : 60%;
  }
  .backgroundeffect{
    background: linear-gradient(to left , #eaeaea 85% , #fafafa 15%);
  }
  .card{
    width : 34rem;
  }
  .background .col_2 h1{
    font-size : 25px;
  }
}

@media screen and (max-width : 650px){
  .card{
    width : 29rem;
  }
  .small_container{
    max-width : 450px;
  }

  .col_1{
    flex-basis : 75%;
  }

  .background .col_2 div::before, .background .col_2 div::after, .background2 .col_2 div::after{
    height : 30px;
    width : 30px;
  }
  .background .col_2 div::before{
    top : 25%;
  }
  .background2{
    margin : 20px 0px 80px;
  }
}

@media screen and (max-width : 575px){
  .card{
    width : 25rem;
  }

  .background .col_2 div img {
    max-width : 50%;
  }

   .background2 .col_2 div img{
    width : 50%;
   }

   .background2 .col_2 div::after{
    left: 71%;
   }

  .background .col_2 div::before{
    top : 23%;
    right : 23%;
  }

  .background .col_2 div::after{
    left : 22%;
  }

}

@media screen and (max-width : 550px){
  .small_container{
    max-width : 400px;
  }
}

@media screen and (max-width : 500px){
  .background .col_2 p, .background2 .col_2 p, .background2 .col_2 h2, .background .col_2 h1{
    max-width : 70%;
  }
  .card{
    width : 20rem;
  }
  .small_container{
    max-width : 350px;
  }
  .backgroundeffect{
    background: linear-gradient(to left , #eaeaea 90% , #fafafa 10%);
  }
}

@media screen and (max-width : 475px){
  .background .col_2 div img {
    max-width : 60%;
  }

   .background2 .col_2 div img{
    width : 60%;
   }
   .col_1{
    flex-basis : 80%;
   }

   .background2 .col_2 div::after{
    left : 75%;
   }
   .background .col_2 div::before{
    right : 18%;
   }
   .background .col_2 div::after{
    left : 17%;
   }
}

@media screen and (max-width : 450px){
  .small_container{
    max-width : 325px;
  }
  .card{
    width : 17rem;
  }
  .small_container2{
    padding : 30px 60px;
  }
}
@media screen and (max-width : 400px){
  .small_container{
    max-width : 275px;
  }
  .card{
    width : 15rem;
  }
}

@media screen and (max-width : 350px){
  .small_container{
    max-width : 250px;
  }
  .card{
    width : 13rem;
  }
  .small_container{
    padding-left : 0px;
    padding-right : 0px;
  }
  .backgroundeffect{
    background: linear-gradient(to left , #eaeaea 100% , #fafafa 0%);
  }
}

@media screen and (max-width : 325px){
  
  .card{
    width : 13.8rem;
  }
  .background .col_2 div::before{
    top : 30%;
    right : 17%;
  }
  .small_container2{
    padding : 30px 30px;
  }
}

@media screen and (max-width : 280px){
 
.small_container2 h1{
  font-size : 17px;
}
  .background .col_2 div img {
    max-width : 70%;
  }

   .background2 .col_2 div img{
    width : 70%;
   }
   .background .col_2 div::before{
    right : 11%;
   }
   .background .col_2 div::after{
    left : 11%;
   }
   .background2 .col_2 div::after{
    left: 77%;
   }
 
}


</style>
