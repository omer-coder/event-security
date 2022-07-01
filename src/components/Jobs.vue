<template>
    <div class="tablecontainer">
        <!-- table containing orders -->
        <table>
            <!-- row 1 -->
            <tr>
                <!-- heading 1 --> 
                <th>Job Title</th>
                <!-- heading 2 -->
                <th>Start date</th>
                <!-- heading 3 -->
                <th>End date</th>
                <!-- heading 4 -->
                <th>Payment</th>
                <!-- heading 5 -->
                <th>Contact Number</th>
                <!-- heading 6 -->
                <th>Company</th>
                <!-- heading 7 -->
                <th>Job location</th>
                <!-- heading 8 -->
                <th>Job Description</th>
                <!-- heading 9 -->
                <th>Applications</th>
                <!-- heading 10 -->
                <th>Delete</th>
            </tr>

            <tbody id="tbody1" v-for="Job in Jobs" :key="Job.id">
                <tr>
                    <td>{{Job.Job_title}}</td>
                    <td>{{Job.Job_start}}</td>
                    <td>{{Job.Job_end}}</td>
                    <td>{{Job.Job_payment}}</td>
                    <td>{{Job.Job_contact}}</td>
                    <td>{{Job.Job_company}}</td>
                    <td>{{Job.Job_loaction}}</td>
                    <td>{{Job.Job_description}}</td>
                    <td>
                        <span v-for="application in Job.Job_applications" :key="application.applicantId">
                            <div>{{application.name}} - {{application.phoneNo}}</div> 
                        </span>
                    </td>
                    <td><button class="material-icons" @click="handleDelete(Job.id)">delete</button></td>
                </tr>
            </tbody>
                    
                
        </table>
        <!-- closing of table -->
    </div>
    
</template>

<script>

import getCollection from "@/composables/getCollection"
import useDocument from "@/composables/useDocument"

export default {
    setup(){

        const {documents : Jobs , error} = getCollection('Jobs')
        
        const {deleteDoc} = useDocument('Jobs')
        
        const handleDelete = async (id) => {

            await deleteDoc(id)

        }
        
        return { Jobs , error , handleDelete }

        
    }
}
</script>

<style>
/* ------------ styling for tables --------------- */
.tablecontainer{
    overflow-x: auto;
    margin: 55px 150px;
}
table{
    width: 100%;
    margin: 0rem 0rem 2rem;
    border: 1px solid black;
}

th , td{
    border: 1px solid black;
    /* equal to 9px */
    padding: 9px;
	text-align: center;
	/* content: "\aaa "; */
	white-space: pre;
}

tr:nth-child(even){
    background-color: yellow
}

td span div{
    line-height: 2rem;
}

@media screen and (max-width : 850px){
    .tablecontainer{
       margin: 55px 110px; 
    }
}
@media screen and (max-width : 700px){
    .tablecontainer{
       margin: 55px 90px; 
    }
}
@media screen and (max-width : 600px){
    .tablecontainer{
       margin: 55px 70px; 
    }
}
@media screen and (max-width : 500px){
    .tablecontainer{
       margin: 55px 60px; 
    }
}
@media screen and (max-width : 400px){
    .tablecontainer{
       margin: 55px 40px; 
    }
}
@media screen and (max-width : 350px){
    .tablecontainer{
       margin: 55px 30px; 
    }
}
@media screen and (max-width : 300px){
    .tablecontainer{
       margin: 55px 20px; 
    }
}
@media screen and (max-width : 280px){
    .tablecontainer{
       margin: 55px 10px; 
    }
}
</style>