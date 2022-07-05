<template>
<div class="MAINCONTAINER">
  <div class="slide-container">
    <div class="slide-content">
        <div class="card-wrapper" >
              <div class="card" v-for="New in News" :key="New.id" >
              <router-link :to="{name : 'Newsdetail' , params : {NewsId : New.id}}">
                <img :src="New.coverUrl">
                <div class="details">
                  <h4>{{New.News_title}}</h4>
                </div>
                </router-link>
              </div>
        </div>
        <!-- 2 -->
        <div class="card-wrapper">
              
                <div class="card" v-for="featured in featureds" :key="featured.id">
                <router-link :to="{name : 'Jobdetails' , params : {id : featured.id}}">
                  <img src="@/assets/pi4.jpeg">
                  <div class="details">
                    <h4>{{featured.Job_title}}</h4>
                    <h4>{{featured.Job_company}}</h4>
                    <h4>{{featured.Job_contact}}</h4>
                  </div>
                  </router-link>
                </div>
        </div>

    </div>
  </div>
</div>
</template>

<script>

export default {
    props : ['News' , 'featureds'],
    setup(props){

    }
}
</script>

<style>
.MAINCONTAINER{
  min-height : 100vh;
  display : flex;
  align-items: center;
  justify-content: center;
  background-color : #efefef;
}

.slide-container{
  max-width : 1120px;
  width : 100%;
  padding : 40px 0;
}
.slide-content{
  margin : 0 40px;
  background : red;
  /* display : flex; */
}

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
</style>