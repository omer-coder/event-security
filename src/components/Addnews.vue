<template>
  <div class="add-news">
    <button class="homebtn" v-if="!showform & admin" @click="showform = true">Add News</button>
    <form v-if="showform" @submit.prevent="handleSubmit">
        <h4>Any updates or News</h4>
        <input type="text" placeholder="News Title" v-model="newstitle" required />
        <textarea placeholder="News Description" v-model="newsdescription" required></textarea>
        <label>Upload News Cover Image</label>
        <input type="file" @change="handlechange" />
        <div class="error">{{fileError}}</div>
        <button class="homebtn" v-if="!isPending">Add News</button>
        <button class="homebtn" v-if="isPending">Saving ..!</button>
    </form>
  </div>
</template>

<script>

import {ref} from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import {timeStamp} from '@/firebase/config'
import { projectauth } from '../firebase/config'


export default {
    setup(){

        const newstitle = ref('')
        const newsdescription = ref('')
        const showform = ref(false)

        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false)

        // admin
        const admin = ref(false)
        
        const {url , filePath , uploadImage} = useStorage()
        const {addDoc , error} = useCollection('news')
        const {user} = getUser()

        const handleSubmit = async () => {

            if(file.value){

                isPending.value = true

                await uploadImage(file.value)

                await addDoc({
                    News_title : newstitle.value,
                    News_description : newsdescription.value,
                    userId : user.value.uid,
                    username : user.value.displayName,
                    coverUrl : url.value,
                    filePath : filePath.value,
                    createdAt : timeStamp()
                })
                
                isPending.value = false

                if(!error.value){
                    console.log("news added")
                    showform.value = false
                    newstitle.value = ""
                    newsdescription.value = ""
                }
            }
            
        }

        const filetypes = ['image/png' , 'image/jpeg']

        const handlechange = (e) => {

            const selected = e.target.files[0]
            console.log(selected)

            if(selected && filetypes.includes(selected.type)){
                file.value = selected
                fileError.value = null
            }else{
                file.value = null
                fileError.value = 'Please select file type (png , jpeg )'
            }

        }

        projectauth.onAuthStateChanged(() => {

            setTimeout(() => {

                if(user.value){
                
                    // admin
                    if(user.value.email == 'omeribrahim398@gmail.com'){
                        admin.value = true
                        // console.log(admin.value)
                    }else{
                        admin.value = false
                    }
                }

            }, 1100)    

        })

        return {newstitle , newsdescription , showform , file , fileError , handleSubmit , handlechange , isPending , admin}
    }
}
</script>

<style scoped>

.add-news{
    text-align: center;
    margin-top: 40px;
}
form {
    max-width: 100%;
    text-align: center;
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

input[type="file"] {
    border: 0;
    padding: 0;
}

label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
    text-align : left;
}
</style>