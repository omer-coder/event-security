<template>
  <div class="new-detail">
      <div class="row">
        <!-- image -->
        <div class = "col_2">
          <img :src = "New.coverUrl" />
          <button class="homebtn" v-if="ownership" @click="handleDelete">Delete News</button>
        </div>
        <!-- details -->
        <div class="col_2">
          <h2>{{New.News_title}}</h2>
          <p>{{New.News_description}}</p>
        </div>
      </div>
  </div>
</template>

<script>

import getDocument from '@/composables/getDocument'
import useDocument from '@/composables/useDocument'
import useStorage from '@/composables/useStorage'
import getUser from '@/composables/getUser'
import {computed } from 'vue'
import {useRouter} from 'vue-router'

export default {
  props: ["NewsId"],
  setup(props){

    // getting single item
    const {document : New , error} = getDocument('news' , props.NewsId)

    const {deleteImage} = useStorage()
     
    const {deleteDoc} = useDocument('news')

    // getting current user
    const {user} = getUser()

    // router
    const router = useRouter()

    // ownership
    const ownership = computed(() => {
      return New.value && user.value && user.value.uid === New.value.userId
    })

    // deleting news and image from storage
    const handleDelete = async () => {
      await deleteImage(New.value.filePath)
      await deleteDoc(props.NewsId)
      router.push({name : "Home"})
    }

    return { New , error , deleteDoc , handleDelete , ownership }

  }
}
</script>

<style scoped>
.new-detail{
  max-width: 1080px;
	margin: 80px auto;
	padding-right: 25px;
	padding-left: 25px;
	/*margin-bottom: 3rem;*/
}
.row{
  display : flex;
  flex-wrap : wrap;
  justify-content : center;
}
.col_2{
  flex-basis: 50%;
  min-width : 250px;
  position : relative;
}
.col_2 img{
  height : 300px;
  margin : 10px 0px 30px 0px;
  width : 90%;
  object-fit : cover;
}
.col_2 h2{
  margin-bottom : 20px;
}

.homebtn{
  padding: 10px 12px;
  border: 2px solid black;
  background : black;
  color : white;
  cursor : pointer;
  position : relative;
  border-radius: 0px;
}

/* hover effect on home button */
.homebtn:hover{
  background-color: transparent;
  color : black ;
  transition : 0.5s ease all;
}


</style>