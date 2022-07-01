<template>
    <div class="error" v-if="error">{{error}}</div>

    <div v-if="Job" class="job-details" :class="{notownership : !ownership}">

        <div class="job-info">
            
            <h1>{{Job.Job_title}}</h1>
            <p>- Starts from <span>{{Job.Job_start}}</span> to <span>{{Job.Job_end}}</span></p>
            <p>- Salary : <span>{{Job.Job_payment}}</span></p>
            <p>- Company : <span>{{Job.Job_company}}</span> , contact us at <span>{{Job.Job_contact}}</span></p>
            <p>- Work Location : <span>{{Job.Job_loaction}}</span></p>
            <div v-if="showDescription" class="description">
                <p>- <span>{{Job.Job_description}}</span></p>
            </div>
            
            <a  @click="handleButton" class="more">{{Read}}</a>
                
            <router-link :to="{name: 'Editjobs' , params : {id : Job.id}}">
                <button v-if="ownership" class="material-icons">edit</button>
            </router-link>
            
            <button v-if="ownership" class="material-icons" @click="handleDelete()">delete</button>

            <Deletemodal v-if="showModal" :id='Job.id' @hideModal = "showModal = false"/>
            <!-- person who is not owner of perticular event can apply (users)
                 and companies can not apply 
            -->
            <Addapplicants v-if="!ownership && !company" :Job="Job" />

        </div>

        <div class="applicant" v-if="ownership" >

            <h1>Applications</h1>
            <!-- table containing applicants -->
            <table>
                <!-- row 1 -->
                <tr>
                    <!-- heading 1 -->
                    <th>name</th>
                    <!-- heading 2 -->
                    <th>email</th>
                    <!-- heading 3 -->
                    <th>contact</th>
                </tr>

                <tbody id="tbody1" v-for="applicant in Job.Job_applications" :key="applicant.id">
                    <tr>
                        <td>{{applicant.name}}</td>
                        <td>{{applicant.email}}</td>
                        <td>{{applicant.phoneNo}}</td>
                    </tr>
                </tbody>
                            
            </table>
            <!-- closing of table -->
        </div>
        
    </div>

</template>

<script>
import getDocument from '@/composables/getDocument'
import useDocument from '@/composables/useDocument'
import {useRouter} from 'vue-router'
import {ref , computed} from 'vue'
import getUser from "@/composables/getUser"
import Addapplicants from '@/components/Addapplicants.vue'
import Deletemodal from '@/components/Deletemodal.vue'

export default {
    props : ["id"],
    components: {Addapplicants , Deletemodal},
    setup(props){

        const {document : Job } = getDocument("Jobs" , props.id)

        const {deleteDoc , isPending , error} = useDocument('Jobs')

        const router = useRouter()

        const { user } = getUser()

        const showModal = ref(false)

        const Read = ref('Read more')

        const showDescription = ref(false)
        
        const company = ref(false)

            // company
            if(user.value){
                if(user.value.photoURL == 'company'){
                    company.value = true
                    console.log(company.value)
                }else{
                    company.value = false
                }
            } 
    
        const handleDelete = () => {

            showModal.value = true
        }

        const handleButton = () => {
            showDescription.value =  !showDescription.value
            if(showDescription.value){
                Read.value = "Read less"
            }else{
                Read.value = "Read more"
            }
        }

        const ownership = computed(()=> {
            return Job.value && user.value && user.value.uid === Job.value.userID
        })

        // console.log(ownership)

        return {Job , isPending , showModal , error , Read , ownership , company ,  handleDelete , showDescription , handleButton , user}
    }
}
</script>

<style scoped>
.job-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    /* margin: 0px 90px; */
}

.notownership {
    /* display: grid; */
    grid-template-columns: 1fr;
}

.notownership .job-info .more{
    margin-left: 42%;
    width: 15%;
}

.job-info{
    text-align: center;
    margin : 10px;
}

.job-info h1 {
    color : black;
    text-transform: capitalize;
    margin-bottom: 20px;
}

.applicant{
    margin : 0px 40px;
}
.applicant h1{
    color : black;
    text-transform: capitalize;
    margin-bottom: 20px;
    text-align : center;
}

.job-info p{
    margin-bottom : 15px;
}
.job-info p span{
    color : rgba(109, 0, 0, 0.8);
    text-transform : capitalize;
}
.job-info a , button{
    margin: 20px 10px;
}
.job-info .more {
    position: relative;
    padding : 10px 15px;
    display: block;
    width : 35%;
    margin: 15px auto;
    text-align: center;
    background : lightgrey;
    color:white;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 500;
    letter-spacing : 3px;
    font-size : 14px;
    z-index : 1;
}

/* .job-info .more::before{
    content : 'read more'
} */

@media screen and (max-width : 1000px){
    .applicant{
        margin : 0px 20px;
    }
    .job-info{
        margin : 10px 10px 10px 40px;
    }
    .job-info h1 , .applicant h1{
        font-size : 25px;
    }
    .job-info p{
        font-size : 15px;
    }
}

@media screen and (max-width : 825px){
   .job-details{
       grid-template-columns: 1fr; 
   }
   .job-info{
        margin : 0px;
    }
    
}

@media screen and (max-width : 500px){
    
    .applicant{
        overflow-x: auto;
    }
}

@media screen and (max-width : 550px){
    .notownership .job-info .more{
        margin-left: 40%;
        width: 15%;
    }
    .job-info h1 {
        font-size : 25px;
        margin-bottom: 20px;
    }
}

@media screen and (max-width : 375px){

    .job-info h1 {
        font-size : 22.5px;
    }
    .job-info p {
        font-size : 14px;
    }
}

@media screen and (max-width : 325px){

    .job-info h1 {
        font-size : 20px;
    }
    .job-info p {
        font-size : 12px;
    }

}


</style>