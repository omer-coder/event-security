<template>

    <div class="tablecontainer">
        <!-- table containing orders -->
    <table>
        <!-- row 1 -->
        <tr>
            <!-- heading 1 --> 
            <th>Users</th>
            <!-- heading 2 -->
            <th>Email</th>
            <!-- heading 3 -->
            <th>Type</th>
            <!-- heading 4 -->
            <th>Delete</th>
         </tr>

        <tbody id="tbody1" v-for="user in users" :key="user.id">
            <tr>
                <td>{{user.displayName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.status}}</td>
                <td><button class="material-icons" @click="handleDelete(user.id)">delete</button></td>
            </tr>
        </tbody>
                    
    </table>
    <!-- closing of table -->
    </div>
    
</template>

<script>
import getCollection from '@/composables/getCollection'
import useDocument from '@/composables/useDocument'

export default {
    setup(){

        const {documents : users , error} = getCollection("Users")
        
        const {deleteDoc } = useDocument("Users")

        const handleDelete = async (id) => {

            await deleteDoc(id)
        }

        return {users , error , handleDelete }
    }
}
</script>

<style>
/* ------------ styling for tables --------------- */
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

tr:nth-child(even) {
    background-color: rgb(0, 64, 255);
}
</style>